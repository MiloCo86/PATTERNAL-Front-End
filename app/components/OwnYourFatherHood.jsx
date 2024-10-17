import React from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

//Config files
import colors from '../config/colors'

const OwnYourFatherHood = () => {

    return (

        <View>
            <Text style={styles.ownYourFatherHoodTopText}>Own Your </Text>
            <Text style={styles.ownYourFatherHoodBottomText}>Fatherhood</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    ownYourFatherHoodTopText: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
        lineHeight: 32,
    },
    ownYourFatherHoodBottomText: {
        color: colors.primary,
        fontSize: 32,
        fontWeight: '800',
        textAlign: 'center',
        lineHeight: 32,
    },
});

export default OwnYourFatherHood;