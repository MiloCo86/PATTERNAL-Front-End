import * as React from 'react';
import { Card, Text, Image, StyleSheet} from 'react-native-paper';

import colors from '../config/colors'

const Note = ({dailyQuestion}) => {
  
  return (

  <Card>
    <Card.Content>
      <Text styles={styles.noteCardQuestion}>{dailyQuestion}</Text>
      <Card.Actions>
        <Image src={journalCheck? src="assets/journalcheck-completed.png" : src="assets/journalcheck-incomplete"} />
        <Image src={journalCheck? src="assets/journalcheck-completed.png" : src="assets/journalcheck-incomplete"} />
        <Image src={journalCheck? src="assets/journalcheck-completed.png" : src="assets/journalcheck-incomplete"} />
        <Image src={journalCheck? src="assets/journalcheck-completed.png" : src="assets/journalcheck-incomplete"} />
      </Card.Actions>
    </Card.Content>
  </Card>
  
)


}

export default Note;