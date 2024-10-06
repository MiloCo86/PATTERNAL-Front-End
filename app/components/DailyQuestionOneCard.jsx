import React from 'react'

import {
    StyleSheet,
    Pressable,
    View,
    Platform
} from 'react-native';

import {
    PaperProvider,
    Card,
    RadioButton,
    Text
} from 'react-native-paper';

import colors from '../config/colors';

const DailyQuestionOneCard = ({ questionOneText }) => {
    const [checked, setChecked] = React.useState('first');
    return (
        <PaperProvider>
            <View>
            <Card>
                <Card.Title title="Question 1">
                    <Card.Content>
                        <Text>{questionOneText}</Text>
                        <View>
                            <RadioButton
                                value='first'
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                            <RadioButton
                                value='second'
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                            />
                        </View>
                    </Card.Content>
                </Card.Title>
            </Card>
            </View>
        </PaperProvider>

    )
}


export default DailyQuestionOneCard; 