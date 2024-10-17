import React from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { router } from 'expo-router';

//Color
import colors from '../config/colors'
//Components
import TopBar from '../layout/TopBar';
import JournalMiniCard from '../components/JournalMiniCard';
import OwnYourFatherHood from '../components/OwnYourFatherHood';
import TextInputBox from '../components/TextInputBox';



const AddNote = () => {

    const [journalText, setJournalText] = React.useState('');

    const handleSave = () => {
        router.push('/screens/JournalEntry');
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <TopBar />
            <OwnYourFatherHood />
            <ScrollView>
                <JournalMiniCard mood={1} note={'Today was not a good day, financial issues are generating problems with Debi'} onPress={handleSave} />
                <JournalMiniCard mood={3} note={'It was a regular day, I was not able to see my daughter, but I call her in the morning'} />
                <JournalMiniCard mood={5} note={'We had a great time at six flag today!!!'} />
                <JournalMiniCard mood={2} note={'I am feeling a little bit down today, I am not sure why'} />
            </ScrollView>
            <TextInputBox placeholder={"Add Note"} text={journalText} setText={setJournalText} />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        // width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
});

export default AddNote;