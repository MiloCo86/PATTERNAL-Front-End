import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { PaperProvider } from 'react-native-paper';

//colors and helper functions
import colors from '../config/colors';

//router
import { router, useLocalSearchParams } from 'expo-router';

//components
import TipOfTheDay from '../components/home/TipOfTheDay';
import RecommendedContent from '../components/home/RecommendedContentCard';
import MenuOverlay from '../components/home/MenuOverlay';
import MoodTrends from '../components/home/MoodTrends';

//icon components
import Menu from '../components/icons/Menu';


const Home = () => {
  const { userId } = useLocalSearchParams();


  //conditional rendering for the menu overlay
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const toggleMenuOverlay = () => {
    setIsMenuVisible(!isMenuVisible);
  };


    return (
    <PaperProvider>
      <View style={styles.container}>

        <Image source={require('../assets/logos/Artboard-1.png')} style={styles.logo} />
        
        <View style={styles.menu}>
          <Menu onPress={toggleMenuOverlay} />

        </View>

        {isMenuVisible && <MenuOverlay userId={userId}/>}

        <FlatList
            data={[{ key: '1' }]} // Need to pass in a key for the FlatList to work
            renderItem={() => (
              < >
                  {/* <Text style={styles.placeholder}>Welcome, User!</Text> */}

                  <View style={styles.tipOfTheDaySpacing}>
                    <TipOfTheDay style={styles.tipOfTheDay}/>
                  </View>

                  <View style={styles.componentSpacing} >
                    <RecommendedContent />
                  </View>

                  <View>
                    <MoodTrends moodIntervalText='Weekly Trends' />
                  </View>
                  
              </>
            )}
            keyExtractor={(item) => item.key}
            showsVerticalScrollIndicator={false} // Hide the vertical scroll bar
            
            >
        </FlatList>

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

  flatlist: {
    margin: 0,
    padding: 0,
  },

  tipOfTheDaySpacing: {
    marginBottom: 32, // Add some space between the content cards
  },

  componentSpacing: {
    marginBottom: 24, // Add some space between the content cards
  },
});

export default Home;
