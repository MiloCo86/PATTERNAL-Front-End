import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native'

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import colors from '../config/colors'


const MeditationTimer = () => {

    const [key, setKey] = useState(0);
    const [duration, setDuration] = useState(60);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleStart = () => {
        setIsPlaying(!isPlaying);
    }

    const handleReset = () => {
        setKey((prevKey) => prevKey + 1);
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    }

    const handleTimeChange = (time) => {
        if (time === '+') {
            setDuration(duration + 15);
        }else if (time === '-') {
            if (duration <= 15) {
                setDuration(15);
            }else{
                setDuration(duration - 15);
            }
        }
    }


    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
          return <Text style={styles.wellDoneText}>Well done!</Text>;
        }
      
        return (
            <View style={styles.insideTextContainer}>
                <Text style={styles.insideText} >Remaining</Text>
                
                <Text style={styles.timeNumber} >{remainingTime}</Text>
                <Text style={styles.insideText}>seconds</Text>
            </View>
    
        );
    };


  return (
    <View style={styles.container}>

        <View style={styles.timerControllers}>
            <Pressable onPress={()=> {handleTimeChange('-')}} >
                <Text style={styles.timeButton}>-</Text>
            </Pressable>
            <Text style={styles.currentTime}>{duration}</Text>
            <Pressable onPress={()=> {handleTimeChange('+')}} >
                <Text style={styles.timeButton}>+</Text>
            </Pressable>
        </View>

        <Pressable onPress={handleStart} >
            <Text style={styles.playingText}>{isPlaying ? 'Pause' : 'Start'}</Text>
        </Pressable>

        <CountdownCircleTimer
            isPlaying = {isPlaying}
            key={key}
            duration={duration}
            colors={[ '#1685DF', '#7EC963', '#57B098' ]}
            colorsTime={[duration, duration / 2, 0]}
            onComplete={() => [true, 1000]}
            size={250}
            strokeWidth={25}
        >
            {renderTime}

        </CountdownCircleTimer>

        <Pressable onPress={handleReset}>
            <Text style={styles.ResetText}>Reset</Text>
        </Pressable>
    
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    insideTextContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    space: {
        width: 10,
    },
    insideText: {
        fontSize: 20,
        color: colors.primary,
    },
    timeNumber: {
        fontSize: 50,
        color: colors.primary,
    },
    playingText: {
        color: colors.primary,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    ResetText: {
        color: colors.primary,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    timerControllers: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    timeButton: {
        fontSize: 30,
        color: colors.primary,
        marginHorizontal: 20,
    },
    currentTime: {
        fontSize: 30,
        color: colors.primary,
    },
    wellDoneText: {
        fontSize: 30,
        color: colors.primary,
        textAlign: 'center',
    }
})

export default MeditationTimer;
