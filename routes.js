import React from "react";
import { Text } from "react-native";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Filme from "./src/pages/Filme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// rotas utilizando um lib muito importante que é a react navigattion da uma olhada na documentaçao
// container navigation e criar hooks para usar.
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";// navigate bottom outra lib
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PaginaFake from "./src/pages/PaginaFake";


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// component de navegaçao de baixo
const HomeTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            barStyle={{ backgroundColor: '#141414' }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarLabel: 'Inicio', // esse é que vale o rotulo
                    tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} /> // ele retorna um jsx e o color poderia passar por propriedade
                }}
            />
            <Tab.Screen
                name="Home"
                component={PaginaFake}
                options={{
                    tabBarLabel: 'Buscar', // esse é que vale o rotulo
                    tabBarIcon: ({ color }) => <Icon name="magnify" color={color} size={26} /> // ele retorna um jsx e o color poderia passar por propriedade
                }}
            />
            <Tab.Screen
                name="em-breve"
                component={PaginaFake}
                options={{
                    tabBarLabel: 'Em Breve', // esse é que vale o rotulo
                    tabBarIcon: ({ color }) => <Icon name="play-speed" color={color} size={26} /> // ele retorna um jsx e o color poderia passar por propriedade
                }}
            />
            <Tab.Screen
                name="downloads"
                component={PaginaFake}
                options={{
                    tabBarLabel: 'Downloads', // esse é que vale o rotulo
                    tabBarIcon: ({ color }) => <Icon name="download" color={color} size={26} /> // ele retorna um jsx e o color poderia passar por propriedade
                }}
            />
            <Tab.Screen
                name="mais"
                component={PaginaFake}
                options={{
                    tabBarLabel: 'Mais', // esse é que vale o rotulo
                    tabBarIcon: ({ color }) => <Icon name="menu" color={color} size={26} /> // ele retorna um jsx e o color poderia passar por propriedade
                }}
            />
        </Tab.Navigator>
    );
};


const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    options={{ headerShown: false }} // esconder a barra padrao do android
                    name="Login" // nome
                    component={Login} // componente inicial
                />
                <Stack.Screen
                    options={{ headerShown: false }} // esconder a barra padrao do android
                    name="Home" // nome
                    component={HomeTabs} // componente inicial
                />
                <Stack.Screen
                    options={{ headerShown: false }} // esconder a barra padrao do android
                    name="Filme" // nome
                    component={Filme} // componente inicial
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;