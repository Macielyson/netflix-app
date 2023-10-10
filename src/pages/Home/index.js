import React from "react";
import { View, Text } from "react-native";
import styles from '../Home/styles';
import Header from "../../components/Header";


const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    );
}

export default Home;