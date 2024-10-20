import React from 'react'
import { useEffect, useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native'

//router
import { router,useLocalSearchParams } from 'expo-router'

//backend connection
import { API_URL } from '@env';
import axios from 'axios';

// colors and helper functions
import colors from '../config/colors'
import { convertDateToMonthDayFormat } from '../config/helperFunctions';

//components
import TopBar from '../layout/TopBar'
import DailyQuestionsJournalCard from '../components/journal/DailyQuestionsJournalCard';

const JournalDailyView = () => {
    const { userAndJournaliD } = useLocalSearchParams();
    const userId = userAndJournaliD.split(',')[0];
    const journalId = userAndJournaliD.split(',')[1];

    const [journal, setJournal] = useState({})
    // {
    //     "id": 12,
    //     "user_id": 8,
    //     "mood": "2",
    //     "created_at": "2024-10-18T16:07:46.453Z"
    // }

    // http://${API_URL}/users/${userID}/journal-entries/${journalId}/notes
    // type: array
    const [notes, setNotes] = useState([])
    // [
    //     {
    //         "id": 8,
    //         "entry_id": 12,
    //         "note": "1112"
    //     }
    // ]

    const [date, setDate] = useState('')

    useEffect(() => {
        const fetchJournalData = async () => {
            try {
                const getJournalData = await axios.get(`${API_URL}/users/${userId}/journal-entries/${journalId}`);
                setJournal(getJournalData.data);
                setDate(convertDateToMonthDayFormat(getJournalData.data.created_at.slice(0, 10)))
            } catch (error) {
                console.log('Error fetching journal data:', error);
            }

            try {
                const getNotesData = await axios.get(`${API_URL}/users/${userId}/journal-entries/${journalId}/notes`);
                setNotes(getNotesData.data);
            } catch (error) {
                console.log('Error fetching notes data:', error);
            }

        };
        
        fetchJournalData();
    }, [journalId]);

    const handleBackArrow = () => {
        //tbd
    }
    const handleAddNote = () => {
        //tbd
    }

  return (
    <SafeAreaView style={styles.container}>
        <TopBar title={'Journal Daily View'} />
        <Text style={styles.dateText}>{date}</Text>
        <DailyQuestionsJournalCard userId={userId} JournalId={journalId} />
        {/* note card component here */}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.altSecondary,
    },
    dateText: {
        fontSize: 30,
        fontFamily: 'HelveticaNeue-Italic',
        fontWeight: 'bold',
    },
})

export default JournalDailyView
