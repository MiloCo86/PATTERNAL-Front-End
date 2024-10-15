import React, { useState } from 'react';
import { router } from 'expo-router';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../config/colors';
import axios from 'axios';
import { API_URL } from '@env';

const SignUp = () => {
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        verify_password: '',
        child_amount: 0 // Default value
    });

    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        // Password must be at least 8 characters, contain at least one letter, one number, and one special character
        const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(password);
    };

    const handleContinue = async () => {
        const trimmedForm = {
            first_name: form.first_name.trim(),
            last_name: form.last_name.trim(),
            email: form.email.trim(),
            username: form.username.trim(),
            password: form.password.trim(),
            verify_password: form.verify_password.trim(),
            child_amount: form.child_amount
        };

        if (!validateEmail(trimmedForm.email)) {
            setErrorMessage("Invalid email format!");
            return;
        }

        if (!validatePassword(trimmedForm.password)) {
            setErrorMessage("Password must be at least 8 characters long, contain at least one letter, one number, and one special character!");
            return;
        }

        if (trimmedForm.password !== trimmedForm.verify_password) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post(`${API_URL}/users`, trimmedForm, {
                headers: { 'Content-Type': 'application/json' },
            });
            const userId = response.data.id; // Extract the user ID
            console.log('User ID:', userId); // Debugging line
            console.log(response.data)
            if (userId) {
                router.push({
                    pathname: '/login/SignUpTwo',
                    params: { userId } // Pass the userId to SignUpTwo
                });
            } else {
                console.error('User ID is undefined');
            }
        } catch (err) {
            setErrorMessage('Error creating user.');
            console.error('Error:', err.response ? err.response.data : err.message);
        }
        setErrorMessage(''); // Clear any previous error
    };

    const handleVerifyPasswordChange = (verify_password) => {
        setForm({ ...form, verify_password });

        // Update error message while typing
        if (verify_password !== form.password) {
            setErrorMessage("Passwords do not match!");
        } else {
            setErrorMessage(''); // Clear error if they match
        }
    };

    const handleBackArrow = () => {
        router.push('/login/Login');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.container}>
                        <View style={styles.backButton}>
                            <Pressable onPress={handleBackArrow}>
                                <Image source={require('../assets/back-arrow.png')} style={styles.backButtonImage} />
                            </Pressable>
                        </View>
                        <View style={styles.header}>
                            <Text style={styles.title}>User Details</Text>
                        </View>
                        <View style={styles.formContainer}>
                            <Text>First Name</Text>
                            <TextInput
                                placeholder='First Name'
                                style={styles.inputControl}
                                value={form.first_name}
                                onChangeText={first_name => setForm({ ...form, first_name })}
                                autoCorrect={false}
                                keyboardType='default'
                            />
                            <Text>Last Name</Text>
                            <TextInput
                                placeholder='Last Name'
                                style={styles.inputControl}
                                value={form.last_name}
                                onChangeText={last_name => setForm({ ...form, last_name })}
                                autoCorrect={false}
                                keyboardType='default'
                            />
                            <Text>E-mail</Text>
                            <TextInput
                                placeholder='E-mail'
                                style={styles.inputControl}
                                value={form.email}
                                onChangeText={email => setForm({ ...form, email })}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='email-address'
                            />
                            <Text>Username</Text>
                            <TextInput
                                placeholder='Username'
                                style={styles.inputControl}
                                value={form.username}
                                onChangeText={username => setForm({ ...form, username })}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='default'
                            />
                            <Text>Password</Text>
                            <TextInput
                                placeholder='Password'
                                style={styles.inputControl}
                                value={form.password}
                                onChangeText={password => setForm({ ...form, password })}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='default'
                                secureTextEntry={true}
                            />
                            <Text>Verify Password</Text>
                            <TextInput
                                placeholder='Verify Password'
                                style={styles.inputControl}
                                value={form.verify_password}
                                onChangeText={handleVerifyPasswordChange}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='default'
                                secureTextEntry={true}
                            />
                        </View>

                        {errorMessage ? (
                            <Text style={styles.errorMessage}>{errorMessage}</Text>
                        ) : null}

                        <View style={styles.buttonContainer}>
                            <View style={styles.continueButton}>
                                <TouchableOpacity style={styles.button} onPress={handleContinue}>
                                    <Text style={styles.continueButtonText}>Continue</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollContainer: {
        flexGrow: 1, 
        justifyContent: 'center',  
    },
    backButton: {
        paddingTop: 50,
        alignItems: 'flex-start',
    },
    backButtonImage: {
        height: 30,
        width: 30,
        tintColor: colors.secondary,
    },
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
    },
    header: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
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
        marginBottom: 10,  
        color: colors.primary,
    },
    formContainer: {
        marginTop: 20 
    },
    buttonContainer: {
        marginBottom: 80
    },
    continueButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    continueButtonText: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    button: {
        backgroundColor: colors.secondary,
        padding: 10,
        width: 200,
        borderRadius: 10
    },
    errorMessage: {
        color: colors.tertiary,
        textAlign: 'center',
        marginTop: 10,
    }
});

export default SignUp;
