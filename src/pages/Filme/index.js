import React, { useState } from "react";
import { Text, ScrollView, ImageBackground, View, TouchableOpacity, FlatList } from "react-native";
import { Title, Button, Paragraph, Caption } from "react-native-paper"
import ButtonVertical from "../../components/ButtonVertical";
import Secao from "../../components/Secao";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import Episodeo from "../../components/Episodeo";
import { SinglePickerMaterialDialog } from "react-native-material-dialog";

const Filme = () => {

    const [tipo] = useState('serie');
    const [visible, setVisible] = useState(false);
    const [temporada, setTemporada] = useState({ value: 1, label: 'Temporada 1' })

    return (
        <>
            <SinglePickerMaterialDialog
                title={'Serie - Temporadas'}
                items={[
                    { value: 1, label: 'Temporada 1' },
                    { value: 2, label: 'Temporada 2' },
                    { value: 3, label: 'Temporada 3' },
                    { value: 4, label: 'Temporada 4' }
                ]}
                visible={visible}
                selectedItem={temporada}
                onOk={(result) => {
                    setVisible(false);
                    setTemporada(result.selectedItem);
                }}
            />

            <ScrollView style={styles.container}>
                {console.log("ERROR AQUI MACIELYSON")}
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
                    {tipo == 'serie' && (
                        <>
                            <TouchableOpacity onPress={() => setVisible(true)} style={styles.buttomTemporada}>
                                <Text style={styles.temporadaName}>{temporada.label}</Text>
                                <Icon name="chevron-down" color="#fff" size={20} />
                            </TouchableOpacity>
                            <FlatList
                                data={[1, 2, 3, 4]}
                                renderItem={(item, index) => (
                                    <Episodeo key={index} />)}
                            />
                        </>
                    )}
                </View>
                {tipo == 'filme' && <Secao hasTopBorder />}
            </ScrollView>
        </>
    );
};

export default Filme;