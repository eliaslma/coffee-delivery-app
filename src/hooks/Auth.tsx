import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";
import * as AuthSession from 'expo-auth-session';
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

type AuthResponseData = {
    params:{
        access_token: string;
    }
    type: string;
}

const AuthContext = createContext({} as AuthContextProps)

function AuthProvider({ children } : AuthProviderProps){

    const [userInfos, setUserInfos] = useState<User>({} as User)
    const [userStorageLoading,setUserStorageLoading] = useState(true);
    const userStorageKey = '@gofinances:user'

    async function signInWithGoogle(){
        try { 
            const CLIEND_ID = "643802899002-9omlsgi8302tu2muk51a2rd71i71848f.apps.googleusercontent.com";
            const REDIRECT_URI = "https://auth.expo.io/@eliaslma/coffee-delivery-app";
            const SCOPE = encodeURI("profile email");
            const RESPONSE_TYPE = "token";
            const authUrl = 
            `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIEND_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const {type, params} = await AuthSession.startAsync({authUrl}) as AuthResponseData;
            
            if(type === 'success'){
                const response = await axios(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
                if(response){
                    const userLogged: User = {
                        id: response.data.id,
                        name: response.data.name,
                        email: response.data.email,
                        picture: response.data.picture,
                    }
                    await AsyncStorage.setItem(userStorageKey,JSON.stringify(userLogged))
                    setUserInfos(userLogged)
                }
            }

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

    async function getUserData(){
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
        getUserData()
    },[])


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