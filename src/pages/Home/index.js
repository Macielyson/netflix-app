import React from "react";
import { View, Text } from "react-native";
import styles from '../Home/styles';

import { Button } from "react-native-paper";

import Header from "../../components/Header";
import Hero from "../../components/Hero";

import ButtonVertical from "../../components/ButtonVertical";

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Hero />
            <View style={styles.menuHeader}>
                <ButtonVertical icon={"play"} text="Minha lista" />
                <Button icon="play" uppercase={false} mode="contained" buttonColor="#ccc">Assistir</Button>
                <ButtonVertical icon={"information-outline"} text={"Saiba Mais"} />
            </View>
        </View>
    );
}

export default Home;