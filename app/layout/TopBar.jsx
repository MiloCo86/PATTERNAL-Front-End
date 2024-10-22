import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native';
import { Divider } from 'react-native-paper';

import colors from '../config/colors';

const TopBar = ({title}) => {
    return (
        <View style={styles.topBarContainer}>

            <View style={styles.topbarNavigation}>
                <Image source={require('../assets/back-arrow.png')} style={styles.backArrow} />
                
                <Text style={styles.title}>{title}  </Text>
                
                <Image source={require('../assets/add-circle.png')} style={styles.addButton} />
            </View>

            <View>

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
    backArrow: {
        width: 25,
        height: 25,
    },
    addButton: {
        width: 25,
        height: 25,
    },
    title: {
        fontSize: 20,
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
