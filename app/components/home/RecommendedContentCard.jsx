import React from 'react';
import { Avatar, Button, Card, Text} from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

//import colors
import colors from '../../config/colors'

const RecommendedContent = () => {
  return (
    <View>
          
      <Text variant="bodyMedium" style={styles.contentHeader}>Recommended Content</Text>

      <Card style={styles.cardContainer}>

        <Card.Content style={styles.cardContent}>
          
          <View style={styles.imageContainer}/>
          
          <View style={styles.contentDescriptionContainer}> 
            
            <Text variant="bodyMedium" style={styles.contentTitle}>Video </Text>
            <Text variant="bodyMedium" style={styles.contentDescription}>Check out this video - rise to the occasion daily.</Text>

            <View style={styles.labelContainer}>
              <Text variant="bodyMedium" style={styles.labelContent}>Youtube Short</Text>
            </View>


          </View>

        </Card.Content>
      </Card>

    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 16,
    marginTop: 24,
    borderRadius: 15,
    backgroundColor: colors.altSecondary,
  },

  gradient: {
  flex: 1,
  padding: 16,
  },

  contentHeader: {
      color: 'black',
      fontWeight: '800',
      alignSelf: 'center',
      fontSize: 20,
      marginTop: 40,
      marginBottom: -8,
  },

  cardContent: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 8,
  },

  imageContainer: {
      width: 80,
      height: 120,
      backgroundColor: colors.secondary,
  },

  contentDescriptionContainer: {
      marginLeft: 16,
      width: 135,
  },

  contentTitle: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 8,
  },

  contentDescription: {
      color: 'black',
      fontSize: 16,
  },

  labelContainer: {
      marginTop: 8,
      width: 100,
  },

  labelContent: {
      backgroundColor: colors.primary,
      alignSelf: 'center',
      color: 'white',
  },
    
});

export default RecommendedContent;