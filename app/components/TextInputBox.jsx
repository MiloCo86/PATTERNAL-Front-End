import * as React from 'react';
import { TextInput } from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native';

import colors from '../config/colors';

const textInputBox = ({placeholder, text, setText}) => {
  

  return (
    
    <View style={styles.container}>
        
        <Text style={styles.boxLabel}>
            {placeholder}    
        </Text>

        <TextInput
        
            value={text}
            onChangeText={text => setText(text)}
            style={styles.textInput}
            // outlineColor={colors.primary}
            activeOutlineColor={colors.primary}
            mode='outlined'
            multiline={true}
        
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    textInput: {
        width: 260,
        height: 150,
        marginBottom: 48,
    },
    // boxLabel: {
    //     fontSize: 16,
    //     fontWeight: '',
    //     color: colors.primary,
    //     alignSelf: 'flex-start',
    //     marginBottom: 2,
    // }
});
    

export default textInputBox;