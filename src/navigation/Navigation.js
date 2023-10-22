import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Intro from '../screens/Intro';
import TabNavigator from './TabNavigator';
import HomeScreen from '../screens/TabNavigatorScreens/HomeScreen';
import LoginEmail from '../screens/RibbitLoginPage/LoginEmail';
import CreateAccount from '../screens/RibbitLoginPage/CreateAccount';
import FbFriends from '../screens/RibbitDiscover/FbFriends';
import DiscoverPeople from '../screens/RibbitDiscover/DiscoverPeople';
import AddProfile from '../screens/RibbitProfile/AddProfile';
import LoginPhone from '../screens/RibbitLoginPhone/LoginPhone';
import LoginOTP from '../screens/RibbitLoginPhone/LoginOTP';
import RibbitSearch from '../screens/RibbitSearch/RibbitSearch';
import ForYou from '../screens/RibbitSearch/ForYou';
import Accounts from '../screens/RibbitSearch/Accounts';
import Reels from '../screens/RibbitSearch/Reels';







const Stack = createNativeStackNavigator();

function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="TabNavigator"
                screenOptions={{ headerShown: false }}>
                 <Stack.Screen name="Splash" component={Splash} />
                 <Stack.Screen name="Intro" component={Intro} />
                <Stack.Screen name = "LoginEmail" component = {LoginEmail}/>
                <Stack.Screen name = "CreateAccount" component = {CreateAccount}/>
                <Stack.Screen name = "FbFriends" component = {FbFriends}/>
                <Stack.Screen name = "DiscoverPeople" component = {DiscoverPeople}/>
                <Stack.Screen name = "AddProfile" component = {AddProfile}/>
                <Stack.Screen name = "LoginPhone" component = {LoginPhone}/>
                <Stack.Screen name = "LoginOTP" component = {LoginOTP}/>
                <Stack.Screen name = "RibbitSearch" component = {RibbitSearch}/>
                <Stack.Screen name = "ForYou" component = {ForYou}/>
                <Stack.Screen name = "Accounts" component = {Accounts}/>
                <Stack.Screen name = "Reels" component = {Reels}/>
                 {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
                 





                
                

                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;