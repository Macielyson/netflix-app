import React from "react";
import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import styles from './styles';

const Previas = () => {
    return (
        <FlatList
            style={styles.flatlistContainer}
            horizontal
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={({ item, index }) => (
                <TouchableOpacity key={index} style={{ justifyContent: "center", marginLeft: index == 0 ? 20 : 0, marginRight: 10 }}>
                    <View style={styles.oval}>
                        <Image
                            style={styles.capa}
                            source={{ uri: 'https://i.imgur.com/EJyDFeY.jpg' }} />

                        <Image
                            resizeMode="contain"
                            style={styles.logo}
                            source={{ uri: 'https://i.imgur.com/oDHGhpX.png' }} />
                        <LinearGradient
                            style={styles.gradient}
                            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default Previas;
