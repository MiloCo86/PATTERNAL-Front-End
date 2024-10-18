import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native';
import { Divider } from 'react-native-paper';

import colors from '../config/colors';

const TopBar = ({title}) => {
    return (
        <View style={styles.topBarContainer}>
            <View style={styles.logoAndTitle}>
                <Image source={require('../assets/images/logo-blue.png')} style={styles.logo} />
                <Text style={styles.title}>{title}  </Text>
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
    logoAndTitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 35,
        color: colors.primary,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 30,
        textShadowColor: colors.secondary,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    },
    logo: {
        width: 50,
        height: 50,
        alignSelf: 'center',
    },
    divider: {
        width: '90%',
        height: 2,
        backgroundColor: colors.altSecondary,
    }

});

export default TopBar
