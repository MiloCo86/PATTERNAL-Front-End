import React from 'react'
import { StyleSheet, View, FlatList} from 'react-native'

// router
import { router, useLocalSearchParams } from 'expo-router'

// colors and helper functions
import colors from '../config/colors'


//Components
import NavigationBar from '../layout/NavigationBar'
import MainForumCard from '../components/forum/MainForumCard'

//data
import MainForums from '../assets/forum-data/MainForums'

const AllForums = () => {
  const { userId } = useLocalSearchParams();
  
  return (

    <View style={styles.container}>
    
      <NavigationBar title="Forums" />

      <FlatList
        style={{ width: '100%' }}
        data={MainForums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MainForumCard forumId={item.id} title={item.title} img={item.img} userId={userId} />
        )}
        snapToInterval={200}
        snapToAlignment='center'
        decelerationRate='fast'
        pagingEnabled={false}
        
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.background,
  }
})

export default AllForums
