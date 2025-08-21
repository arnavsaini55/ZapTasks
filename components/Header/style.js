import { StyleSheet } from "react-native";
import getFontFamily from '../../Assest/Fonts/helper'
import { scaleFontSize, } from "../../Assest/style/scaling";
const style = StyleSheet.create({
 title1:{
        fontFamily: getFontFamily('MozillaHeadline_Condensed-Bold',600),
        fontSize: scaleFontSize(26),
        lineHeight: scaleFontSize(29),
        // padding: 22,
        marginBottom: 0,
        paddingLeft: 22

    },
    title2:{
        fontFamily:getFontFamily('MozillaHeadline_Condensed-Bold',600),
        fontSize: scaleFontSize(18),
        lineHeight: scaleFontSize(22),
        marginBottom:0,
    },
    title3:{
        fontFamily:getFontFamily('MozillaHeadline_Condensed-Bold',600),
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),
        marginBottom:0,

    }
})


export default style;