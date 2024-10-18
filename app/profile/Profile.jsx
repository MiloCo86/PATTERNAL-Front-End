import React, { useState } from 'react';
import { router } from 'expo-router';
import { Text, View, StyleSheet, Pressable, Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router'

// colors and helper functions
import colors from '../config/colors';

//components
import UserForm from '../components/forms/UserForm';
import ProfileHeader from '../components/ProfileHeader';
import FooterLogo from '../components/FooterLogo';

const Profile = () => {

    const { userId } = useLocalSearchParams();

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
        return router.push({
            pathname: 'screens/Home',
            params: { userId: userId }
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            
            <ProfileHeader />
            
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Edit Profile</Text>
            </View>

            <UserForm />

            <FooterLogo />
            
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        color: colors.primary,
        width: '100%',
    },
    titleContainer: {
        marginBottom: 20,
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'Roboto',
        textAlign: 'center',
        fontWeight: '700',
        lineHeight: 48,
        color: 'black',
    }
});

export default Profile;