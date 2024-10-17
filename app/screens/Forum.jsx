import React from 'react'
import { View, Text, StyleSheet, SafeAreaView} from 'react-native'

// colors and helper functions
import colors from '../config/colors'

//Components
import TopBar from '../layout/TopBar'

const Forum = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar title="Forum" />
      <View style={styles.headersContainer}>
        <Text style={styles.subHeader}>Share your thoughts...</Text>
      </View>
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
