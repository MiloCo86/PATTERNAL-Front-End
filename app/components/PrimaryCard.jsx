import * as React from 'react';
import { Avatar, Button, Card, Text} from 'react-native-paper';
import { StyleSheet } from 'react-native';

import colors from '../config/colors'

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const PrimaryCard = ({CardText}) => (
  <Card style={styles.cardContainer}>
   
    <Card.Content>
      <Text variant="bodyMedium" style={styles.mainContent}>{CardText}</Text>
    </Card.Content>

    <Card.Actions style={styles.buttonContainer}>
      <Button
        style={styles.button}
        buttonColor={colors.primary}
        textColor='white'
        >Yes</Button>
      <Button
        style={styles.button}
        buttonColor='#AAAAAA'
        >No</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
    cardContainer: {
        width: 300,
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
        margin: 16,
        borderRadius: 25,
    },
    
    header: {
        color: colors.primary,
    },

    mainContent: {
        fontSize: 16,
        fontWeight: '800',
    },

    buttonContainer: {
        width: '100%',
        padding: 16,
    },

    button: {
        width: 80,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        borderRadius: 12,
    },
});

export default PrimaryCard;