import react from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import {Card} from 'react-native-paper';

//import colors
import colors from '../../config/colors';

//array with stock images
import StockImagesArray from '../../assets/stock_images_data/StockImagesArray';

const TipOfTheDay = () => {
    const photoIdx = Math.floor(Math.random() * StockImagesArray.length);
    // console.log('StockImagesArray:', StockImagesArray);

    return (
        <SafeAreaView style={styles.container}>
            {/* // The main visual component of the home screen */}
            <Card style={styles.imageCard}> 
                {/* placeholder images - maybe use stock images API to get images */}
                <Card.Cover source={{uri: StockImagesArray[photoIdx]}}  style={styles.cardCover}/>
                <Card style={styles.tipCard}>
                    <Card.Content>
                        <Text style={styles.tipHeader}>Tip Of The Day</Text>
                        <Text style={styles.tipContent}>Learn to politely decline commitments that interfere with family time.</Text>
                    </Card.Content>
                </Card>
            </Card>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageCard: {
        borderRadius: 30,
        width: 325,
        height: 225,
        justifyContent: 'center',
        backgroundColor: colors.altSecondary,
    },
    cardCover:{
        width: '100%',
        height: '100%',
    },

    tipCard: {
        borderRadius: 10,
        width: 280,
        height: 116,
        flex: 1,
        // justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 175,
        shadowColor: colors.primary,
        shadowOffset: {width: 2, height: 3},
        // opacity: 0.9,

    },

    tipHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.secondary,
    },

    tipContent: {
        fontSize: 14,
        color: 'white',
        marginTop: 12,
        marginLeft: 24,
        alignSelf: 'center',
        fontWeight: '500',
        width: 275,
    },

});

export default TipOfTheDay;