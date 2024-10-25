import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {router} from 'expo-router';


//colors
import colors from '../../config/colors';

//icons
import FontAwesome from '@expo/vector-icons/FontAwesome';



const MenuOverlay = ({userId, onPress}) => {

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
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.backgroundColor} />

      <View style={styles.menuCard}>
     
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

    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: 1000,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  backgroundColor: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    opacity: 0.2,
    position: 'absolute',
  },
  menuCard: {
    zIndex: 2,
    width: 175,
    height: 120,
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    top: 105,
    left: 170,
    paddingTop: 8,
  },

  userProfileText: {
    color: 'black',
    fontSize: 16,
    margin: 16,
    fontFamily: 'Roboto',
  },

  logoutText: {
    color: 'black',
    fontSize: 16,
    margin: 16,
    fontFamily: 'Roboto',
   
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