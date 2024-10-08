import React from 'react'
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native'
import { router } from 'expo-router'

//importing local components
import MainButton from '../components/MainButton'
import PrimarySubmitButton from '../components/PrimarySubmitButton'

import colors from '../config/colors'

const SignUpSecondScreen = () => {

    const handleCreateAccount = () => {
        return router.push('/checkin/DailyCheckInOne')
    }
  return (
    <SafeAreaView style={styles.mainContainer}>
     
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title} >How Many Children Do You Have?</Text>
        <View style={styles.buttonContainer} >
            <MainButton buttonText='1 Child' />
            <MainButton buttonText='2 Children' />
            <MainButton buttonText='3 Children' />
            <MainButton buttonText='4 Children' />
            <MainButton buttonText='5+ Children' />
        </View>

        <View style={styles.createAccountContainer}>
            <PrimarySubmitButton buttonText='Create Account' onPress={handleCreateAccount} />
        </View>
           
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    logo: {
        width: 120,
        height: 120,
        marginTop: 50
    },
    title: {
        fontSize: 20,
        marginTop: 30,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexGrow: 1,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    button: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 10,
        width: '100%',
        height: 50,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 50
    },
    loginButtonText: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: 'bold'
    },
    createAccountContainer: {
        marginTop: 50,
        marginBottom: 50
    }   

})

export default SignUpSecondScreen
