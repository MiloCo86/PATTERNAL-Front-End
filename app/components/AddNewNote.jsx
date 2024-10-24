import React from 'react'
import { useState } from 'react'
import {SafeAreaView, View, Text, StyleSheet, Pressable, TextInput } from 'react-native'

// router
import { router } from 'expo-router'

// colors and helper functions
import colors from '../config/colors'

//icons
import AntDesign from '@expo/vector-icons/AntDesign';


const AddNewNote = ({handleClose, category, handleAdd}) => {
    const [note, setNote] = useState('')
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.backgroundOpacity}/>
        <View style={styles.itemsContainer}>
            
            <Text style={styles.title}>Add New {category}</Text>
            <Pressable style={styles.closeButton} onPress={handleClose}>
                <AntDesign name="close" size={24} color="black" />
            </Pressable>
            
            <TextInput
            style={styles.textBox}
            multiline={true}
            numberOfLines={4}
            onChangeText={setNote}
            value={note}
            />
                
            
            <Pressable style={styles.button} onPress={handleAdd}>
                <Text style={styles.buttonText}>Add {category}</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

//container should be flex 1 to take up the whole screen  with opacity 0.8 and position absolute

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    backgroundOpacity: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        opacity: 0.4,
    },
    itemsContainer: {
        width: '90%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        borderRadius: 5,
    },
    title: {
        alignSelf: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    textBox: {
        width: '85%',
        minHeight: 180,
        height: "auto",
        maxHeight: 450,
        backgroundColor: 'white',
        padding: 20,
        textAlignVertical: 'top',
        borderRadius: 5,
        marginBottom: 5,
        borderWidth: 2,
        borderColor: colors.primary,
    },
    button: {
        width: 'auto',
        height: 30,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: colors.primary,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
})

export default AddNewNote
