import React from 'react'
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
// statusBar
import { StatusBar } from 'expo-status-bar';

import { LinearGradient } from 'expo-linear-gradient';


// colors and helper functions
import colors from '../config/colors';

//icons
import Ionicons from '@expo/vector-icons/Ionicons';
import { Divider } from 'react-native-paper';

const TopBar = ({title, onBackPress, onAddPress}) => {
    const handleMenuPress = () => {
    }
    return (
        <View style={styles.topBarContainer}>
            <View style={styles.colorTopBarContainer}>
                <StatusBar style="light" />

                <LinearGradient 
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#27187E', '#472BE4']} 
                style={styles.background} 
                />
                <View style={styles.elementContainer}>
                    <Image source={require('../assets/images/logo-full-white.png')} style={styles.logo} />
                    <Pressable onPress={handleMenuPress}>
                        <Ionicons name="menu" size={44} color="white" />
                    </Pressable>
                </View>
            </View>

            <View style={styles.navigationBarContainer}>
                {onBackPress && 
                    <Pressable onPress={onBackPress}>
                        <Ionicons name="chevron-back" size={32} color={colors.primary} />
                    </Pressable>
                }
                <Text style={styles.title}>{title}</Text>
                {onAddPress &&
                    <Pressable onPress={onAddPress}>
                        <Ionicons name="add-circle-outline" size={32} color={colors.primary} />
                    </Pressable>
                }
            </View>

            <Divider style={styles.divider}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    topBarContainer: {
        justifyContent: 'flez-start',
        alignItems: 'center',
        width: '100%',
        height: 150,
    },
    colorTopBarContainer: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    elementContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: '100%',
    },
    logo: {
        width: 200,
        height: 60,
    },

    navigationBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50,
    },

    title: {
        width: '86%',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: "black",
    },
    divider: {
        width: '93%',
        height: 2,
        backgroundColor: colors.primary,
    },
});

export default TopBar