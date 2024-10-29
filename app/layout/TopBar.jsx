import React from 'react'
import { StyleSheet, View, Image, Pressable } from 'react-native';
// statusBar
import { StatusBar } from 'expo-status-bar';

import { LinearGradient } from 'expo-linear-gradient';

//router
import { useLocalSearchParams } from 'expo-router';

// colors and helper functions
import colors from '../config/colors';

//icons
import Ionicons from '@expo/vector-icons/Ionicons';

//components
import MenuOverlay from '../components/home/MenuOverlay';

const TopBar = () => {

    const { userId } = useLocalSearchParams();
    console.log('Received userId in TopBar', userId);

    const [menuVisible, setMenuVisible] = React.useState(false);
    const handleMenuPress = () => {
        setMenuVisible(!menuVisible);
    }
    return (
        <View style={styles.topBarContainer}>
            {menuVisible && <MenuOverlay userId={userId} onPress={handleMenuPress}/>}
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

            
        </View>
    )
}

const styles = StyleSheet.create({
    topBarContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 100,
        zIndex: 1,
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

    
});

export default TopBar