import React, {Component} from 'react';
import {
  Alert,
  Button,
  TextInput,
  View,
  ImageBackground,
  Text,
  StyleSheet,
  props,
  Image
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import login from './login';

class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // invalid_name: '',
      name: '',
      email: '',
      mobile_no: '',
      password: '',
    };
  }
  // check_name(e) {
  //   let rjx = /^[a-zA-Z]+$/;

  //   if (!rjx.test(e)) {
  //     this.setState({name: 'invalid'});
  //   } else {
  //     this.setState({name: ''});
  //   }
  // }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
  submit = () => {
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.password === '' ||
      this.state.mobile_no === ''
    ) {
      Alert.alert('Enter details to signup!');
    } else {
      fetch('http://10.0.3.2:3000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          mo_no: this.state.mobile_no,
          password: this.state.password,
        }),
      })
        .then((req) => req.json())
        .then((data) => {
          console.log(data);
          Alert.alert('goto login');
          this.props.navigation.navigate('Login')
        });
    }
  };

  render() {
    return (
     <View
      style={styles.container}>
        <Image source={require('../images/pp.jpg')} 
                style={{ width: 100, height:100,justifyContent:"center",alignContent:"center", paddingBottom:10, marginBottom:25}}/>
        <TextInput
          value={this.state.name}
          onChangeText={(val) => this.updateInputVal(val, 'name')}
          placeholder="name"
          style={styles.input}
        />
        {/* <Text>{this.state.name} </Text> */}

        <TextInput
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
          placeholder="email id"
          style={styles.input}
        />

        <TextInput 
          value={this.state.mobile_no}
          onChangeText={(val) => this.updateInputVal(val, 'mobile_no')}
          keyboardType={'numeric'}
          placeholder="mobile_no"
          style={styles.input}
        />

        <TextInput
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          placeholder="Create Password"
          autoCapitalize="none"
          style={styles.input}
        />

        <Button
          onPress={() => {
            this.submit();
          }}
          title="Submit"
          color="#005c8c"
        />
        <Text
          style={{color: 'blue'}}
          onPress={() => this.props.navigation.navigate('Login')}>
          you have account ? login
        </Text>

        {/* <StatusBar style="auto" /> */}
      </View>
    );
  }
}
export default register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
});
