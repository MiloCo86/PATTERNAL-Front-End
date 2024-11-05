import React from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native'

//router
import { router, useLocalSearchParams } from 'expo-router'

//colors and helper functions
import colors from '../config/colors';

// icon libraries
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';



const NavBar = () => {

  const { userId } = useLocalSearchParams();
  console.log('Received userId in navBar', userId);


  const handleIAChat = () => {
    return router.push({
      pathname: '/screens/IAChat',
      params: { userId: userId }
    })
  }
  const handleMeditation = () => {
    return router.push({
      pathname: '/screens/Meditation',
      params: { userId: userId }
    })
  }
  const handleHome = () => {
    return router.push({
      pathname: '/screens/Home',
      params: { userId: userId }
    })
  }
  const handleNotes = () => {
    return router.push({
      pathname: '/screens/AllJournals',
      params: { userId: userId }
    })
  }
  const handleForum = () => {
    return router.push({
      pathname: '/screens/AllForums',
      params: { userId: userId }
    })
  }

  return (
    <View style={styles.navBar}>
     
      <Pressable onPress={handleIAChat} style={styles.iaChatPressable}>
      <Ionicons name="sparkles-sharp" size={27} color={colors.secondary} />
        <Text style={styles.iaChatIconText}>AI</Text>
      </Pressable>

      <Pressable onPress={handleMeditation} style={styles.meditationPressable}>
      <MaterialCommunityIcons name="meditation" size={32} color={colors.secondary} />
        <Text style={styles.meditationIconText}>Breathe</Text>
      </Pressable>

      <Pressable onPress={handleHome} style={styles.homePressable}>
        <MaterialCommunityIcons name="home" size={32} color="white" />
        <Text style={styles.homeIconText}>Home</Text>
      </Pressable>

      <Pressable onPress={handleNotes} style={styles.notesPressable}>
        <MaterialCommunityIcons name="text-box" size={32} color={colors.secondary}  />
        <Text style={styles.notesIconText}>Journal</Text>
      </Pressable >

      <Pressable onPress={handleForum} style={styles.forumPressable}>
        <MaterialIcons name="forum" size={32} color={colors.secondary} />
        <Text style={styles.forumIconText}>Forum</Text> 
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    navBar: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primary,
        width: '100%',
        height: 100,
    },
    

    iaChatIconText: {
      color: colors.secondary,
      fontSize: 12,
      paddingTop: 4,
    },
    meditationIconText: {
      color: colors.secondary,
      fontSize: 12,
    },
    homeIconText: {
      color: colors.secondary,
      fontSize: 12,
    },
    notesIconText: {
      color: colors.secondary,
      fontSize: 12,
    },
    forumIconText: {
      color: colors.secondary,
      fontSize: 12,
    },

    iaChatPressable: {
      alignItems: 'center',
      flexDirection: 'column',
    },
    meditationPressable: {
      alignItems: 'center',
      flexDirection: 'column',
    },
    homePressable: {
    alignItems: 'center',
    flexDirection: 'column',
    },
    notesPressable: {
      alignItems: 'center',
      flexDirection: 'column',
    },
    forumPressable: {
      alignItems: 'center',
      flexDirection: 'column',
    }
});


export default NavBar;
