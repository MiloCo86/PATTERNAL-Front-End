import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList, Dimensions} from 'react-native';

//colors and helper functions
import colors from '../config/colors';

//router
import { router, useLocalSearchParams } from 'expo-router';

//components
import TipOfTheDay from '../components/home/TipOfTheDay';
import RecommendedContentCard from '../components/home/RecommendedContentCard';
import MenuOverlay from '../components/home/MenuOverlay';
import MoodTrends from '../components/home/MoodTrends';
import TopBar from '../layout/TopBar';

//icon components
import Menu from '../components/icons/Menu';

//import recommended content data
import {RecommendedContentData} from '../assets/recommended_content_data/RecommendedContentData';

//get screen dimensions for carousel
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.75; 
const SPACING = 24;




const Home = () => {
  const { userId } = useLocalSearchParams();


  //conditional rendering for the menu overlay
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const toggleMenuOverlay = () => {
    setIsMenuVisible(!isMenuVisible);
  };


    return (
   
     <View style={styles.container}>

        {/* <Image source={require('../assets/logos/Artboard-1.png')} style={styles.logo} />
        
        <View style={styles.menu}>
          <Menu onPress={toggleMenuOverlay} />

        </View>

        {isMenuVisible && <MenuOverlay userId={userId}/>} */}

        <TopBar title='Welcome, User' style={styles.topBarSpacing} />

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
                  <View style={[styles.carouselItem,styles.componentSpacing]}>
                    <RecommendedContentCard 
                    title={item.contentTitle}
                    description={item.contentDescription}
                    label={item.contentLabel}
                    image={item.contentImage}/>

                  </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={true} // Hide the horizontal scroll bar
                contentContainerStyle={styles.carouselSpacing}
                snapToInterval={CARD_WIDTH + SPACING} // Snap to card width plus spacing
                snapToAlignment="center"
                decelerationRate="fast"
                pagingEnabled={false}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.altSecondary,
    width: '100%',
    
  },

  // menu: {
  //   position: 'absolute',
  //   top: 48,
  //   right: 0,
  //   margin: 16,
  // },


  logo: {
    width: 150,
    height: 150,
    marginTop: 16,
  },

  // topBarSpacing: {
  //   marginBottom:, // Add some space between the logo and the top bar
  // },
    

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
    marginTop: 30, // Add some space between the top bar and the tip of the day
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

  carouselItem: {
    width: CARD_WIDTH,
    marginHorizontal: SPACING / 2,
  },
});

export default Home;
