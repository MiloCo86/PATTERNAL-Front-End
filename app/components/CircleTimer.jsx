import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
import { CountDownCircleTimer } from 'react-native-countdown-circle-timer';

import colors from '../config/colors';

export default CircleTimer = () => {
    const [isPlaying, setIsPlaying] = React.useState(true)

    return (
        <View style={styles.container}>
            <CountDownCircleTimer
                isPlaying={isPlaying}
                duration={10}
                colors={[colors.primary, colors.secondary, colors.tertiery]}
                colorsTime={[10, 6, 3]}
                onComplete={() => ({ shouldRepeat: true, delay: 2 })}
                updateInterval={1}
            >
                {({ remainingTime, color }) => (
                    <Text style={{ color, fontSize: 40 }}>
                        {remainingTime}
                    </Text>
                )}
            </CountDownCircleTimer>
            <Button title="Toggle Playing" onPress={() => setIsPlaying(prev => !prev)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    }
});