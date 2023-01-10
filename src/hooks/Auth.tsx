import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";
import * as Google from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

interface AuthProviderProps{
    children: ReactNode;
}

interface User {
    id: string;
    name: string;
    email: string;
    picture?: string;
}

interface AuthContextProps{
    user: User;
    signInWithGoogle(): Promise<void>;
    signInWithApple(): Promise<void>;
    signOut(): Promise<void>;
    userStorageLoading: boolean;
}

const AuthContext = createContext({} as AuthContextProps)

function AuthProvider({ children } : AuthProviderProps){

    const [ request, response, promptAsync ] = Google.useAuthRequest({
        expoClientId: '643802899002-9omlsgi8302tu2muk51a2rd71i71848f.apps.googleusercontent.com',
        iosClientId: '643802899002-e114h7epcdn7mssfu7quai9q6tjufs3i.apps.googleusercontent.com',
        androidClientId: '643802899002-5qd9j00n2166batn0q0ssiiu3bhspmm2.apps.googleusercontent.com',
    });

    const [userInfos, setUserInfos] = useState<User>({} as User)
    const [userStorageLoading,setUserStorageLoading] = useState(true);
    const userStorageKey = '@gofinances:user'

    async function signInWithGoogle(){
        try { 
            await promptAsync({useProxy: true, showInRecents: true});
        }catch(error){
            throw Error(error)
        }
    
    }

    async function signInWithApple(){
        try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });

            if(credential){
                const userLogged: User = {
                    id: credential.user,
                    name: String(credential.fullName),
                    email: credential.email,
                }
                console.log('Sign Apple...',userLogged)
                await AsyncStorage.setItem(userStorageKey,JSON.stringify(userLogged))
                setUserInfos(userLogged)
            }
            // signed in
          } catch (error) {
            throw Error(error)
          }
    }

    async function getUserData({authentication}){

        const response = await axios(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`)
        const userLogged: User = {
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            picture: response.data.picture,
        }
        setUserInfos(userLogged)
        await AsyncStorage.setItem(userStorageKey,JSON.stringify(userLogged))
    }

    async function getUserDataStorage(){
        const userData = await AsyncStorage.getItem(userStorageKey)
        if(userData){
            const userDataFormatted = JSON.parse(userData) as User
            setUserInfos(userDataFormatted)
        }
        setUserStorageLoading(false)
        
    }

    async function signOut(){
        setUserInfos({} as User)
        await AsyncStorage.removeItem(userStorageKey)
    }

    useEffect(() => {
        getUserDataStorage()
    },[])

    useEffect(() => {
        if(response?.type === 'success'){
            getUserData(response)
        }
    },[response])


    return(
        <AuthContext.Provider 
            value={{
                user: userInfos,
                signInWithGoogle,
                signInWithApple,
                signOut,
                userStorageLoading
                
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)
    return context;
}

export {AuthProvider, useAuth}