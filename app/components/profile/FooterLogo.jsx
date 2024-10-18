import React from 'react';
import { View, StyleSheet, Image } from 'react-native';



const FooterLogo = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/profile/patternal_footer.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default FooterLogo;