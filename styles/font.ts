import { StyleSheet } from "react-native";
import { colors } from './colors';

export const customFonts = {
    ZenKakuRegular: require('../assets/fonts/ZenKakuGothicNew-Regular.ttf'),
    ZenKakuMedium: require('../assets/fonts/ZenKakuGothicNew-Medium.ttf'),
    ZenKakuBold: require('../assets/fonts/ZenKakuGothicNew-Bold.ttf'),
    latoLight: require('../assets/fonts/Lato-Light.ttf'),
    latoRegular: require('../assets/fonts/Lato-Regular.ttf'),
    latoBold: require('../assets/fonts/Lato-Bold.ttf'),
};

export const font = StyleSheet.create({
    base: {
        fontFamily: "ZenKakuMedium",
        fontSize: 16,
        color: colors.mainBlue,
    },
    pageTitle: {
        fontSize: 20,
        color: "#fff",
    },
    fontSize14: { fontSize: 14, },
    fontSize12: { fontSize: 12, },
    fontSize10: { fontSize: 10, },
    numberText: { fontFamily: "latoRegular", },
});