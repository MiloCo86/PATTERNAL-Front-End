import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import MainButton from '../components/MainButton';
import PrimarySubmitButton from '../components/PrimarySubmitButton';
import colors from '../config/colors';
import { API_URL } from '@env';

const SignUpSecondScreen = () => {
    const { userId } = useLocalSearchParams(); // Access the userId
    const [childAmount, setChildAmount] = useState(0); // Use childAmount to match backend
    const [errorMessage, setErrorMessage] = useState('');
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch current user data
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${API_URL}/users/${userId}`);
                setUserData(response.data);
            } catch (err) {
                console.error('Error fetching user data:', err);
            }
        };

        fetchUserData();
    }, [userId]);

    const handleChildren = (num) => {
        setErrorMessage('');
        setChildAmount(num); 
    };

    const handleCreateAccount = async () => {
        if (childAmount === 0) {
            setErrorMessage('Please select number of children.');
        } else if (userData) {
            try {
                // Ensure all fields are included in the update
                const updatedUserData = {
                    ...userData,
                    child_amount: childAmount,
                    first_name: userData.first_name, 
                    last_name: userData.last_name,   
                };

                const response = await axios.put(`${API_URL}/users/${userId}`, updatedUserData, {
                    headers: { 'Content-Type': 'application/json' },
                });
                console.log('User updated with children:', response.data);

                // Navigate to the next screen
                router.push({
                    pathname: '/checkin/DailyCheckInOne',
                    params: { userId, childAmount }
                });
            } catch (err) {
                setErrorMessage('Error updating user.');
                if (err.response) {
                    console.error('Server responded with:', err.response.data);
                } else {
                    console.error('Error:', err.message);
                }
            }
        }
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>How Many Children Do You Have?</Text>
            <View style={styles.buttonContainer}>
                <MainButton buttonText='1 Child' borderColor={childAmount === 1 ? colors.secondary : ''} onPress={() => handleChildren(1)} />
                <MainButton buttonText='2 Children' borderColor={childAmount === 2 ? colors.secondary : ''} onPress={() => handleChildren(2)} />
                <MainButton buttonText='3 Children' borderColor={childAmount === 3 ? colors.secondary : ''} onPress={() => handleChildren(3)} />
                <MainButton buttonText='4 Children' borderColor={childAmount === 4 ? colors.secondary : ''} onPress={() => handleChildren(4)} />
                <MainButton buttonText='5+ Children' borderColor={childAmount >= 5 ? colors.secondary : ''} onPress={() => handleChildren(5)} />
            </View>

            {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
            ) : null}

            <View style={styles.createAccountContainer}>
                <PrimarySubmitButton buttonText='Create Account' onPress={handleCreateAccount} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        marginTop: 50,
    },
    title: {
        fontSize: 30, // Consistent font size
        marginTop: 30,
        fontWeight: 'bold',
        color: colors.secondary, // Consistent color
    },
    buttonContainer: {
        flexGrow: 1,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    errorText: {
        color: colors.tertiary, // Consistent color
        marginTop: 10,
    },
    createAccountContainer: {
        marginTop: 50,
        marginBottom: 50,
    },
});

export default SignUpSecondScreen;