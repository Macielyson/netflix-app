import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";

import styles from "./styles";
// view -> como se fosse uma div
// text -> texto


const Login = () => {

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: ''
    });

    return (
        // nao fiz a parte do provider e deu certo
        <View style={styles.BgDark}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <View>
                <TextInput
                    label={'Email ou número de telefone'}
                    mode="flat" // uma propriedade para botoes.
                    style={styles.marginBottom}
                    value={credenciais.email}
                    onChangeText={(text) => setCredenciais({ ...credenciais, email: text })}
                />
                <TextInput
                    label={'Senha'}
                    mode="flat"
                    style={styles.marginBottom}
                    secureTextEntry // para comapos de senha
                    value={credenciais.senha}
                    onChangeText={(text) => setCredenciais({ ...credenciais, senha: text })}
                />

                <Button
                    mode="contained" // modelo do botao
                    style={styles.marginBottom}
                    onPress={() => console.log('Pressed1')}
                >
                    Entrar
                </Button>

                <Button
                    style={styles.marginBottom}
                    onPress={() => console.log('Pressed2')}
                    theme={{ colors: { primary: '#fff' } }} // tema isso aqui é do react-paper
                >
                    Recuperar Senha
                </Button>

                <Text
                    style={styles.textSmall}
                >
                    O acesso esta protegido pelo Google reCAPTCHA para garantir que você não é um robo. Saiba Mais
                </Text>
            </View>
        </View>

    );
};

export default Login;