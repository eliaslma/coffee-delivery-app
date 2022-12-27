import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';

import { SignOut } from 'phosphor-react-native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

import { Container, Header, UserWrapper, Photo, User, UserGreeting, UserName, SignOutWrapper, Icon, OutTitle } from './styles';



import { View } from 'react-native';


export function CustomDrawer(props) {
    
    
    return (
            
            <Container>
                
                <Header>
                  <UserWrapper>
                    <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/70176310?v=4'}}/>
                    <User>
                      <UserGreeting>Olá,</UserGreeting>
                      <UserName>Elias</UserName>
                    </User>
                  </UserWrapper>
                </Header>

                <DrawerContentScrollView {...props}>

                <View style={{flex: 1}}>
                  <DrawerItemList {...props}/>
                </View>

                </DrawerContentScrollView>
                <SignOutWrapper style={ isIphoneX ? { paddingBottom: getStatusBarHeight()} : {paddingBottom: 16}}>
                  <Icon>
                    <SignOut size={28} weight="bold" color={'#8047F8'}/>
                    <OutTitle>
                      Sair
                    </OutTitle>
                  </Icon>
                  
                </SignOutWrapper>
            </Container>
        
    );
  }