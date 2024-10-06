import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../config/colors';
import DailyQuestionOneCard from '../components/DailyQuestionOneCard';

const TestPaper = () => {

    return (
        <SafeAreaView>
            <View>
                <DailyQuestionOneCard Text="Test Question One Content?" />
            </View>
        </SafeAreaView>
    )

}

export default TestPaper;