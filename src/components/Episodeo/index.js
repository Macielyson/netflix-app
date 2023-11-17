import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Caption, Title } from "react-native-paper";
import styles from "./styles";

const Episodeo = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.capa} source={{ uri: 'https://i.imgur.com/EJyDFeY.jpg' }} resizeMode="contain" />
                <View>
                    <Title style={{ color: '#fff', fontSize: 15 }}>1 Nome do Epsodio </Title>
                    <Caption style={{ color: '#999' }}>5 min </Caption>
                </View>
            </View>
            <Caption style={{ color: '#999' }}>
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown
            </Caption>
        </TouchableOpacity>
    );
};

export default Episodeo;