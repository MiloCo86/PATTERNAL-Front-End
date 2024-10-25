import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { PaperProvider } from 'react-native-paper';

//colors and helper functions
import colors from '../config/colors';

//router
import { router, useLocalSearchParams } from 'expo-router';

//components
import TipOfTheDay from '../components/home/TipOfTheDay';
import RecommendedContentCard from '../components/home/RecommendedContentCard';
import MenuOverlay from '../components/home/MenuOverlay';
import MoodTrends from '../components/home/MoodTrends';

//icon components
import TopBar from '../layout/TopBar';

//import recommended content data
import {RecommendedContentData} from '../assets/recommended_content_data/RecommendedContentData';

const Home = () => {
  const { userId } = useLocalSearchParams();

  return (
  
    <View style={styles.container}>

      <TopBar title="Home" userId={userId} />

      <FlatList
        data={[{ key: '1' }]} // these are nested flatlists - this is the parent flatlist, it has the content for the home screen
        renderItem={() => (
          <>
            <View style={styles.tipOfTheDaySpacing}>
              <TipOfTheDay style={styles.tipOfTheDay} />
            </View>

            <Text variant="bodyMedium" style={styles.recommendedContentHeader}>Recommended Content</Text>

            <FlatList
              data={RecommendedContentData} // Data for the carousel
              horizontal
              renderItem={({item}) => (
                <View style={[styles.carouselSpacing,styles.componentSpacing]}>
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
            />

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
    fontSize: 20,
    color: 'black',
    marginTop: 44, // Add some space between the placeholder and the
    marginBottom: -75, // Add some space between the placeholder and the content card
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  tipOfTheDaySpacing: {
    marginBottom: 32, // Add some space between the content cards
    paddingTop: 15,
  },

  componentSpacing: {
    marginBottom: 24, // Add some space between the content cards
  },

  carouselSpacing: {
    justifyContent  : 'center',
    alignItems: 'space-between',
    paddingHorizontal: 12, // Add some padding to the content card
  },
});

export default Home;
