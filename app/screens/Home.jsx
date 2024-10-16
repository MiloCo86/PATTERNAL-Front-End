import { useState,React } from 'react';
import { Text, View, StyleSheet, Image, FlatList, ImageSourcePropType } from 'react-native';
import TipOfTheDay from '../components/TipOfTheDay';
import colors from '../config/colors';

import { router } from 'expo-router'

import { Card } from 'react-native-paper';

//Import the recommended content card component
import RecommendedContent from '../components/RecommendedContentCard';

// Import the visual mood trends component
import MoodTrends from '../components/MoodTrends';


const Home = () => {

    const [moodsArray, setMoodsArray] = useState([5, 5, 3, 5, 3, 3, 2]); // sample data for the week's moods

    return (
      <View style={styles.container}>

        <Image source={require('../assets/logos/Artboard-1.png')} style={styles.logo} />

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
                  
                  <View style={styles.componentSpacing}>
                    <MoodTrends moodsArray={moodsArray} moodIntervalText={"Weekly Mood Report"} />
                  </View>
              </>
            )}
            keyExtractor={(item) => item.key}
            showsVerticalScrollIndicator={false} // Hide the vertical scroll bar
            
            >
        </FlatList>

      </View>
    );
}


const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    marginTop: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16, // Optional: Add some padding to the container

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
