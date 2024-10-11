import React, { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import { Link, router } from 'expo-router';
import axios from 'axios';

import { API_URL } from '@env';

//Components
import PrimarySubmitButton from '../components/PrimarySubmitButton';

//Config
import colors from '../config/colors';

const Login = () => {
    console.log(API_URL);
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        if (!form.email || !form.password) {
            setErrorMessage('Email and password are required.');
            return;
        }

        try {
            const response = await fetch(`http://10.0.2.2:4001/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            setErrorMessage('');
            console.log('User object:', response.data.user)
            router.push('checkin/DailyCheckInOne');
        } catch (err) {
            setErrorMessage('Invalid email or password.');
            console.log('Error:', err);
            console.log('Form data being sent:', form);
            console.log('API_URL:', API_URL);


        }
    };

    const handleSignUp = () => {
        return router.push('/login/SignUp');
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.loginContainer}>
                    <View style={styles.header}>
                        <Image source={require('../assets/logo.png')} style={styles.logo} />
                        <Text style={styles.title}>Create Better Patterns For Your Family</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Text>Email:</Text>
                        <TextInput
                            placeholder='jhon@example.com'
                            style={styles.inputControl}
                            value={form.email}
                            onChangeText={email => setForm({ ...form, email })}
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                        />
                        <Text>Password:</Text>
                        <TextInput
                            placeholder='***********'
                            style={styles.inputControl}
                            value={form.password}
                            onChangeText={password => setForm({ ...form, password })}
                            secureTextEntry={true}
                        />
                    </View>

                    {errorMessage ? (
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    ) : null}

                    <View style={styles.buttonContainer}>
                        <View style={styles.loginButton}>
                            <PrimarySubmitButton buttonText='Login' onPress={handleLogin} />
                        </View>
                        <View style={styles.signUpArea}>
                            <Text style={styles.signUpText}>Don't have an account? </Text>
                            <Link href="/login/SignUp" style={styles.signUpButton}>Sign Up</Link>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

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
    errorText: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
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

export default Login;
