import React, { Component } from 'react';

import { Alert, Text, Button, TextInput, View,ImageBackground, StyleSheet, props,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import register from './register';
import home from './home';
// import screen from './screen'

const Stack = createStackNavigator();
export default class login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin= async()=> {
    const { username, password } = this.state;
    fetch('http://10.0.3.2:3000/signin', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({
        
        email: this.state.username,
        
        password: this.state.password,
      }),
    })
      .then((req) => req.json())
      .then(data => {
        console.log(data);
        if(data.meta.status==0){
          Alert.alert("user not exist")
        }
        else{
          this.props.navigation.navigate('home')

        }
      });
      
    }

  render() {
    return (
       <View
      
       style={styles.container}>
        <Image source={require('../images/pp.jpg')} 
        style={{ width: 100, height:100,justifyContent:"center",alignContent:"center", marginBottom:20}}/>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          color="#005c8c"
          onPress={this.onLogin.bind(this)}
        />
        {/* <Text style={{color:"blue" }} 
              onPress={this.props.navigation.navigate('register')}>
              New Here ? Register
            </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    textDecorationColor:'pink',
    paddingBottom:10,
    
  },
  input: {
    color:'#000000',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth:1,
    borderColor: 'black',
    backgroundColor:'#fafafa',
    marginBottom: 10,
    textDecorationColor:'pink',
    

  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
});