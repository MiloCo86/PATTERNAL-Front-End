import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, Alert} from 'react-native'
// router
import { router, useLocalSearchParams } from 'expo-router'

//backend connection
import { API_URL } from '@env';
import axios from 'axios';


// colors and helper functions
import colors from '../config/colors'

//Components
import NavigationBar from '../layout/NavigationBar';
import EntryCard from '../components/forum/EntryCard'
import AddNewNote from '../components/AddNewNote'


const Forum = () => {
    const { userForumAndTitle } = useLocalSearchParams();
    const userId = userForumAndTitle.split(',')[0];
    const forumId = userForumAndTitle.split(',')[1];
    const title = userForumAndTitle.split(',')[2];

    const [entries, setEntries] = useState([]);

    const [showEntries, setShowEntries] = useState(false);

    const [showAddEntry, setShowAddEntry] = useState(false);


    useEffect(() => {
        const fetchForumData = async () => {
            try {
                const getForumData = await axios.get(`${API_URL}/forums/${forumId}/forum-entry`);
                setEntries(getForumData.data.reverse());
                
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

    const handleNewEntry = (entry) => {
        //fix possible empty lines at the beginning and end of the entry
        entry = entry.trim();
        
        const newEntry = {
            entry: entry,
            user_id: userId
        }

        axios.post(`${API_URL}/forums/${forumId}/forum-entry`, newEntry)
            .then((response) => {
                setEntries([response.data, ...entries]);
                setShowAddEntry(false);
            })
            .catch((error) => {
                console.log('Error posting new entry:', error);
            
            })
    }

    const handleShowAddEntry = () => {
        setShowAddEntry(!showAddEntry);
    }

    const handleDeleteEntry = (entryId) => {
        Alert.alert(
            "Delete Entry",
            "Are you sure you want to delete this entry?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => {
                        axios.delete(`${API_URL}/forums/${forumId}/forum-entry/${entryId}`)
                            .then(() => {
                                setEntries(entries.filter((entry) => entry.id !== entryId));
                            })
                            .catch((error) => {
                                console.log('Error deleting entry:', error);
                            })
                    }
                }
            ]
        );
    }


    
  return (
    
    <View style={styles.container}>
      
      <NavigationBar title={title} onBackPress={handleBackArrow} onAddPress={handleShowAddEntry} />
      

        {showAddEntry && <AddNewNote category="Entry" handleAdd={handleNewEntry} handleClose={handleShowAddEntry} />}
        

        {showEntries ? (
            <FlatList
            style={styles.flatList}
            data={entries}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <EntryCard entryId={item.id} forumId={forumId} userId={userId} deleteEntry={handleDeleteEntry} />
            )}
        /> ): <Text>Loading...</Text>} 
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
    flatList: {
        width: '100%',
        paddingTop: 10,
        marginTop: 2,
    },
})

export default Forum
