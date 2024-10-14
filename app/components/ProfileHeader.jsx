import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

import colors from '../config/colors';

const ProfileHeader = () => {

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
        <View style={styles.container}>
            <View style={styles.navigation}>
                <Pressable onPress={handleBackArrow}>
                    <Image source={require('../assets/profile/profile-arrow_back.png')} />
                </Pressable>
                <Pressable onPress={handleSave}>
                    <Text style={styles.headerText}>Save</Text>
                </Pressable>
            </View>
            <View>
                <Image source={require('../assets/profile-img.png')} style={styles.profile} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '30%',
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignItems: 'center',
    },
    headerText: {
        color: colors.secondary,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: '20',
        fontWeight: '700',
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});

export default ProfileHeader;