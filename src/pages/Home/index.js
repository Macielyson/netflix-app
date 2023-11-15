import React from "react";
// trabalhar com listas FlatList
import { View, ScrollView ,FlatList, TouchableOpacity, Image } from "react-native";
import styles from '../Home/styles';
import { Button, Title } from "react-native-paper";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import ButtonVertical from "../../components/ButtonVertical";
import LinearGradient from "react-native-linear-gradient";
import Previas from "../../components/Previas";

const Home = () => {
    return (
        // apenas a view ela nao tem o poder de fazer rolagem precisamos de um outro cara que é
        // a scrollview
        <ScrollView style={styles.container}>
            <Header />
            <Hero />
            <View style={styles.menuHeader}>
                <ButtonVertical icon={"plus"} text="Minha lista" />
                <Button icon="play" uppercase={false} mode="contained" buttonColor="#ccc">Assistir</Button>
                <ButtonVertical icon={"information-outline"} text={"Saiba Mais"} />
            </View>
            <View style={styles.previaContainer}>
                <Title style={styles.previaTitle}> Prévias </Title>
                <Previas/>
            </View>

        </ScrollView>
    );
}

export default Home;