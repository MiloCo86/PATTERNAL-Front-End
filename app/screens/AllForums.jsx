import React from 'react'
import { StyleSheet, SafeAreaView, FlatList} from 'react-native'

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
  console.log('Received userId in AllForums', userId);
  return (

    <SafeAreaView style={styles.container}>
      <TopBar title="Forum" />

      <FlatList
        style={{ width: '100%' }}
        data={MainForums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MainForumCard title={item.title} img={item.img} userId={userId}/>
        )}
      />
      
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

export default AllForums
