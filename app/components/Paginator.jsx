import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

//import colors
import colors from '../config/colors'



const Paginator = ({data, cardIndex}) => {
    
    
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    
    const handlePagination = (index) => {
        setActiveCardIndex(index);
    }

  return (
    <View style={styles.dotsContainer}  >
        {data.map((_, index) => {
            return (
                <View 
                    style={[styles.dot, 
                    {width:10, backgroundColor: index === cardIndex ? colors.primary : colors.altSecondary}
                    ]}
                    key={index}
                />
            )
        })}
    </View>
  )
}

const styles = StyleSheet.create({

dotsContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent:'center', 
    height: 20
},  
  
dot: {
    height: 10,
    backgroundColor: '#595959',
    borderRadius: 5,
    marginHorizontal: 8,
    bottom: 8,
  },
})

export default Paginator