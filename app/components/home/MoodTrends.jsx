import React from 'react';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

//import charting library
import { PieChart } from "react-native-gifted-charts";

//import styles - for more modular approach - WE HAVE TO CHANGE THIS IN THE REST OF THE APP
import { styles } from '../../styles/MoodTrends.styles';

//import colors
import colors from '../../config/colors';

//import helper function to calculate mood
import { getMoodValueWeekly } from '../../config/helperFunctions';


// dummy data for testing - need to pull from userId and mood from backend
const dummyMoodsArray = [1,2,4,4,4,3,4]


const MoodTrends = ({moodsArray, moodIntervalText}) => {
    const [showLegend, setShowLegend] = useState(false);
    
    const moodCounts = getMoodValueWeekly(dummyMoodsArray);

    // get the most frequent mood to focus that section in the pie chart
    const focusMostFrequentMood = Math.max(
        moodCounts.overwhelmed || 0,
        moodCounts.stressed || 0,
        moodCounts.neutral || 0,
        moodCounts.content || 0,
        moodCounts.peaceful || 0
    );

    const pieChartData = [
        {
            value: moodCounts.overwhelmed || 0,
            color: colors.mood.one,
            label: 'Overwhelmed',
            focused: moodCounts.overwhelmed === focusMostFrequentMood
        },
        {
            value: moodCounts.stressed || 0,
            color: colors.mood.two,
            label: 'Stressed',
            focused: moodCounts.stressed === focusMostFrequentMood
        },
        {
            value: moodCounts.neutral || 0,
            color: colors.mood.three,

            label: 'Neutral',
            focused: moodCounts.neutral === focusMostFrequentMood
        },
        {
            value: moodCounts.content || 0,
            color: colors.mood.four,
            label: 'Content',
            focused: moodCounts.content === focusMostFrequentMood
        },
        {
            value: moodCounts.peaceful || 0,
            color: colors.mood.five,
            label: 'Peaceful',
            focused: moodCounts.peaceful === focusMostFrequentMood
        }
    ];

    // Get highest mood
    const getHighestMood = pieChartData.reduce((a, b) => (a.value > b.value ? a : b));

    // dot for legend - has inline styling because it's a small component
    const renderDot = color => (
        <View style={[styles.legendDot, { backgroundColor: color }]} />
    );

    const renderLegendComponent = () => {
        if (!showLegend) return null;

        return (
            <>
                {pieChartData.map((item, index) => (
                    <View key={index} style={styles.legendRow}>
                        <View style={styles.legendItem}>
                            {renderDot(item.color)}
                            <Text style={styles.legendText}>
                                {item.label}: {Math.round((item.value / dummyMoodsArray.length) * 100)}%
                            </Text>
                        </View>
                    </View>
                ))}
            </>
        );
    };

    return (
        <View style={styles.chartCard}>
            <Text style={styles.headerText}>{moodIntervalText}</Text>
            
            <View style={styles.chartWrapper}>
                <PieChart
                    data={pieChartData}
                    donut
                    showGradient
                    sectionAutoFocus={true}
                    radius={90}
                    innerRadius={60}
                    innerCircleColor={colors.primary}
                    innerCircleBorderWidth={5}
                    centerLabelComponent={() => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.centerLabel}>
                                {getHighestMood.label}
                            </Text>
                        </View>
                    )}
                />
            </View>

            <Pressable onPress={() => setShowLegend(!showLegend)}>
                <Text style={styles.showLegendText}>
                    {showLegend ? 'Hide Legend' : 'Show Legend'}
                </Text>
            </Pressable>

            {renderLegendComponent()}
        </View>
    );
};

export default MoodTrends;