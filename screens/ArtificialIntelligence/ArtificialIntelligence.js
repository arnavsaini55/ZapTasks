import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { getAIResponse } from "../../components/utils/utils";

const ArtificialIntelligence = () => {
  const [userMessage, setUserMessage] = useState("");
  const [aiResponse, setAIResponse] = useState("Awaiting AI response...");

  const handleSend = async () => {
    const response = await getAIResponse(userMessage);
    setAIResponse(response);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Type your message..."
        value={userMessage}
        onChangeText={setUserMessage}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TouchableOpacity onPress={handleSend} style={{ padding: 10, backgroundColor: "blue" }}>
        <Text style={{ color: "white" }}>Send</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20 }}>{aiResponse}</Text>
    </View>
  );
};

export default ArtificialIntelligence;

// import React, { useEffect, useRef, useState } from "react";
// import { 
//   View, 
//   Text, 
//   TouchableOpacity, 
//   TextInput,
//   Animated, 
//   Dimensions 
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { getAIResponse} from "../../components/utils/utils";
// import { addChatMessage } from "../../FirestoreServices/firestoreService";
// import styles from './styles';


 
// const { width, height } = Dimensions.get('window');

// const ArtificialIntelligence = () => {
//   const navigation = useNavigation();

//   const [userMessage, setUserMessage] = useState('');
// const [aiResponse, setaiResponse] = useState('awaiting for activation of neural network...');

  
//   // Animation refs
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const slideAnim = useRef(new Animated.Value(-50)).current;
//   const scaleAnim = useRef(new Animated.Value(0.8)).current;
//   const rotateAnim = useRef(new Animated.Value(0)).current;
//   const pulseAnim = useRef(new Animated.Value(1)).current;
//   const floatAnim = useRef(new Animated.Value(0)).current;
  
//   // Stargazing animation refs
//   const starTwinkleAnims = useRef([...Array(50)].map(() => new Animated.Value(Math.random()))).current;
//   const shootingStarAnim = useRef(new Animated.Value(-100)).current;
//   const constellationAnim = useRef(new Animated.Value(0)).current;


  

//   useEffect(() => {
//     // Start all animations
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//       Animated.spring(scaleAnim, {
//         toValue: 1,
//         friction: 4,
//         useNativeDriver: true,
//       }),
//     ]).start();

//     // Continuous animations
//     const rotateAnimation = Animated.loop(
//       Animated.timing(rotateAnim, {
//         toValue: 1,
//         duration: 10000,
//         useNativeDriver: true,
//       })
//     );

//     const pulseAnimation = Animated.loop(
//       Animated.sequence([
//         Animated.timing(pulseAnim, {
//           toValue: 1.1,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(pulseAnim, {
//           toValue: 1,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//       ])
//     );

//     const floatAnimation = Animated.loop(
//       Animated.sequence([
//         Animated.timing(floatAnim, {
//           toValue: -10,
//           duration: 2000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(floatAnim, {
//           toValue: 10,
//           duration: 2000,
//           useNativeDriver: true,
//         }),
//       ])
//     );

//     rotateAnimation.start();
//     pulseAnimation.start();
//     floatAnimation.start();

//     // Stargazing animations
//     const starTwinkleAnimations = starTwinkleAnims.map((anim, index) => 
//       Animated.loop(
//         Animated.sequence([
//           Animated.timing(anim, {
//             toValue: 1,
//             duration: 1500 + (index * 50),
//             useNativeDriver: true,
//           }),
//           Animated.timing(anim, {
//             toValue: 0.2,
//             duration: 1500 + (index * 50),
//             useNativeDriver: true,
//           }),
//         ])
//       )
//     );

//     const shootingStarAnimation = Animated.loop(
//       Animated.sequence([
//         Animated.timing(shootingStarAnim, {
//           toValue: width + 200,
//           duration: 3000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(shootingStarAnim, {
//           toValue: -100,
//           duration: 0,
//           useNativeDriver: true,
//         }),
//         Animated.delay(5000 + Math.random() * 5000),
//       ])
//     );

