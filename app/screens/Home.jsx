import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import TipOfTheDay from '../components/TipOfTheDay';
import colors from '../config/colors';
import Menu from '../components/icons/Menu';

import { router } from 'expo-router'

import { Card } from 'react-native-paper';

//Import the recommended content card component
import RecommendedContent from '../components/RecommendedContentCard';

//Import the menu overlay component
import MenuOverlay from '../components/MenuOverlay';

// Import the visual mood trends component
// import MoodTrends from '../components/MoodTrends';


const Home = () => {
  //conditional rendering for the menu overlay
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);

  const toggleMenuOverlay = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // const [moodsArray, setMoodsArray] = React.useState([5, 5, 3, 5, 3, 3, 2]); // sample data for the week's moods

    return (
    <PaperProvider>
      <View style={styles.container}>

        <Image source={require('../assets/logos/Artboard-1.png')} style={styles.logo} />
        
        <View style={styles.menu}>
          <Menu onPress={toggleMenuOverlay} />
          {console.log('Menu Pressed:')}

        </View>

        {isMenuVisible && <MenuOverlay/>}

        <FlatList
            data={[{ key: '1' }]} // Need to pass in a key for the FlatList to work
            renderItem={() => (
              < >
                  <Text style={styles.placeholder}>Welcome, User!</Text>

                  <View style={styles.componentSpacing}>
                    <TipOfTheDay style={styles.tipOfTheDay}/>
                  </View>

                  <View style={styles.componentSpacing} >
                    <RecommendedContent />
                  </View>
                  
                  {/* <View style={styles.componentSpacing}>
                    <MoodTrends moodsArray={moodsArray} moodIntervalText={"Weekly Mood Report"} />
                  </View> */}
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

  componentSpacing: {
    marginBottom: 24, // Add some space between the content cards
  },
});

export default Home;
