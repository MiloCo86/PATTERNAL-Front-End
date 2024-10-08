import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
//React Native Paper
import { List } from 'react-native-paper'
//Config files
import colors from '../config/colors'


const ButtonList = () => {
  return (
    <List.Section  
        style={styles.container} 
        
    >
        <List.Accordion
            title="Sort By"
            left={props => <List.Icon {...props} icon="magnify" />}
            style={styles.listContainer}
            background={colors.primary}
        >
            <List.Item 
                title="Mood" style={styles.listItem}
                left={props => <List.Icon {...props} icon="folder" />} 
            />
            <List.Item title="Date" style={styles.listItem} />
        </List.Accordion>
    </List.Section>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    listContainer: {
        backgroundColor: colors.secondary,
        borderRadius: 10,
        width: 180,
        height: 50
    },
    listItem: {
        backgroundColor: colors.secondary,
        borderRadius: 10,
        width: 180,
        height: 50
    }
})

export default ButtonList
