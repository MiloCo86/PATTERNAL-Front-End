import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'


import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import { timeSelector, countDownTimerHeader, countDownTimerDisplay } from '../config/helperFunctions';

import colors from '../config/colors'

let durationArray = [60, 180, 300, 600];
let currIndex = 0;

const MeditationTimer = () => {

    const [key, setKey] = useState(0);
    const [duration, setDuration] = useState(durationArray[currIndex]);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleStart = () => {
        setIsPlaying(!isPlaying);
    }

    const handleReset = () => {
        setKey((prevKey) => prevKey + 1);
        setIsPlaying(false);
    }

    const handleTimeChange = (time) => {

        if (time === '+') {
            currIndex++;
            setDuration(timeSelector(durationArray, currIndex));
        }
        else if (time === '-') {
            currIndex--;
            setDuration(timeSelector(durationArray, currIndex));
        }
    }

    remainingTime = duration;

    const renderTime = ({ remainingTime }) => { // remainingTime
        if (remainingTime === 0) {
            return <Text style={styles.wellDoneText}>Well done!</Text>;
        }

        return (
            <View style={styles.insideTextContainer}>
                <Text style={styles.insideText} >{countDownTimerHeader(remainingTime)}</Text>

                <Text style={styles.timeNumber} >{countDownTimerDisplay(remainingTime)}</Text>
                <Text style={styles.insideText}>Remaining</Text>
            </View>

        );
    };


    return (
        <View style={styles.container}>

            <Text style={styles.insideText}>Set meditation time:</Text>

            {
                currIndex > 0 && currIndex <= 2 ?
                    <View style={styles.timerControllers}>
                        <Pressable onPress={() => { handleTimeChange('-') }} >
                            <MaterialCommunityIcons name="minus-circle-outline" size={40} color="black" />
                        </Pressable>
                        <Text style={styles.currentTime}>{Math.floor(remainingTime / 60)}:{"0" + remainingTime % 60}</Text>
                        <Pressable onPress={() => { handleTimeChange('+') }} >
                            <MaterialIcons name="add-circle-outline" size={40} color="black" />
                        </Pressable>
                    </View>
                    :
                    currIndex > 2 ?
                        <View style={styles.timerControllers}>
                            <Pressable onPress={() => { handleTimeChange('-') }} >
                                <MaterialCommunityIcons name="minus-circle-outline" size={40} color="black" />
                            </Pressable>
                            <Text style={styles.currentTime}>{Math.floor(remainingTime / 60)}:{"0" + remainingTime % 60}</Text>
                            <MaterialIcons name="add-circle-outline" size={40} color="gray" />
                        </View>
                        :
                        <View style={styles.timerControllers}>
                            <MaterialCommunityIcons name="minus-circle-outline" size={40} color="gray" />
                            <Text style={styles.currentTime}>{Math.floor(remainingTime / 60)}:{"0" + remainingTime % 60}</Text>
                            <Pressable onPress={() => { handleTimeChange('+') }} >
                                <MaterialIcons name="add-circle-outline" size={40} color="black" />
                            </Pressable>
                        </View>
            }

            <CountdownCircleTimer
                isPlaying={isPlaying}
                key={key}
                duration={durationArray[Math.abs(currIndex) % 4]}
                colors={[colors.tertiery, colors.primary, colors.primary]}
                colorsTime={[durationArray[Math.abs(currIndex) % 4], durationArray[Math.abs(currIndex) % 6] - 10, 0]}
                onComplete={() => [true, 1000]}
                size={250}
                strokeWidth={25}
                trailColor={colors.secondary}
            >
                {renderTime}

            </CountdownCircleTimer>

            <View style={styles.controllerContainer}>
                <Pressable onPress={handleStart} >
                    {isPlaying ? <MaterialCommunityIcons name="pause-circle-outline" size={44} color="black" /> : <MaterialIcons name="play-circle-outline" size={44} color="black" />}
                </Pressable>

                <Pressable onPress={handleReset}>
                    <MaterialCommunityIcons name="reload" size={44} color="black" />
                </Pressable>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    insideTextContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    insideText: {
        fontSize: 20,
        color: colors.primary,
    },
    timeNumber: {
        fontSize: 50,
        color: colors.primary,
    },
    timerControllers: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    currentTime: {
        fontSize: 40,
        marginLeft: 5,
        marginRight: 5,
        color: colors.primary,
    },
    wellDoneText: {
        fontSize: 30,
        color: colors.primary,
        textAlign: 'center',
    },
    controllerContainer: {
        marginTop: -45,
        paddingLeft: 45,
        paddingRight: 45,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        borderBottomWidth: 1,
        borderBottomColor: colors.altSecondary,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
})

export default MeditationTimer;
