import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'

import colors from '../../config/colors'


const NewComment = ({handlePost}) => {

    const [comment, setComment] = useState('')
    const [showPostButton, setShowPostButton] = useState(false)

    useEffect(() => {
        if (comment.trim().length > 0) {
            setShowPostButton(true)
        } else {
            setShowPostButton(false)
        }
    },  [comment])

  return (
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={setComment}
            value={comment}
            placeholder="Write a comment"
            multiline={true}
            numberOfLines={4}
        />
        {showPostButton && 
        <Pressable style={styles.button} onPress={()=>handlePost(comment)}>
            <Text style={styles.buttonText}>Post</Text>
        </Pressable>
        }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    minHeight: 50,
    marginLeft: 30,
    borderRadius: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: 'white',
    //shadow
    shadowColor: colors.primary,
    shadowOffset: {
        width: 2,
        height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button: {
    marginRight: 30,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
})

export default NewComment
