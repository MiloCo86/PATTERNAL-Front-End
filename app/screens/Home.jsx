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
import Menu from '../components/icons/Menu';

//import recommended content data
import {RecommendedContentData} from '../assets/recommended_content_data/RecommendedContentData';

const Home = () => {
  const { userId } = useLocalSearchParams();


  //conditional rendering for the menu overlay
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const toggleMenuOverlay = () => {
    setIsMenuVisible(!isMenuVisible);
  };


    return (
    <PaperProvider >
      <View style={styles.container}>

        <Image source={require('../assets/logos/Artboard-1.png')} style={styles.logo} />
        
        <View style={styles.menu}>
          <Menu onPress={toggleMenuOverlay} />

        </View>

        {isMenuVisible && <MenuOverlay userId={userId}/>}

      <FlatList
          data={[{ key: '1' }]} // these are nested flatlists - this is the parent flatlist, it has the content for the home screen
          renderItem={() => (
            <>
              <View style={styles.tipOfTheDaySpacing}>
                <TipOfTheDay style={styles.tipOfTheDay} />
              </View>

              <Text variant="bodyMedium" style={styles.recommendedContentHeader}>Recommended Content</Text>

              <FlatList
                data={RecommendedContentData} // Example data for the carousel
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
  </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16, // Optional: Add some padding to the container
    
  },

  menu: {
    position: 'absolute',
    top: 48,
    right: 0,
    margin: 16,
  },


  logo: {
    width: 150,
    height: 150,
    marginTop: 16,
  },

  placeholder: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: 8, // Add some space between the placeholder and the content card
    fontWeight: '500',
    alignSelf: 'center',
  },

  recommendedContentHeader: {
    fontSize: 20,
    color: 'black',
    marginTop: 44, // Add some space between the placeholder and the
    marginBottom: -75, // Add some space between the placeholder and the content card
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 0,
    padding: 0,
  },

  tipOfTheDaySpacing: {
    marginBottom: 32, // Add some space between the content cards
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
