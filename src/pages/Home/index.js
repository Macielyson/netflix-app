import React from "react";
import { View, Text } from "react-native";
import styles from '../Home/styles';

import Header from "../../components/Header";
import Hero from "../../components/Hero";

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Hero />
        </View>
    );
}

export default Home;