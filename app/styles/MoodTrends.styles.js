// MoodTrends.styles.js
import { StyleSheet } from 'react-native';
import colors from '../config/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    chartCard: {
        margin: 20,
        padding: 16,
        borderRadius: 15,
        backgroundColor: colors.primary,
        width: 300,
        alignSelf: 'center'
    },

    headerText: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    legendRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        color: colors.altSecondary,
    },

    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 130,
        marginRight: 20,
    },

    legendDot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginRight: 10,
    },

    legendText: {
        color: 'white',
        fontSize: 14,
    },

    showLegendText: {
        color: colors.secondary,
        fontSize: 14,
        alignSelf: 'center',
        marginBottom: 16
    },

    chartWrapper: {
        padding: 20,
        alignItems: 'center'
    },

    centerLabel: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    }
});