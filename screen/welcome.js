import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, ImageBackground ,Image ,props, Pressable} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import login from './login';
import register from './register';
import { color } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
class home extends React.Component{

    render(){
        return(
            <>
           
                 <View style={styles.container}>
                <Image source={require('../images/pp.jpg')} 
                style={{ width: 100, height:100,justifyContent:"center",alignContent:"center", paddingBottom:10}}/>
              
            </View>
            
           <View
           style={styles.input}
           >
            <View style={{padding:15}}>
             <Button color="blue" title="Login" style={styles.bt} onPress={() => this.props.navigation.navigate('Login')} />
            </View>
            
            <View style={{padding:15}}>
             <Button color="red" title="Register" onPress={() => this.props.navigation.navigate('register')} />
            </View>

               
           
           </View>
</>
        );
    }
}
export default home;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fafafa',
      color:'pink'
    },
    input:{
        flex:.5,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        paddingBottom:10,
        borderBottomEndRadius:10,
        backgroundColor:"#fafafa",
     
    },
    bt:{
    display:'flex',
    padding: 10,    
    alignItems:'center'   

    }
})