import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'


import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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
        setIsPlaying(false);
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

        <Text style={styles.insideText}>Set meditation time:</Text>

        <View style={styles.timerControllers}>
            <Pressable onPress={()=> {handleTimeChange('-')}} >
                <MaterialCommunityIcons name="minus-circle-outline" size={40} color={colors.secondary} />
            </Pressable>
            <Text style={styles.currentTime}>{duration}</Text>
            <Pressable onPress={()=> {handleTimeChange('+')}} >
                <MaterialIcons name="add-circle-outline" size={40} color= {colors.secondary} />
            </Pressable>
        </View>     

        <CountdownCircleTimer
            isPlaying = {isPlaying}
            key={key}
            duration={duration}
            colors={[ '#1685DF', '#7EC963', '#57B098' ]}
            colorsTime={[duration, duration / 2, 0]}
            onComplete={() => [true, 1000]}
            size={250}
            strokeWidth={25}
            trailColor={colors.secondary}
        >
            {renderTime}

        </CountdownCircleTimer>

        <View style={styles.controllerContainer}>
            <Pressable onPress={handleStart} >
               {isPlaying ? <MaterialCommunityIcons name="pause-circle-outline" size={70} color={colors.secondary}/> : <MaterialIcons name="play-circle-outline" size={70} color={colors.secondary} />}
            </Pressable>

            <Pressable onPress={handleReset}>
                <MaterialCommunityIcons name="reload" size={70} color={colors.secondary} />
            </Pressable>
        </View>
    
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
        marginTop : -45,
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
