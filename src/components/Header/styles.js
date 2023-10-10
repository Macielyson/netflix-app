import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textWhite: {
        color: '#fff'
    },
    header: {
        position: 'absolute',
        top: 0,
        zIndex: 999,
    },
    headerSafeAreaView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#f90", // tirar depois esse back groud
        width: "100%",
        height: 70,
        alignItems: "center",

    }

});

export default styles;