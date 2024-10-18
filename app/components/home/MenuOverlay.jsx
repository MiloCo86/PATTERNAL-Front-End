import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {router} from 'expo-router';


//colors
import colors from '../../config/colors';

//icons
import FontAwesome from '@expo/vector-icons/FontAwesome';



const MenuOverlay = ({userId}) => {

  console.log('userId in menuOverlay:', userId);

  const handleUserProfile = () => {
    router.push({
      pathname: '/profile/Profile',
      params: {userId: userId}
    });
  }

  const handleLogout = () => {
    router.push({
      pathname: '/login/Login'
    });
  }

  return (
    <View style={styles.container}>
     
      <Pressable  style={styles.menuItemContainer} onPress={handleUserProfile}>
        <FontAwesome name="user-circle" size={28} color={colors.secondary} />
        <Text style={styles.userProfileText}>User Profile</Text>
      </Pressable>

      <View style={styles.menuDivider}/>
    
      <Pressable style={styles.menuItemContainer} onPress={handleLogout}>
        <FontAwesome name="sign-out" size={32} color={colors.secondary} /> 
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
      

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 175,
    height: 120,
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    top: 105,
    left: 170,
    paddingTop: 8,
  },

  userProfileText: {
    color: 'white',
    fontSize: 16,
    margin: 16,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },

  logoutText: {
    color: 'white',
    fontSize: 16,
    margin: 16,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },

  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 16

  },

  menuDivider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.altSecondary,
  }
});

export default MenuOverlay;