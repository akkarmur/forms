import {DrawerActions} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  Alert,
  props,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import welcome from './welcome'
export function drawer (props) {
  
    return (
      <View style={{flex:1}}>
        <Text> HII</Text>
        <Drawer.Section style={style.bottomDrawerSection}>
        <DrawerItem
        icon={({color,size})=>(
          <Icon 
          icon="exit-to-app"
          color={color}
          size={size}
          />
        )}
        label="Sign out"
        
          onPress={ ()=> this.props.navigation.navigate('welcome') }
        />
        </Drawer.Section>
      </View>
    );
  
}
export default drawer;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
})
