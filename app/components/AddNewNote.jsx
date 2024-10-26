import React from 'react'
import { useState, useEffect} from 'react'
import {SafeAreaView, View, Text, StyleSheet, Pressable, TextInput, Alert} from 'react-native'

// router
import { router } from 'expo-router'

// colors and helper functions
import colors from '../config/colors'

//icons
import AntDesign from '@expo/vector-icons/AntDesign';


const AddNewNote = ({handleClose, category, handleAdd}) => {
    const [note, setNote] = useState('')
    const [showAddBtn, setShowAddBtn] = useState(false)

    useEffect(() => {
        if (note.length > 0) {
            setShowAddBtn(true)
        } else {
            setShowAddBtn(false)
        }
    }, [note])

    const handleCloseIcon = (category) => {
        if (note.length > 0) {
            Alert.alert(
                "Are you sure you want to close?",
                `your ${category} will not be saved`,
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "Close", onPress: handleClose }
                ]
            );
            
        }else {
            handleClose()
        }
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.backgroundOpacity}/>
        <View style={styles.itemsContainer}>
            
            <Text style={styles.title}>Add New {category}</Text>
            <Pressable style={styles.closeButton} onPress={()=>handleCloseIcon(category)}>
                <AntDesign name="close" size={24} color="black" />
            </Pressable>
            
            <TextInput
            style={styles.textBox}
            multiline={true}
            numberOfLines={4}
            onChangeText={setNote}
            value={note}
            />
            
            {showAddBtn ? <Pressable style={styles.button} onPress={()=>handleAdd(note)}>
                    <Text style={styles.buttonText}>Add {category}</Text>
                </Pressable> : <View style={{height:30}}/> 
                
            }   
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
        height: '120%',
        backgroundColor: 'white',
        opacity: 0.4,
    },
    itemsContainer: {
        width: '90%',
        height: 'a',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        borderRadius: 5,
        paddingBottom: 10,
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
        marginBottom: 10,
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
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
})

export default AddNewNote
