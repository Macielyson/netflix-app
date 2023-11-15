import React from "react";
import { Text, ImageBackground, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

const Hero = () => {
    return (
        // ImageBackground tem um papel de uma view tambem colocar imagsns em backgound
        <ImageBackground
            style={styles.hero}
            // imgens externa tem q ter uri
            source={{ uri: 'https://i.imgur.com/EJyDFeY.jpg' }}>
            <Image style={styles.logo} source={{ uri: 'https://i.imgur.com/oDHGhpX.png' }} />
            <View style={styles.containerTop10}>
                <Image style={styles.top10badge} source={require('../../assets/badge-top-10.png')} />
                <Text style={styles.top10Text}> Top 1 de hoje no brasil </Text>
            </View>
            <LinearGradient style={styles.gradient} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
        </ImageBackground>
    );
}

export default Hero;