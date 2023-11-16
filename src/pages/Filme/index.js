import React from "react";
import { Text, ScrollView, ImageBackground, View } from "react-native";
import { Title, Button, Paragraph, Caption } from "react-native-paper"
import ButtonVertical from "../../components/ButtonVertical";
import Secao from "../../components/Secao";
import styles from "./styles";

const Filme = () => {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={{ uri: 'https://i.imgur.com/EJyDFeY.jpg' }} style={styles.hero} />
            <View style={styles.containerPadding}>
                <Title style={styles.textColorWhite}>O diabo de cada dia</Title>
                <Button style={styles.buttonPlay} icon="play" uppercase={false} mode="contained" buttonColor="#ccc">Assistir</Button>
                <Paragraph style={styles.textColorWhite}>
                    Pregadores Profanos. Autoridades Corruptas. Amantes
                    Assassinos. Numa cidade cheia de pecadores, um jovem
                    busca justiça
                </Paragraph>

                <Caption style={styles.captionInfos}>
                    Elenco: {' '}
                    <Caption style={styles.captionWhite}>
                        Macielyson Nascimento, Jucilene paz, Daniel Fernando
                    </Caption>{' '}
                    Gênero:{' '}
                    <Caption style={styles.captionWhite}>
                        Ação. Aventura. Dramático
                    </Caption>{' '}
                    Cenas e momentos:{' '}
                    <Caption style={styles.captionWhite}>
                        Violentos
                    </Caption>{' '}

                </Caption>
                <View style={styles.menu}>
                    <ButtonVertical icon="plus" text="Minha Lista" />
                    <ButtonVertical icon="thumb-up" text="Classifique" />
                    <ButtonVertical icon="send" text="Compartilhe" />
                    <ButtonVertical icon="download" text="Baixar" />
                </View>
            </View>
            <Secao hasTopBorder />
            <Secao />
            <Secao />
        </ScrollView>
    )
}

export default Filme;