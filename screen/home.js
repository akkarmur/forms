import React, {Component} from 'react';
import { View, Text, StyleSheet,Image, ImageBackground, Button, Alert,openDrawer} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

class home extends React.Component{
     homepress=()=>{
        Alert.alert("refresh")
    }

    render(){
        return(
            <>
            <View
            style={styles.container} >
                <ScrollView>
                {/* <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                    style={styles.seen}
                />   */}
                {/* <Button title="=" onPress="jh" style={styles.seen}/> */}
                <Image source={require('../images/pexels-alex-green-5692270.jpg')} 
                 style={{ width: 200, height:200,justifyContent:"center",alignContent:"center", marginBottom:20}}/>
                 <Image source={require('../images/pp.jpg')} 
                 style={{ width: 200, height:200,justifyContent:"center",alignContent:"center", marginBottom:20}}/>
                 <Image source={require('../images/pexels-alex-green-5692270.jpg')} 
                 style={{ width: 100, height:100,justifyContent:"center",alignContent:"center", marginBottom:20}}/>
                 <Image source={require('../images/pexels-alex-green-5692270.jpg')} 
                 style={{ width: 100, height:100,justifyContent:"center",alignContent:"center", marginBottom:20}}/>
                 <Image source={require('../images/pexels-alex-green-5692270.jpg')} 
                 style={{ width: 200, height:200,justifyContent:"center",alignContent:"center", marginBottom:20}}/>
                 <Image source={require('../images/pexels-alex-green-5692270.jpg')} 
                 style={{ width: 100, height:100,justifyContent:"center",alignContent:"center", marginBottom:20}}/>
                 <Image source={require('../images/pexels-alex-green-5692270.jpg')} 
                 style={{ width: 200, height:200,justifyContent:"center",alignContent:"center", marginBottom:20}}/>

                </ScrollView>
                  
            </View>
            <View style={styles.input}>

                {/* <Icon name="md-search-outline" size={20} color="#fff" /> */}

                <Icon.Button name="home-outline" size={30} color="#000" onPress={this.homepress} />
                <Icon name="cart-outline" size={30} color="#000000" />

                
                <Icon name="person-outline" size={30} color="#000000" />
               
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
      justifyContent: 'space-between',
      backgroundColor: '#fafafa',
    },
    input: {
        flex:.07,
        justifyContent:'space-between',
        backgroundColor:'#fafafa',
        flexDirection: 'row',
        borderTopWidth:1,
        shadowColor: "#000000",
        shadowOffset: {
            width: 10,
            height: 30,
        },
        shadowOpacity:1,
        shadowRadius:40,
        
        elevation: 60,
        
    },
    seen:{
        justifyContent:'flex-start',
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },

})