//     const constellationAnimation = Animated.loop(
//       Animated.sequence([
//         Animated.timing(constellationAnim, {
//           toValue: 1,
//           duration: 8000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(constellationAnim, {
//           toValue: 0,
//           duration: 8000,
//           useNativeDriver: true,
//         }),
//       ])
//     );

//     starTwinkleAnimations.forEach(anim => anim.start());
//     shootingStarAnimation.start();
//     constellationAnimation.start();

//     return () => {
//       rotateAnimation.stop();
//       pulseAnimation.stop();
//       floatAnimation.stop();
//       starTwinkleAnimations.forEach(anim => anim.stop());
//       shootingStarAnimation.stop();
//       constellationAnimation.stop();
//     };
//   }, []);

//   const spin = rotateAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   const shootingStarOpacity = shootingStarAnim.interpolate({
//     inputRange: [-100, 0, width/2, width + 100],
//     outputRange: [0, 1, 1, 0],
//   });

//   const constellationOpacity = constellationAnim.interpolate({
//     inputRange: [0, 0.5, 1],
//     outputRange: [0.3, 1, 0.3],
//   });

//   // Generate star positions
//   const stars = [...Array(50)].map((_, i) => ({
//     id: i,
//     left: Math.random() * width,
//     top: Math.random() * height * 0.7,
//     size: 2 + Math.random() * 3,
//   }));

//   // Constellation points
//   const constellationPoints = [
//     { x: width * 0.2, y: height * 0.15 },
//     { x: width * 0.3, y: height * 0.12 },
//     { x: width * 0.35, y: height * 0.2 },
//     { x: width * 0.25, y: height * 0.25 },
//     { x: width * 0.15, y: height * 0.22 },
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Stargazing Background */}
//       <View style={styles.starField}>
//         {/* Twinkling Stars */}
//         {stars.map((star, index) => (
//           <Animated.View
//             key={star.id}
//             style={[
//               styles.star,
//               {
//                 left: star.left,
//                 top: star.top,
//                 width: star.size,
//                 height: star.size,
//                 opacity: starTwinkleAnims[index],
//               },
//             ]}
//           />
//         ))}

//         {/* Shooting Star */}
//         <Animated.View
//           style={[
//             styles.shootingStar,
//             {
//               opacity: shootingStarOpacity,
//               transform: [{ translateX: shootingStarAnim }],
//             },
//           ]}
//         />

//         {/* Constellation Lines */}
//         <Animated.View style={{ opacity: constellationOpacity }}>
//           {constellationPoints.map((point, index) => {
//             if (index < constellationPoints.length - 1) {
//               const nextPoint = constellationPoints[index + 1];
//               const distance = Math.sqrt(
//                 Math.pow(nextPoint.x - point.x, 2) + Math.pow(nextPoint.y - point.y, 2)
//               );
//               const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
              
//               return (
//                 <View
//                   key={index}
//                   style={[
//                     styles.constellationLine,
//                     {
//                       left: point.x,
//                       top: point.y,
//                       width: distance,
//                       transform: [{ rotate: `${angle}deg` }],
//                     },
//                   ]}
//                 />
//               );
//             }
//             return null;
//           })}
//         </Animated.View>

//         {/* Constellation Stars */}
//         <Animated.View style={{ opacity: constellationOpacity }}>
//           {constellationPoints.map((point, index) => (
//             <View
//               key={index}
//               style={[
//                 styles.constellationStar,
//                 {
//                   left: point.x - 4,
//                   top: point.y - 4,
//                 },
//               ]}
//             />
//           ))}
//         </Animated.View>

//         {/* Nebula Effect */}
//         <Animated.View
//           style={[
//             styles.nebula,
//             {
//               opacity: constellationOpacity,
//               transform: [{ rotate: spin }],
//             },
//           ]}
//         />
//       </View>
//       {/* Animated background elements */}
//       <Animated.View
//         style={[
//           styles.backgroundCircle1,
//           {
//             transform: [{ rotate: spin }, { translateY: floatAnim }],
//           },
//         ]}
//       />
//       <Animated.View
//         style={[
//           styles.backgroundCircle2,
//           {
//             transform: [{ rotate: spin }, { translateY: floatAnim }],
//           },
//         ]}
//       />

