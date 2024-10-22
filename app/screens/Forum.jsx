import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native'
// router
import { router, useLocalSearchParams } from 'expo-router'

// colors and helper functions
import colors from '../config/colors'

//Components
import TopBar from '../layout/TopBar'



const Forum = () => {
    const { userAndTitle } = useLocalSearchParams();
    const userId = userAndTitle.split(',')[0];
    const title = userAndTitle.split(',')[1];

    

  return (
    <SafeAreaView style={styles.container}>
      <TopBar title={title} />

      {/* entry elements here */}
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headersContainer: {
        marginTop: 40,
        marginBottom: 40,
    },
    subHeader: {
        fontSize: 25,
        color: colors.text,
    },
})

export default Forum
