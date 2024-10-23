import React from 'react'
import { View, Text, StyleSheet, Image, Pressable} from 'react-native'

// router
import { router } from 'expo-router'


// colors and helper functions
import colors from '../../config/colors'

const handlePress = (userId,forumId,title) => {
    return router.push({
        pathname: '/screens/Forum',
        params: { userForumAndTitle: [userId,forumId,title] }
    })
}


const MainForumCard = ({title,img, userId,forumId }) => {
  return (
    <Pressable onPress={()=> handlePress(userId,forumId,title)}>
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.photoContainer} >
                <Image style={styles.photo} source={{uri: img}} />
            </View>
        </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 220,
        paddingRight: 30,
    },
    title: {
        fontSize: 25,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: 'semibold',
    },
    photoContainer: {
        width: '90%',
        height: 150,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    },
    photo: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
})

export default MainForumCard
