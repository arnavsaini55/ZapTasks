import { StyleSheet } from "react-native";
import getFontFamily from '../../Assest/Fonts/helper';
import { scaleFontSize } from "../../Assest/style/scaling";

const style = StyleSheet.create({
  title1: {
    fontFamily: getFontFamily('MozillaHeadline_Condensed-Bold', 600),
    fontSize: scaleFontSize(28),        // Slightly bigger
    lineHeight: scaleFontSize(32),
    paddingLeft: 22,
    marginBottom: 8,                    // Better spacing
    letterSpacing: 1,                   // Adds modern touch
    color: "#4B0082",                   // Dark purple
    textShadowColor: "rgba(0,0,0,0.15)", // Subtle shadow
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
  },

  title2: {
    fontFamily: getFontFamily('MozillaHeadline_Condensed-Bold', 600),
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    marginBottom: 6,
    letterSpacing: 0.8,
    color: "#5E35B1",                   // Medium purple
    textShadowColor: "rgba(0,0,0,0.1)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  title3: {
    fontFamily: getFontFamily('MozillaHeadline_Condensed-Bold', 600),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(20),
    marginBottom: 4,
    letterSpacing: 0.5,
    color: "#7E57C2",                   // Light purple
    textShadowColor: "rgba(0,0,0,0.08)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
});

export default style;
