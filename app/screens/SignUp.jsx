import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Pressable } from 'react-native';
import colors from '../config/colors';

const SignUp = () => {
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        verify_password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleContinue = () => {
        if (form.password !== form.verify_password) {
            setErrorMessage("Passwords do not match!");
        } else {
            setErrorMessage(''); // Clear any previous error
            router.push('/screens/Home');
        }
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
        router.push('/screens/Login');
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView style={styles.scrollFormContainer} >
                <SafeAreaView>
                    <View style={styles.container}>
                        <View style={styles.backButton}>
                            <Pressable onPress={handleBackArrow}>
                                <Image source={require('../assets/back-arrow.png')} style={styles.backButton} />
                            </Pressable>
                        </View>
                        <View style={styles.header}>
                            <Image source={require('../assets/profile-img.png')} style={styles.profile} />
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
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    scrollFormContainer: {
        padding: 0,
    },
    mainContainer: {
        flex: 1,
    },
    backButton: {
        flex: 1,
        paddingTop: 50,
        justifyContent: 'flex-start',
        height: 30,
        width: 30,
        color: colors.secondary,
    },
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'flex-start',
        color: colors.primary,
    },
    header: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile: {
        width: 120,
        height: 120,
        alignSelf: 'center',
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
        color: colors.primary,
    },
    formContainer: {
        marginTop: 80
    },
    buttonContainer: {
        marginBottom: 80
    },
    continueButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    continueButtonText: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    button: {
        backgroundColor: colors.secondary,
        padding: 10,
        width: 200,
        borderRadius: 10
    },
    errorMessage: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    }
});

export default SignUp;
