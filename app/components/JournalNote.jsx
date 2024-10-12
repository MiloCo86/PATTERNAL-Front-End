import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';

import colors from '../config/colors'

const JournalNote = () => {

  return (
    <Card style={styles.noteCardContainer}>
      <Card.Content>
        <Text style={styles.noteDate}>Today's Date</Text>
        <View style={styles.noteCardHeader}>
          <Image source={require('../assets/generic-avatar.png')} style={styles.avatar} />
          <Text style={styles.avatarTitle}>This is the title</Text>
        </View>
        <Text style={styles.noteCardContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum rem fugit facere ipsa quam vel aspernatur quis minima expedita quas, culpa, harum inventore quia delectus eveniet? Rerum, at quis!</Text>
        <Card.Actions style={styles.dailyCheckInStatus}>
          <Image source={require('../assets/journalcheck-incomplete.png')} />
          <Image source={require('../assets/journalcheck-completed.png')} />
          <Image source={require('../assets/journalcheck-completed.png')} />
        </Card.Actions>
      </Card.Content>
    </Card>
  )

}

const styles = StyleSheet.create({

  noteCardContainer: {
    justifyContent: 'space-between',
  },
  noteCardContent: {
    color: colors.primary,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  noteDate: {
    textAlign: 'right',
    fontSize: 20,
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: '700',
    lineHeight: 30,
  },
  noteCardHeader: {
    flexDirection: 'row',
    paddingBottom: 20,
    margin: 10,
    alignItems: 'center',
  },
  avatar: {
    marginRight: 20,
  },
  avatarTitle: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '700',
    lineHeight: 30
  },
  dailyCheckInStatus: {
    alignSelf: 'center',
    paddingBottom: 50,
    paddingTop: 30,
  }

});

export default JournalNote;