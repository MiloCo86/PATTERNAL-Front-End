import * as React from 'react';
import { Avatar, Button, Card, Text} from 'react-native-paper';
import { StyleSheet } from 'react-native';


//colors and helper functions
import colors from '../config/colors'

//components



const PrimaryCard = ({CardText,questionId, questionNum, getResponse}) => {
  const [response, setResponse] = React.useState('')

  const handleYes = () => {
    setResponse('Yes')
    getResponse({'questionNum': questionNum,'questionId': questionId, 'response': 'Yes'})
  }
  const handleNo = () => { 
    setResponse('No')
    getResponse({'questionNum': questionNum,'questionId': questionId, 'response': 'No'})
  }
  
  return (
    <Card style={styles.cardContainer}>
    
      <Card.Content>
        <Text variant="bodyMedium" style={styles.mainContent}>{CardText}</Text>
      </Card.Content>

      <Card.Actions style={styles.buttonContainer}>
        <Button
          onPress={handleYes}
          style={styles.button}
          buttonColor={ response === 'Yes' ? colors.primary : colors.altSecondary}
          textColor='white'
          >Yes</Button>
        <Button
          onPress={handleNo}
          style={styles.button}
          buttonColor={ response === 'No' ? colors.primary : colors.altSecondary}
          >No</Button>
      </Card.Actions>
    </Card>
  )
};

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
        borderRadius: 15,
    },
    
    header: {
        color: colors.primary,
    },

    mainContent: {
        fontSize: 18,
        fontWeight: '700',
        width: 250,
        textAlign: 'space-between',
        paddingTop: 8,
        
    },

    buttonContainer: {
        width: '100%',
        padding: 24,
        position: 'absolute',
        top: 80,
    },

    button: {
        width: 80,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        borderRadius: 12
    },
});

export default PrimaryCard;