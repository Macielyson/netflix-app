import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        color: "#fff",
        backgroundColor: '#000',
        flex: 1
    },
    hero: {
        height: 200,
        width: '100%'
    },
    containerPadding: {
        padding: 20,
    },
    textColorWhite: {
        color: "#fff"
    },
    buttonPlay: {
        marginVertical: 20,
    },
    captionInfos: {
        color: '#999',
        marginTop: 20,
    },
    captionWhite: {
        color: "#fff"
    },
    menu: {
        width: "100%",
        height: 38,
        flexDirection: "row",
        marginVertical: 20,
        justifyContent: "space-between",

    },
    buttomTemporada: {
        width: '100%',
        padding: 10,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.21)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    temporadaName: {
        color: '#fff',
    }
});

export default styles;