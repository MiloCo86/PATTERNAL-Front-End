import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native'
// router
import { router, useLocalSearchParams } from 'expo-router'

//backend connection
import { API_URL } from '@env';
import axios from 'axios';


// colors and helper functions
import colors from '../config/colors'

//Components
import TopBar from '../layout/TopBar'
import EntryCard from '../components/forum/EntryCard'



const Forum = () => {
    const { userForumAndTitle } = useLocalSearchParams();
    const userId = userForumAndTitle.split(',')[0];
    const forumId = userForumAndTitle.split(',')[1];
    const title = userForumAndTitle.split(',')[2];

    const [entries, setEntries] = useState([]);

    const [showEntries, setShowEntries] = useState(false);

    useEffect(() => {
        const fetchForumData = async () => {
            try {
                const getForumData = await axios.get(`${API_URL}/forums/${forumId}/forum-entry`);
                setEntries(getForumData.data);
                
            } catch (error) {
                console.log('Error fetching forum data:', error);
            } finally {
                setShowEntries(true);
            }
        };

        fetchForumData();
    }, [forumId]);


    const handleBackArrow = () => {
        return router.push({
            pathname: '/screens/AllForums',
            params: { userId: userId }
        })
    }

    
  return (

    
    <SafeAreaView style={styles.container}>
      <TopBar title={title} onBackPress={handleBackArrow}/>

        {showEntries ? (
            <FlatList
            style={{ width: '100%' }}
            data={entries}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <EntryCard entryId={item.id} forumId={forumId} />
            )}
        /> ): <Text>Loading...</Text>} 
    </SafeAreaView>
    
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

export default Forum
