import React from 'react'
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';

import colors from '../config/colors';

const TopBar = ({
    title,
    onBackPress, 
    onAddPress
}) => {
    return (
        <View style={styles.topBarContainer}>
            <View style={styles.topbarNavigation}>
                {onBackPress ? (
                    <Pressable //back button
                        onPress={onBackPress}
                        style={({ pressed }) => [
                            styles.buttonContainer,
                            pressed && styles.pressed
                        ]}
                        android_ripple={{ color: colors.altSecondary }}
                    >
                        {({ pressed }) => (
                            <Image 
                                source={require('../assets/back-arrow.png')} 
                                style={[
                                    styles.backArrow,
                                    pressed && styles.pressedImage
                                ]} 
                            />
                        )}
                    </Pressable>
                ) : (
                    <View style={styles.buttonPlaceholder} />
                )}
                
                {/* //title */}
                <Text style={styles.title}>{title}</Text>
                

                {onAddPress ? (
                    <Pressable //add button 
                        onPress={onAddPress}
                        style={({ pressed }) => [
                            styles.buttonContainer,
                            pressed && styles.pressed
                        ]}
                        android_ripple={{ color: colors.altSecondary }}
                    >
                        {({ pressed }) => (
                            <Image 
                                source={require('../assets/add-circle.png')} 
                                style={[
                                    styles.addButton,
                                    pressed && styles.pressedImage
                                ]} 
                            />
                        )}
                    </Pressable>
                ) : (
                    <View style={styles.buttonPlaceholder} />
                )}
            </View>

            <Divider style={styles.divider} />
        </View>
    )
}

const styles = StyleSheet.create({
    topBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 130,
    },
    topbarNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        width: '90%',
    },
    buttonContainer: {
        padding: 8,
        borderRadius: 20,
    },
    pressed: {
        backgroundColor: colors.altSecondary + '20', // Adding 20% opacity
    },
    pressedImage: {
        opacity: 0.7,
    },
    backArrow: {
        width: 25,
        height: 25,
    },
    addButton: {
        width: 25,
        height: 25,
    },
    buttonPlaceholder: {
        width: 41, // 25 + 16 (width + padding)
        height: 41, // 25 + 16 (height + padding)
    },
    title: {
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    divider: {
        width: '90%',
        height: 2,
        backgroundColor: colors.altSecondary,
    }
});

export default TopBar