import React from 'react'
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';

import colors from '../config/colors';

const TopBar = () => {
  return (
    <View style={styles.topBar}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>PATTERNAL</Text>
        <TouchableHighlight onPress={()=> alert('menu icon pressed')} >
            <Image source={require('../assets/menu-icon.png')} style={styles.menuIcon} />
        </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
    topBar: {
        padding: 10,
        paddingBottom: 0,
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primary,
        width: '100%',
        height: '17%'
    },
    title: {
        marginTop: 30,
        fontSize: 35,
        fontWeight: 'bold',
        color: colors.secondary
    },
    logo: {
        width: 100,
        height: 100
    },
    menuIcon: {
        marginTop: -40,
        width: 30,
        height: 30
    }
});

export default TopBar
