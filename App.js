import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerItemList,DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { } from 'react-native';

import 'react-native-gesture-handler';
import Login from './screen/login';
import register from './screen/register';
import home from './screen/home';
import screen from './screen/welcome';
import bill from './screen/bill';
import login from './screen/login';
// import DrawerContent from './screen/DrawerContent'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log-out"
        onPress={() => props.navigation.navigate('register')}
      />
      <Icon name="exit-outline" style={{paddingLeft:12,paddingTop:15}}
      onPress={() => props.navigation.navigate('Login')}
      size={13} color="red" >Log-out</Icon>

    </DrawerContentScrollView>
  );
}

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#1a261a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          // fontWeight: 'bold',
        },
      }}>
         
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'login'}
          // {headerLeft: null} 
        }
      />
      <Stack.Screen 
        name="register" 
        component={register} 
        options={{ title: 'register' }}
      />    
      <Stack.Screen 
       name="home" 
       component={root} 
       options={
         { title: 'home' },
         {headerLeft: null} 
       }
      />
       <Stack.Screen 
       name="welcome" 
       component={screen} 
       options={
         { title: 'screen' },
         {headerLeft: null} 
       }
      />
      <Stack.Screen 
        name="bill" 
        component={bill} 
        options={
          {title: 'bill'}
          // {headerLeft: null} 
        }
        />
    </Stack.Navigator>
  );
}
function root (){
  return(
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} >
        <Drawer.Screen name="profile" component={home} />
        <Drawer.Screen name="home" component={home} />
        <Drawer.Screen name="bill" component={bill} />
      </Drawer.Navigator>
  )
  
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}