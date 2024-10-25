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
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [currentDate, setCurrentDate] = useState(new Date());

    const [errorMessage, setErrorMessage] = useState('');


    const handleLogin = async () => {
        if (!form.email || !form.password) {
            setErrorMessage('Email and password are required.');
            return; // Ensure the return statement is here
        }

        try {
            // Make a POST request to the API to log in the user
            const response = await axios.post(`${API_URL}/users/login`, form);
            setErrorMessage('');
            console.log('User logged in:', response.data.user.username);

            // Get the user's journal data
            const getJournalData = await axios.get(`${API_URL}/users/${response.data.user.id}/journal-entries/`);
            // Get the latest checkin date
            const latesCheckin = getJournalData.data[getJournalData.data.length - 1].created_at

            console.log('Current Date:', currentDate);
            console.log('Latest Checkin:', latesCheckin);

            if (latesCheckin.slice(0, 10) === currentDate.toISOString().slice(0, 10)) {
                console.log('You have already checked in today');
                // Navigate to the Home screen, passing userId in the params
                router.push({
                    pathname: '/screens/Home',
                    params: { userId: response.data.user.id }
                });
            } else {
                // Navigate to the DailyCheckInOne screen, passing userId in the params
                router.push({
                    pathname: '/checkin/DailyCheckInOne',
                    params: { userId: response.data.user.id }
                });
            }




        } catch (error) {
            setErrorMessage('Invalid email or password.');
            console.log('Error:', error);
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
                        {/* <Text>Email</Text> */}
                        <TextInput
                            placeholder='Email'
                            style={styles.inputControl}
                            value={form.email}
                            onChangeText={email => setForm({ ...form, email })}
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                        />
                        {/* <Text>Password</Text> */}
                        <TextInput
                            placeholder='Password'
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
        flex: 1,
        width: '100%',
        color: colors.background,
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
        borderRadius: 5,
        width: '100%',
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
    },
    formContainer: {
        marginTop: 40,
        justifyContent: 'space-around',
        height: '25%',
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
