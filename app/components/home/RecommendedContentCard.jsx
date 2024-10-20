import React from 'react';
import { Avatar, Button, Card, Text} from 'react-native-paper';
import { StyleSheet } from 'react-native';

import colors from '../../config/colors'

const RecommendedContent = () => {
  return (
    <Card style={styles.cardContainer}>
      <Card.Content>
        <Text variant="bodyMedium" style={styles.contentHeader}>Recommended Content</Text>
        <Text variant="bodyMedium" style={styles.mainContent}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </Text>
      </Card.Content>
      <Card.Actions style={styles.buttonContainer}>
        {/* <Button
          onPress={() => {window.open(contentLink)}}
          style={styles.button}
          buttonColor={colors.secondary}
          textColor={colors.primary}
          >Read More</Button> */}
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 300,
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 16,
        marginTop: 48,
        borderRadius: 20,
        backgroundColor: colors.altSecondary,
    },
    contentHeader: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
    },
    mainContent: {
        color: colors.primary,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        margin: 8,
        borderRadius: 15,
    },
});

export default RecommendedContent;