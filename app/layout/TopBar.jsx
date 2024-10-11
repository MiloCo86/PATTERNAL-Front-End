import React from 'react'
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';

import colors from '../config/colors';

const TopBar = () => {
    return (
        <SafeAreaView style={styles.topBarContainer}>
            <View style={styles.logo}>
                <Image source={require('../assets/logos/Artboard-20-copy-16.png')} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    topBar: {
        paddingTop: 60,
        flexDirection: 'row',
        width: '90%',
        height: '17%'
    },
    logo: {
        alignSelf: 'center',
    },

});

export default TopBar
