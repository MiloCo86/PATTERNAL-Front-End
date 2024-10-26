import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



const Paginator = () => {
  return (
    <View style={styles.container}  >
        <Text> Paginator </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Paginator