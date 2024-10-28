import React from 'react'
import { useState, useEffect} from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

//router
import { router, useLocalSearchParams } from 'expo-router'

//backend connection
import { API_URL } from '@env';
import axios from 'axios';

//colors and helper functions
import colors from '../../config/colors'
import { convertDateToMonthDayFormat } from '../../config/helperFunctions';

//icon components
import Notes from '../../components/icons/Notes'



const JournalMiniCard = ({journalId, userId}) => {

    // http://${API_URL}/users/${userID}/journal-entries/${journalId}
    // type: object
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
    const [textNote, setTextNote] = useState('')
    const [showIcon, setShowIcon] = useState(false)
    const [numNotes, setNumNotes] = useState(0)
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
                setTextNote(getNotesData.data[0].note)
                
                if (getNotesData.data.length > 1) {
                    setShowIcon(true)
                    setNumNotes(getNotesData.data.length)  
                               
                }
            } catch (error) {
                console.log('Error fetching notes data:', error);
            }
        };
        
        fetchJournalData();
    }, [journalId]);

    useEffect(() => {
        if (textNote.length > 50) {
            setTextNote(textNote.slice(0, 50) + '...')
        }
    }, [textNote])



    let moodColor = colors.primary

    switch (journal.mood) {
        case '1':
            moodColor = colors.mood.one
            break
        case '2':
            moodColor = colors.mood.two
            break
        case '3':
            moodColor = colors.mood.three
            break
        case '4':
            moodColor = colors.mood.four
            break
        case '5':
            moodColor = colors.mood.five
            break
    }

    const handleSelectNote = () => {
        console.log('Selected journal:', journalId)
        return router.push({
            pathname: '/screens/JournalDailyView',
            params: { userAndJournaliD: [userId, journalId] }
        })
    }

  return (
    <Pressable onPress={handleSelectNote}>
        <View style={styles.container}>
            <View style={{...styles.moodColor, backgroundColor:moodColor}}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.note}>{textNote}</Text>
                {showIcon && <View style={styles.amountIcon}>
                    <Notes amount={numNotes} size={24} color={colors.primary}/>
                </View>}
            </View>        
        </View>
    </Pressable>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 300,
        height: 80,
        backgroundColor: colors.altBackground,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        //shadow
        shadowColor: colors.primary,
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3.84,

    },
    moodColor: {
        width: '12%',
        height: 80,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    detailsContainer: {
        marginLeft: 15,
        width: '88%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    date: {
        position: 'absolute',
        top: 10,
        right: 20,
        fontSize: 12,
        fontWeight: 'bold',
        color: "black",
        alignSelf: 'flex-end'
    },
    note: {
        marginTop: 10,
        fontSize: 16,
        width: '85%',
        
        color: colors.primary,
    },
    amountIcon: {
        position: 'absolute',
        bottom: 10,
        right: 15
    }
})


export default JournalMiniCard
