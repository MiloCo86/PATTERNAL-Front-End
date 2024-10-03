import React from 'react'

import { Text, View, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native'
import { useState } from 'react'
import { Link, router } from 'expo-router'

//importing local components
import PrimarySubmitButton from '../components/PrimarySubmitButton'


import colors from '../config/colors'

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleLogin = () => {
        return router.push('/screens/Home') 
    }

    const handleSignUp = () => {
        return router.push('/screens/SignUp') 
    }


  return (
    <SafeAreaView style={styles.mainContainer}>
        <ScrollView >

            <View style={styles.loginContainer} >
                <View style={styles.header}>
                    <Image source={require('../assets/logo.png')} style={styles.logo} />
                    <Text style={styles.title} >Create Better Patterns For Your Family</Text>
                </View>
                
                <View style={styles.formContainer} >
                    <Text>Email:</Text>
                    <TextInput
                        placeholder='jhon@example.com' 
                        style={styles.inputControl}
                        value={form.email}
                        onChange={email => setForm({...form, email})}
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='email-address' 
                    />
                    <Text>Password:</Text>
                    <TextInput 
                        placeholder='***********' 
                        style={styles.inputControl}
                        value={form.password}
                        onChange={password => setForm({...form, password})}
                        secureTextEntry={true}
                        
                    />
                </View>

                <View style={styles.buttonContainer} >
                    <View style={styles.loginButton} >
                        <PrimarySubmitButton buttonText='Login' onPress={handleLogin} />
                    </View>
                    <View style={styles.signUpArea}>
                        <Text style={styles.signUpText}>Don't have an account? </Text>
                        <Link href="/screens/SignUp" style={styles.signUpButton} >Sign Up</Link>  
                    </View>
                </View>
            
            </View>

        </ScrollView>
            
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    loginContainer: {
        flex: 1,
        padding: 25,
        justifyContent: 'flex-start',
    },
    header: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 120,
        height: 120
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        width: 300,
        color: colors.secondary
    },
    inputControl: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 5,
        borderRadius: 5
    },
    formContainer: {
        marginTop: 80
    },
    buttonContainer: {
        marginTop: 80
    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    signUpText: {
        fontSize: 15
    },
    signUpButton: {
        fontSize: 15,
        color: colors.secondary
    }
   
});


export default Login
