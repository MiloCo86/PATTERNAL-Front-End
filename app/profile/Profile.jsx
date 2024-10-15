import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Text, View, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity, Pressable, Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHeader from '../components/ProfileHeader';
import FooterLogo from '../components/FooterLogo';

import colors from '../config/colors';

const Profile = () => {
    const [form, setForm] = useState({
        first_name: 'John',
        last_name: 'Doe',
        email: 'john_doe_uniqu@example.com',
        username: 'johndoe',
        password: '****************',
        verify_password: '****************'
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleSave = () => {
        if (form.password !== form.verify_password) {
            setErrorMessage("Passwords do not match!");
        } else {
            setErrorMessage(''); // Clear any previous error
            console.log('Save button pressed');
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
        router.push('/login/Login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ProfileHeader />
                <ScrollView>
                    <View >
                        <View>
                            <Text style={styles.title}>Edit Profile</Text>
                        </View>
                        <View style={styles.formContainer}>
                            <Text>First Name</Text>
                            <TextInput
                                placeholder='First Name'
                                style={styles.inputControl}
                                value={form.first_name}
                                onChangeText={(first_name) => setForm({ ...form, first_name })}
                                autoCorrect={false}
                                keyboardType='default'
                            />
                            <Text>Last Name</Text>
                            <TextInput
                                placeholder='Last Name'
                                style={styles.inputControl}
                                value={form.last_name}
                                onChangeText={(last_name) => setForm({ ...form, last_name })}
                                autoCorrect={false}
                                keyboardType='default'
                            />
                            <Text>Email</Text>
                            <TextInput
                                placeholder='Email'
                                style={styles.inputControl}
                                value={form.email}
                                onChangeText={(email) => setForm({ ...form, email })}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardAppearance='email-address'
                            />
                            <Text>Username</Text>
                            <TextInput
                                placeholder='Username'
                                style={styles.inputControl}
                                value={form.username}
                                onChangeText={(username) => setForm({ ...form, username })}
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType='default'
                            />
                            <Text>Password</Text>
                            <TextInput
                                placeholder='Password'
                                style={styles.inputControl}
                                value={form.password}
                                onChangeText={(password) => setForm({ ...form, password })}
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
                            {errorMessage ? (
                                <Text style={styles.errorMessage}>{errorMessage}</Text>
                            ) : null}
                        </View>
                    </View>
                </ScrollView>
                <FooterLogo />
            </KeyboardAvoidingView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: colors.primary,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontFamily: 'Roboto',
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '700',
        lineHeight: 48,
        color: 'black',
    },
    inputControl: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 5,
        borderRadius: 5,
        marginBottom: 10,
        color: colors.primary,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        width: '100%',
    },
    formContainer: {
        marginTop: 20
    },
    errorMessage: {
        color: 'colors.tertiary',
        textAlign: 'center',
        marginTop: 10,
    }

});

export default Profile;