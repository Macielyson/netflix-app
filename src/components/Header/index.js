import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

// TouchableOpacity -> para botoes com opacidade
const Header = () => {
    return (
        // LinearGradient como se fosse uma view convencional. colors inicio e fim do gradiente
        <LinearGradient style={styles.header} colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}>
            <View style={styles.headerSafeAreaView}>
                <Image source={require('../../assets/logo-compact.png')} />
                <TouchableOpacity>
                    <Text style={styles.textWhite}>Séries</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textWhite}>Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textWhite}>Minha lista</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

export default Header;