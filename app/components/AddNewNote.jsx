import React from 'react'
import { useState, useEffect} from 'react'
import {SafeAreaView, View, Text, StyleSheet, Pressable, TextInput, Alert} from 'react-native'


// colors and helper functions
import colors from '../config/colors'

//icons
import AntDesign from '@expo/vector-icons/AntDesign';


const AddNewNote = ({handleClose, category, handleAdd,  }) => {
    const [note, setNote] = useState('')
    const [showAddBtn, setShowAddBtn] = useState(false)

    useEffect(() => {
        if (note.trim().length > 0) {
            setShowAddBtn(true)
        } else {
            setShowAddBtn(false)
        }
    }, [note])

    const handleCloseIcon = (category) => {

        //if note is empty or with enters only, close the modal
        if (note.trim().length === 0) {
            handleClose(category)
        } else {
            Alert.alert(
                "Discard Note",
                "Are you sure you want to discard this note?",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "Discard", onPress: () => handleClose(category) }
                ]
            );
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
            placeholder={`Write your ${category} here`}
            />
            
            {showAddBtn ? <Pressable style={styles.button} onPress={()=>handleAdd(note)}>
                    <Text style={styles.buttonText}>Add {category}</Text>
                </Pressable> : <View style={{height:30}}/> 
                
            }   
        </View>
    </SafeAreaView>
  )
}


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
        height: 900,
        top: 0,
        backgroundColor: 'black',
        opacity: 0.2,
    },
    itemsContainer: {
        width: '85%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.altBackground,
        borderRadius: 5,
        paddingBottom: 10,
        borderRadius: 10,
    },
    title: {
        alignSelf: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 10,
        color: colors.primary,
    },
    closeButton: {
        position: 'absolute',
        top: 8,
        right: 8,
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
