import react from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import {Card} from 'react-native-paper';

import colors from '../../config/colors';

const TipOfTheDay = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* // The main visual component of the home screen */}
            <Card style={styles.imageCard}> 
                {/* placeholder images - maybe use stock images API to get images */}
                <Card.Cover source={require('../../assets/stock images/pexels-gustavo-fring-4894882.jpg')}  style={styles.cardCover}/>
                <Card style={styles.tipCard}>
                    <Card.Content>
                        <Text style={styles.tipHeader}>Tip Of The Day</Text>
                        <Text style={styles.tipContent}>Remember to stay hydrated and take breaks!</Text>
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
        padding: 16,
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
        width: 275,
        height: 100,
        // justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.altSecondary,
        position: 'absolute',
        top: 175,
        shadowColor: colors.secondary,
        shadowOffset: {width: 3, height: 4},

    },

    tipHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        alignself: 'center',
        color: colors.primary,
    },

    tipContent: {
        fontSize: 14,
        color: colors.primary,
        marginTop: 8,
    },

});

export default TipOfTheDay;