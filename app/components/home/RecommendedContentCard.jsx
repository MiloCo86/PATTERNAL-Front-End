import React from 'react';
import {useState, useEffect} from 'react';
import { Avatar, Button, Card, Text} from 'react-native-paper';
import { StyleSheet, View,  Image } from 'react-native';

//import colors
import colors from '../../config/colors'

//import recommended content dummy data
import RecommendedContentData from '../../assets/recommended_content_data/RecommendedContentData'



const RecommendedContentCard = (
  {
    title,
    description,
    label, 
    image,
}
) => {
  
  // const [imgURL, setImgURL] = useState(image)
  
  // useEffect(() => {
  //   setImgURL(image)
  // }, [image])
  

  return (
    <View style={styles.cardContainer}>

      
          
          <View style={styles.imageContainer}>
             <Image source={{uri:image}} style={styles.image}/> 
          </View>
          
          <View style={styles.contentDescriptionContainer}> 
            
            <Text variant="bodyMedium" style={styles.contentTitle}>{title} </Text>
            <Text variant="bodyMedium" style={styles.contentDescription}>{description}</Text>

            <View style={styles.labelContainer}>
              <Text variant="bodyMedium" style={styles.labelContent}>{label}</Text>
            </View>


          </View>


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
    marginTop: 85,
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

  image: {
      width: 80,
      height: 120,
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

export default RecommendedContentCard;