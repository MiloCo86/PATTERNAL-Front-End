import React from 'react';
import { useState} from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { PieChart } from 'react-native-svg-charts';
import { G, Text as SvgText } from 'react-native-svg';

import colors from '../config/colors';
import { getMoodValueWeekly } from '../config/helperFunctions';



const MoodTrends = ({moodsArray, moodIntervalText}) => {
    const [showLegend, setShowLegend] = useState(false);
    console.log('moodsArray:', moodsArray);

    const handleShowLegend = () => {
        setShowLegend(!showLegend);
    };
    
    const moodCounts = getMoodValueWeekly(moodsArray); // get mood value from helper function
    console.log('moodCounts:', moodCounts);

    const moodData = [
        {
            key: 1,
            value: moodCounts.overwhelmed || 0,
            svg: { fill: colors.mood.one },
            arc: { outerRadius: '75%', innerRadius: 70, cornerRadius: 5 },
            label: 'Overwhelmed',
        },
        {
            key: 2,
            value: moodCounts.stressed || 0,
            svg: { fill: colors.mood.two },
            arc: { outerRadius: '75%', innerRadius: 70, cornerRadius: 5 },
            label: 'Stressed'
        },
        {
            key: 3,
            value: moodCounts.neutral || 0,
            svg: { fill: colors.mood.three },
            arc: { outerRadius: '75%', innerRadius: 70, cornerRadius: 5 },
            label: 'Neutral'
        },
        {
            key: 4,
            value: moodCounts.content || 0,
            svg: { fill: colors.mood.four },
            arc: { outerRadius: '75%', innerRadius: 70, cornerRadius: 5 },
            label: 'Content'
        },
        {
            key: 5,
            value: moodCounts.peaceful || 0,
            svg: { fill: colors.mood.five },
            arc: { outerRadius: '75%', innerRadius: 70, cornerRadius: 5 },
            label: 'Peaceful'
        },
    ];


    // get the highest mood from the moodData array
    const getHighestMood = moodData.reduce((a, b) => (a.value > b.value ? a : b)).label;

    return (
        <Card style={styles.chartContainer}>
            <Text variant="titleMedium" style={styles.header}>{moodIntervalText}</Text>
            <Card.Content>
                <View style={styles.chartLayout}>

                    <PieChart
                        style={styles.pieChart}
                        data={moodData}
                        innerRadius={'55%'}
                        padAngle={0.01}
                        >

                        {/* //G - group elements within the piechart SVG to display the highest mood */}
                        <G>
                            <SvgText
                                x="0"
                                y="0"
                                textAnchor="middle"
                                alignmentBaseline="middle"
                                fontSize={16}
                                fill={colors.primary}
                                fontWeight='700'
                                
                            >
                                {getHighestMood}
                            </SvgText>
                        </G>
                    </PieChart>
                    
                    {showLegend ? (
                        // mapped the moodData array to display the mood label and percentage
                        <View style={styles.legendContainer}>
                            {moodData.map((mood) => (
                                <View key={mood.key} style={styles.moodLengend}>
                                    <View style={[styles.legendColor, { backgroundColor: mood.svg.fill }]} />
                                    <Text style={styles.legendText}>
                                        {mood.label}: {Math.round((mood.value / moodsArray.length) * 100)}%
                                    </Text>
                                </View>
                            ))}
                        </View>
                    
                     ) : (
                        <Pressable onPress={handleShowLegend}>
                            <Text style={styles.showLegend}>Show Legend</Text>
                        </Pressable>
                        )
                    }

                    {showLegend ? (
                        <Pressable onPress={handleShowLegend}>
                            <Text style={styles.hideLegend}>Hide Legend</Text>
                        </Pressable>
                    ) : 
                        null
                    }



                </View>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    chartContainer: {
        width: 325,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 16,
        margin: 16,
        borderRadius: 20,
        fontFamily: 'Roboto',
        backgroundColor: colors.altSecondary,
        // border: '1px solid #000',
    },
    header: {
        color: colors.primary,
        marginTop: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    chartLayout: {
        // flexDirection: 'row',
        alignItems: 'center',
    },
    pieChart: {
        height: 275,
        width: 275,
    },
    showLegend: {
        // position: 'absolute',
        color: colors.primary,
        fontSize: 16,

    },

    hideLegend: {
        color: colors.primary,
        fontSize: 16,
        marginTop: 8,
    },

    legendContainer: {
        alignItems: 'flex-start',
    },
    moodLengend: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
  
    },
    legendColor: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
    legendText: {
        fontSize: 14,
        color: colors.primary,
    },
});

export default MoodTrends;