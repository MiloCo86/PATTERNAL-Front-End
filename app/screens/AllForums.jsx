import React from 'react'
import { StyleSheet, View, FlatList} from 'react-native'

// router
import { router, useLocalSearchParams } from 'expo-router'

// colors and helper functions
import colors from '../config/colors'


//Components
import TopBar from '../layout/TopBar'
import MainForumCard from '../components/forum/MainForumCard'

//data
import MainForums from '../assets/forum-data/MainForums'

const AllForums = () => {
  const { userId } = useLocalSearchParams();
  
  return (

    <View style={styles.container}>
      <TopBar title="Forum" />

      <FlatList
        style={{ width: '100%' }}
        data={MainForums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MainForumCard forumId={item.id} title={item.title} img={item.img} userId={userId} />
        )}
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

export default AllForums
