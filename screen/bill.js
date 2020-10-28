import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground ,Image ,props, Pressable} from 'react-native';
class bill extends React.Component{
    render(){
        return(
            <View
             style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:30,backgroundColor:"blue"}}>this is bill</Text>
            </View>
        )
    }
}
export default bill;

