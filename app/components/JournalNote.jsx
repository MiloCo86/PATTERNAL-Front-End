import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';

import colors from '../config/colors'

const JournalNote = () => {

  return (
    // <View>
    <Card style={styles.noteCard}>
      <Card.Content>
        <Text style={styles.noteDate}>Today's Date</Text>
        <View style={styles.avatarTitle}>
          <Image source={require('../assets/generic-avatar.png')} />
          <Text>This is the title</Text>
        </View>
        <Text style={styles.noteCardQuestion}>This is why I typed today</Text>
        <Card.Actions>
          <Image source={require('../assets/journalcheck-incomplete.png')} />
          <Image source={require('../assets/journalcheck-incomplete.png')} />
          <Image source={require('../assets/journalcheck-incomplete.png')} />
          <Image source={require('../assets/journalcheck-completed.png')} />
        </Card.Actions>
      </Card.Content>
    </Card>
    // </View>
  )

}

const styles = StyleSheet.create({

  noteCardQuestion: {
    color: colors.primary,
    alignSelf: 'center',
  },
  noteDate: {
    textAlign: 'right',
  },
  noteCard: {
    height: 377,
    width: 294,
    padding: 0,
  },
  avatarTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  }

});

export default JournalNote;