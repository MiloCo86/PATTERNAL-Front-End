import React from 'react';
import { useState, useCallback, useRef} from 'react';
import { StyleSheet, View,  Image, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//import colors
import colors from '../../config/colors'


//youtube video player
import YoutubePlayer from "react-native-youtube-iframe";

//icons
import AntDesign from '@expo/vector-icons/AntDesign';



const RecommendedContentCard = ({title,description,label,image,url}) => {

  const [showVideo, setShowVideo] = useState(false);
  const [playing, setPlaying] = useState(true);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(true);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const handlePress = () => {
    if (title === 'Video') {
      setShowVideo(true);
    }
  }

  const handleCloseVideo = () => {
    setShowVideo(false);
  }

    
  return (
    <Pressable onPress={handlePress} style={styles.handleCloseVideo}>

      {showVideo && 
        <View style={styles.youtubeContainer}>
          <Pressable style={styles.closeIcon} onPress={handleCloseVideo}> 
            <AntDesign name="close" size={22} color="black" />
          </Pressable>
          <YoutubePlayer
            height={300}
            play={playing}
            videoId={url}
            onChangeState={onStateChange}
          />
        </View>
      }

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



    </Pressable>
  );
}

const styles = StyleSheet.create({
  // shadowOutline: {
  //   shadowColor: colors.primary,
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.5,
  //   shadowRadius: 3,
  //   elevation: 5,
  // },
  
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

  youtubeContainer: {
    flex: 1,
    backgroundColor: 'white',
    position: 'fixed',
    top: 100,
    left: 0,
    width: '100%',
    height: 190,
    zIndex: 3,
  },

  closeIcon: {
    position: 'absolute',
    top: -18,
    right: -18,
    zIndex: 4,
  },
});

export default RecommendedContentCard;