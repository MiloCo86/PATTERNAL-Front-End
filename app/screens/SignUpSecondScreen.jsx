import React from 'react'

import { Text, View, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native'
import { useState } from 'react'

import MainButton from '../components/MainButton'

import colors from '../config/colors'

const SignUpSecondScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container} >
            
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title} >How Many Children Do You Have?</Text>
            <View style={styles.buttonContainer} >
                <MainButton buttonText='1 Child' />
                <MainButton buttonText='2 Children' />
                <MainButton buttonText='3 Children' />
                <MainButton buttonText='4 Children' />
                <MainButton buttonText='5+ Children' />
            </View>

            <TouchableOpacity style={styles.button} >
                <Text style={styles.loginButtonText} >Create Account</Text>
            </TouchableOpacity>


        </View>
               
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    container: {
        flex: 1,
        padding: 20,
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
        width: '100%',
        marginTop: 50,
        alignItems: 'center'
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
    }

})

export default SignUpSecondScreen
