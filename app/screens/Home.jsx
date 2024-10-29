import React from 'react';
import {useState,useRef} from 'react';
import { Text, View, StyleSheet, Image, FlatList, Dimensions} from 'react-native';

//colors and helper functions
import colors from '../config/colors';

//router
import { router, useLocalSearchParams } from 'expo-router';

//components
import NavigationBar from '../layout/NavigationBar';
import TipOfTheDay from '../components/home/TipOfTheDay';
import RecommendedContentCard from '../components/home/RecommendedContentCard';
import MoodTrends from '../components/home/MoodTrends';
import Paginator from '../components/Paginator';


//icon components


//import recommended content data
import {RecommendedContentData} from '../assets/recommended_content_data/RecommendedContentData';

//get screen dimensions for carousel
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.8; 
const SPACING = 12;



const Home = () => {
  const { userId } = useLocalSearchParams();

  //pagitator
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems[0] != null) {
      setActiveCardIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;


  return (
  
    <View style={styles.container}>
      <NavigationBar title={`Welcome`}/>

        
      <FlatList
          data={[{ key: '1' }]} // these are nested flatlists - this is the parent flatlist, it has the content for the home screen
          renderItem={() => (
            <>
              <View style={styles.tipOfTheDaySpacing}>
                <TipOfTheDay style={styles.tipOfTheDay} />
              </View>

              <Text style={styles.recommendedContentHeader}>Recommended Content</Text>

              <FlatList
                data={RecommendedContentData} // Data for the carousel
                horizontal
                renderItem={({item}) => (
                  
                  <View style={[styles.carouselItem,styles.componentSpacing]}>
                      <RecommendedContentCard 
                      title={item.contentTitle}
                      description={item.contentDescription}
                      label={item.contentLabel}
                      image={item.contentImage}/>

                  </View>
                  )}

                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false} // Hide the horizontal scroll bar
                contentContainerStyle={styles.carouselSpacing}
                snapToAlignment="center"
                decelerationRate="fast"
                pagingEnabled={true}
                bounces={false}
                viewabilityConfig={viewabilityConfig}
                onViewableItemsChanged={handleViewableItemsChanged}
                ref={flatListRef}

              />

              <Paginator data={RecommendedContentData} cardIndex={activeCardIndex}/>

              <View>
                <MoodTrends moodIntervalText='Weekly Trends' />
              </View>
            </>
          )}
          keyExtractor={(item) => item.key}
          showsVerticalScrollIndicator={false} // Hide the vertical scroll bar

      />
            
    </View>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  
  recommendedContentHeader: {
    fontSize: 22,
    color: 'black',
    marginTop: 44, // Add some space between the placeholder and the
    marginBottom: -80, // Add some space between the placeholder and the content card
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  tipOfTheDaySpacing: {
    marginTop: 8, // Add some space between the top bar and the tip of the day
    marginBottom: 48, // Add some space between the content cards
    paddingTop: 15,
  },

  componentSpacing: {
    marginBottom: 24, // Add some space between the content cards
  },

  carouselSpacing: {
    justifyContent  : 'center',
    alignItems: 'space-between',
    // paddingHorizontal: 14, // Add some padding to the content card
    marginLeft: 6,
  },

  carouselItem: {
    width: CARD_WIDTH,
    marginHorizontal: SPACING,
  },

});

export default Home;
