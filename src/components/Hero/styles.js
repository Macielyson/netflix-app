import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    hero: {
        height: 400,
        width: '100%'
    },
    logo: {
        marginTop: 200,
        alignSelf: 'center',
        width: 300,
        height: 150,
        position: "absolute",
        zIndex: 10,
        // backgroundColor: '#Fdd'
    },
    containerTop10: {
        position: "absolute",
        zIndex: 10,
        bottom: 20,
        flexDirection: "row",
        justifyContent: "center",
        width: '100%',
        alignItems: 'center'

    },
    top10badge: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    top10Text: {
        color: '#fff',
        fontSize: 15
    },
    gradient: {
        position: "absolute",
        width: '100%',
        height: 150,
        bottom: 0,
    }
});

export default styles;