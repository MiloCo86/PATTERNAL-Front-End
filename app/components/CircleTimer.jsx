import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { CountDownCircleTimer } from 'react-native-countdown-circle-timer';

import colors from '../config/colors';

const CircleTimer = () => {
    return (
        <CountDownCircleTimer
            isPlaying
            duration={10}
            colors={[
                [colors.primary, 0.4],
                [colors.secondary, 0.4],
                [colors.tertiary, 0.2],
            ]}
        >
            {({ remainingTime, animatedColor }) => (
                <Text style={{ color: animatedColor, fontSize: 40 }}>
                    {remainingTime}
                </Text>
            )}
        </CountDownCircleTimer>
    );
}

export default CircleTimer;