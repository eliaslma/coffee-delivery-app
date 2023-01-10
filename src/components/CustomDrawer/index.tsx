import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList,} from '@react-navigation/drawer';
import { SignOut } from 'phosphor-react-native';
import { getBottomSpace, getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

import { 
    Container, 
    Header, 
    UserWrapper, 
    Photo, 
    User, 
    UserGreeting, 
    UserName, 
    SignOutWrapper, 
    Icon, 
    OutTitle 
} from './styles';
import { useAuth } from '@myApp/hooks/auth';

export function CustomDrawer(props) {

    const { user, signOut } = useAuth()

    return (
            <Container>
                <Header>
                    <UserWrapper  style={ isIphoneX() ? {marginTop: getStatusBarHeight() + 16} : { marginTop: 16}}>
                        <Photo source={{ uri: user.picture}}/>
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>{user.name}</UserName>
                        </User>
                    </UserWrapper>
                </Header>
                <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 8}}>
                    <View style={{flex: 1}}>
                        <DrawerItemList {...props}/>
                    </View>
                </DrawerContentScrollView>
                <SignOutWrapper style={ isIphoneX() ? { paddingBottom: getBottomSpace()} : {paddingBottom: 16}}>
                    <Icon onPress={signOut}>
                        <SignOut size={28} weight="bold" color={'#8047F8'}/>
                        <OutTitle>Sair</OutTitle>
                    </Icon>
                </SignOutWrapper>
            </Container>
    );
  }