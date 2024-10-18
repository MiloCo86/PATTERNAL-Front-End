import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { router } from 'expo-router';

// colors and helper functions
import colors from '../config/colors';

//icon components
import BackArrow from '../components/icons/BackArrow';
import ProfilePic from '../components/icons/ProfilePic';
import Camera from '../components/icons/Camera';

const ProfileHeader = ({userId, saveBtn}) => {

   const handleBackArrow = () => {
        router.push({
            pathname: '/screens/Home',
            params: { userId: userId }
        });
    };

    return (
        <View style={styles.container}>   
            <BackArrow onPress={handleBackArrow} color={colors.secondary} />

            <View style={styles.ProfilePic}>
                <ProfilePic color={"darkgrey"} size={100}/>
                <View style={styles.cameraContainer}>
                    <Camera size={25}/>
                </View>
            </View> 

            <Pressable onPress={saveBtn} >
                <Text style={styles.saveText}>Save</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingTop: 30,
        width: '100%',
        height: 230,
        flexDirection: 'row',
        backgroundColor: colors.primary,
        justifyContent: 'space-between',
    },
    saveText: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
    },
    ProfilePic: {
        marginTop: 15,
    },
    cameraContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
});

export default ProfileHeader;