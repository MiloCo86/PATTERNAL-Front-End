import React from 'react'
import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native'
import { router } from 'expo-router'

//importing local components
import MainButton from '../components/MainButton'
import PrimarySubmitButton from '../components/PrimarySubmitButton'

//importing colors
import colors from '../config/colors'

const SignUpSecondScreen = () => {

    const [children, setChildren] = useState(0)

    const [errorMessage, setErrorMessage] = useState('')

    const handleChildren = (num) => {
        setErrorMessage('')
        setChildren(num)
    }

    const handleCreateAccount = () => {
        if (children == 0) {
            setErrorMessage('Please select number of children.')
        }else{
            return router.push('/checkin/DailyCheckInOne')
        }
    }
return (
    <SafeAreaView style={styles.mainContainer}>
     
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title} >How Many Children Do You Have?</Text>
            <View style={styles.buttonContainer} >
                    <MainButton buttonText='1 Child' borderColor={children == 1 ? colors.secondary : ''} onPress={() => handleChildren(1)}/>
                    <MainButton buttonText='2 Children' borderColor={children == 2 ? colors.secondary : ''} onPress={() => handleChildren(2)}/>
                    <MainButton buttonText='3 Children' borderColor={children == 3 ? colors.secondary : ''} onPress={() => handleChildren(3)}/>
                    <MainButton buttonText='4 Children' borderColor={children == 4 ? colors.secondary : ''} onPress={() => handleChildren(4)}/>
                    <MainButton buttonText='5+ Children' borderColor={children >= 5 ? colors.secondary : ''} onPress={() => handleChildren(5)}/>
            </View>

            {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
            ) : null}

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
    },
    errorText: {
        color: 'red',
        marginTop: 10
    }   

})

export default SignUpSecondScreen
