import React, { useState } from 'react';
import { router } from 'expo-router';
import { Text, View, TextInput, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../config/colors';
import axios from 'axios';
import { API_URL } from '@env';

//components
import PrimarySubmitButton from '../components/PrimarySubmitButton';


//header & footer
import ProfileHeader from '../components/profile/ProfileHeader';
import FooterLogo from '../components/profile/FooterLogo';

//import linear gradient for background
import { LinearGradient } from 'expo-linear-gradient';

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

            <LinearGradient
                start={{ x: 1.9, y: 0 }} end={{ x: 1.5, y: 1.5 }}
                colors={[colors.altBackground, colors.primary]} 
                style={styles.backgroundGradient} 
            />
            
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
                            <Text style={styles.labelText}>First Name</Text>
                            <TextInput
                                placeholder='First Name'
                                style={styles.inputControl}
                                value={form.first_name}
                                onChangeText={first_name => setForm({ ...form, first_name })}
                                autoCorrect={false}
                                keyboardType='default'
                                placeholderTextColor={colors.altBackground}
                            />
                            <Text style={styles.labelText}>Last Name</Text>
                            <TextInput
                                placeholder='Last Name'
                                style={styles.inputControl}
                                value={form.last_name}
                                onChangeText={last_name => setForm({ ...form, last_name })}
                                autoCorrect={false}
                                keyboardType='default'
                                placeholderTextColor={colors.altBackground}
                            />
                            <Text style={styles.labelText}>E-mail</Text>
                            <TextInput
                                placeholder='E-mail'
                                style={styles.inputControl}
                                value={form.email}
                                onChangeText={email => setForm({ ...form, email })}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='email-address'
                                placeholderTextColor={colors.altBackground}
                            />
                            <Text style={styles.labelText}>Username</Text>
                            <TextInput
                                placeholder='Username'
                                style={styles.inputControl}
                                value={form.username}
                                onChangeText={username => setForm({ ...form, username })}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='default'
                                placeholderTextColor={colors.altBackground}
                            />
                            <Text style={styles.labelText}>Password</Text>
                            <TextInput
                                placeholder='Password'
                                style={styles.inputControl}
                                value={form.password}
                                onChangeText={password => setForm({ ...form, password })}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='default'
                                secureTextEntry={true}
                                textContentType="none" // Prevents strong password suggestions
                                placeholderTextColor={colors.altBackground}
                            />
                            <Text style={styles.labelText}>Verify Password</Text>
                            <TextInput
                                placeholder='Verify Password'
                                style={styles.inputControl}
                                value={form.verify_password}
                                onChangeText={handleVerifyPasswordChange}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='default'
                                secureTextEntry={true}
                                textContentType="none" // Prevents strong password suggestions
                                placeholderTextColor={colors.altBackground}
                            />

                        </View>

                        {errorMessage ? (
                            <Text style={styles.errorMessage}>{errorMessage}</Text>
                        ) : null}

                        <View style={styles.buttonContainer}>
                           <PrimarySubmitButton buttonText='Continue' onPress={handleContinue} /> 
                        </View>
                        
                        <View style={styles.footerLogo}>
                            <FooterLogo/>
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
        width: '100%',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'flex-start',
    },
    backgroundGradient: {
        position: 'absolute',
        width: '100%',
        height: 900,
    },
    backButton: {
        alignItems: 'flex-start',
        marginTop: -10,
    },
    backButtonImage: {
        height: 30,
        width: 30,
        tintColor: colors.primary,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -8,
        marginBottom: 8,
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        marginTop: 20,
        width: 300,
        color: colors.primary
    },
    inputControl: {
        width: '81%',
        minWidth: '81%',
        height: 40,
        borderWidth: 1,
        borderColor: colors.primary,
        marginBottom: 16,
        color: colors.primary,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        fontWeight: '700',
        fontSize: 16,
        opacity: 0.7,
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    
   
    errorMessage: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
    labelText: {
        color: 'black',
        fontSize: 16,
        alignSelf: 'flex-start',
        marginLeft: 32,
     
    },
    footerLogo: {
        marginTop: 20,
        alignItems: 'center',
        
    },
});

export default SignUp;
