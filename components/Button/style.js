import { StyleSheet } from "react-native";
import {verticalScale,horizontalScale,scaleFontSize} from "../../Assest/style/scaling"

const style = StyleSheet.create({

    button:{
        backgroundColor:'#02c39a',
        height: verticalScale(55),
        justifyContent:'center',
        borderRadius: horizontalScale(50),
    },
    disabled:{
        opacity:0.5,
    },
    title:{
        color:'#FFFFFF',
        textAlign:'center',
        fontSize: scaleFontSize(16),
        lineHeight: scaleFontSize(19),
    }

})


export default style;