//       {/* Matrix-style grid lines */}
//       <View style={[styles.gridLine, { width: 1, height: '100%', left: width * 0.2 }]} />
//       <View style={[styles.gridLine, { width: 1, height: '100%', right: width * 0.2 }]} />
//       <View style={[styles.gridLine, { height: 1, width: '100%', top: height * 0.3 }]} />
//       <View style={[styles.gridLine, { height: 1, width: '100%', bottom: height * 0.3 }]} />

//       <Animated.View
//         style={[
//           styles.mainContainer,
//           {
//             opacity: fadeAnim,
//             transform: [
//               { translateY: slideAnim },
//               { scale: scaleAnim },
//             ],
//           },
//         ]}
//       >
//         {/* Header */}
//         <View style={[styles.header, styles.holographicEffect]}>
//           <Animated.View
//             style={[
//               styles.headerIcon,
//               styles.glowEffect,
//               {
//                 transform: [{ scale: pulseAnim }, { rotate: spin }],
//               },
//             ]}
//           >
//             <Text style={styles.headerIconText}>🤖</Text>
//           </Animated.View>
//           <Text style={[styles.headerTitle, styles.neonText]}>AI Neural Network</Text>
//           <TouchableOpacity
//             style={[styles.backButton, styles.pulsingGlow]}
//             onPress={() => navigation.goBack()}
//             activeOpacity={0.8}
//           >
//             <View style={styles.backButtonGradient}>
//               <Text style={styles.backButtonText}>← TaskList</Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//         {/* Chat Input Area */}
//         <View style={styles.chatContainer}>
//           <Animated.View
//             style={[
//               styles.inputContainer,
//               {
//                 transform: [{ scale: pulseAnim }],
//               },
//             ]}
//           >
//             <View style={styles.avatarContainer}>
//               <Animated.View
//                 style={[
//                   styles.userAvatar,
//                   {
//                     transform: [{ scale: pulseAnim }],
//                   },
//                 ]}
//               >
//                 <Text style={styles.avatarText}>👤</Text>
//               </Animated.View>
//             </View>

//             <TextInput
//               style={styles.messageInput}
//               placeholder="Type your message to AI..."
//               placeholderTextColor="rgba(255, 255, 255, 0.5)"
//               multiline={true}
//               value={userMessage}
//                onChangeText={text => setUserMessage(text)}
//             />

//             <TouchableOpacity style={styles.sendButton} activeOpacity={0.8}>
//               <Animated.View
//                 style={[
//                   styles.sendButtonContainer,
//                   {
//                     transform: [{ scale: pulseAnim }],
//                   },
//                 ]}
//               >
//                 <Text style={styles.sendButtonText}>🚀</Text>
//               </Animated.View>
//             </TouchableOpacity>
//           </Animated.View>
//         </View>

//         {/* AI Response Area */}
//         <View style={styles.responseContainer}>
//           <Animated.View
//             style={[
//               styles.aiResponseBox,
//               {
//                 transform: [{ translateY: floatAnim }],
//               },
//             ]}
//           >
//             <View style={styles.aiAvatarContainer}>
//               <Animated.View
//                 style={[
//                   styles.aiAvatar,
//                   {
//                     transform: [{ scale: pulseAnim }, { rotate: spin }],
//                   },
//                 ]}
//               >
//                 <Text style={styles.avatarText}>🤖</Text>
//               </Animated.View>
//             </View>
            
//             <View style={styles.aiResponseContent}>
//               <Text style={styles.aiLabel}>AI Response</Text>
//               <View style={styles.responseArea}>
//                 <Text style={styles.responseText}>
//                   Awaiting neural network activation...
//                 </Text>
//               </View>
//             </View>
//           </Animated.View>
//         </View>

//         {/* Floating particles */}
//         {[...Array(6)].map((_, i) => (
//           <Animated.View
//             key={i}
//             style={[
//               styles.particle,
//               {
//                 left: Math.random() * width,
//                 top: Math.random() * height,
//                 transform: [
//                   { translateY: floatAnim },
//                   { rotate: spin }
//                 ],
//               },
//             ]}
//           />
//         ))}
//       </Animated.View>
//     </View>
//   );
// };

// export default ArtificialIntelligence;