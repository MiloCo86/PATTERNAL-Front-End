import React from 'react';
import { StyleSheet, View,  Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//import colors
import colors from '../../config/colors'

//import recommended content dummy data
import RecommendedContentData from '../../assets/recommended_content_data/RecommendedContentData'
import { shadow } from 'react-native-paper';



const RecommendedContentCard = ({title,description,label,image,}) => {
  
  return (
    <View style={styles.shadowOutline}>

      <LinearGradient
        colors={['#F7F7F7', '#C0E8F9']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.cardContainer}
      >
        <View style={styles.imageContainer}>
          <Image source={{uri:image}} style={styles.image}/>
        </View>
        
        <View style={styles.contentDescriptionContainer}>
            
          <Text style={styles.contentTitle}>{title}</Text>
          <Text style={styles.contentDescription}>{description}</Text>

          <View style={styles.labelContainer}>
            <Text style={styles.labelContent}>{label}</Text>
          </View>

        </View>

      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  shadowOutline: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  
  cardContainer: {
    width: '95%',
    height: 180,
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align to start of the container
    alignItems: 'center',
    padding: 16,
    marginTop: 90,
    borderRadius: 10,

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
    width: 100,
    height: 100,
    backgroundColor: colors.secondary,
    margin: 8,
    overflow: 'hidden',
    },

    image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Contain the image inside the imageContainer
  },

  contentDescriptionContainer: {
    marginLeft: 16,
    width: 135,
  },

  contentTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  contentDescription: {
    color: 'black',
    fontSize: 16,
  },

  labelContainer: {
    marginTop: 8,
    width: 120,
  },

  labelContent: {
    backgroundColor: colors.altSecondary,
    alignSelf: 'flex-start',
    color: colors.primary,
  },
});

export default RecommendedContentCard;