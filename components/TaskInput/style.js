import { StyleSheet, Dimensions } from "react-native";
import { horizontalScale, verticalScale } from "../../Assest/style/scaling";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  // Main container with purple gradient background
  container: {
    flex: 1,
    backgroundColor: '#faf5ff', // Light purple background
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(60),
    paddingBottom: verticalScale(30),
  },

  // Priority Picker Container with floating effect
  pickerContainer: {
    backgroundColor: '#ffffff',
    borderRadius: horizontalScale(20),
    marginBottom: verticalScale(25),
    shadowColor: '#3b82f6',
    shadowOffset: {
      width: 0,
      height: verticalScale(8),
    },
    shadowOpacity: 0.25,
    shadowRadius: horizontalScale(15),
    elevation: 12,
    borderWidth: 2,
    borderColor: '#e0f2fe',
    // Gradient border effect
    borderTopColor: '#bae6fd',
    borderLeftColor: '#bae6fd',
    borderRightColor: '#f0f9ff',
    borderBottomColor: '#f0f9ff',
  },

  // Enhanced picker styling
  picker: {
    height: verticalScale(60),
    marginHorizontal: horizontalScale(15),
    color: '#1e40af',
    fontSize: horizontalScale(16),
    fontWeight: '600',
  },

  // Animated picker with glow
  pickerGlow: {
    shadowColor: '#60a5fa',
    shadowOpacity: 0.4,
    shadowRadius: horizontalScale(20),
    elevation: 15,
    transform: [{ scale: 1.02 }],
  },

  // Input container with morphing effects
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: horizontalScale(25),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(8),
    marginBottom: verticalScale(30),
    shadowColor: '#6366f1',
    shadowOffset: {
      width: 0,
      height: verticalScale(6),
    },
    shadowOpacity: 0.2,
    shadowRadius: horizontalScale(12),
    elevation: 10,
    borderWidth: 2,
    borderColor: '#e0e7ff',
    // Multi-layer border for depth
    borderTopColor: '#c7d2fe',
    borderLeftColor: '#c7d2fe',
    borderRightColor: '#f8fafc',
    borderBottomColor: '#f8fafc',
  },

  // Focused input state
  inputContainerFocused: {
    borderColor: '#6366f1',
    borderTopColor: '#8b5cf6',
    borderLeftColor: '#8b5cf6',
    shadowColor: '#8b5cf6',
    shadowOpacity: 0.3,
    shadowRadius: horizontalScale(16),
    elevation: 15,
    transform: [{ scale: 1.02 }],
  },

  // Text input with breathing animation
  textInput: {
    flex: 1,
    fontSize: horizontalScale(16),
    color: '#1e293b',
    fontWeight: '500',
    paddingVertical: verticalScale(15),
    paddingRight: horizontalScale(15),
    letterSpacing: 0.3,
  },

  // Placeholder with subtle animation
  textInputPlaceholder: {
    color: '#94a3b8',
    fontStyle: 'italic',
  },

  // Perfect circular animated add button
  addButton: {
    backgroundColor: '#8b5cf6',
    width: horizontalScale(56),
    height: horizontalScale(56), // Make it perfectly square first
    borderRadius: horizontalScale(28), // Half of width/height for perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#8b5cf6',
    shadowOffset: {
      width: 0,
      height: verticalScale(6),
    },
    shadowOpacity: 0.4,
    shadowRadius: horizontalScale(12),
    elevation: 10,
    // Remove gradient borders for clean circle
    borderWidth: 0,
  },

  // Button press animation
  addButtonPressed: {
    backgroundColor: '#4f46e5',
    transform: [{ scale: 0.9 }, { rotate: '180deg' }],
    shadowOpacity: 0.6,
    shadowRadius: horizontalScale(20),
    elevation: 15,
  },

  // Button hover/active state
  addButtonActive: {
    backgroundColor: '#7c3aed',
    transform: [{ scale: 1.1 }, { rotate: '45deg' }],
    shadowColor: '#a855f7',
    shadowOpacity: 0.5,
    shadowRadius: horizontalScale(25),
    elevation: 18,
  },

  // Pulsing button effect
  addButtonPulse: {
    transform: [{ scale: 1.15 }],
    shadowRadius: horizontalScale(30),
    shadowOpacity: 0.7,
  },

  // Add button text with glow
  addButtonText: {
    color: '#ffffff',
    fontSize: horizontalScale(24),
    fontWeight: '700',
    textShadowColor: 'rgba(139, 92, 246, 0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },

  // Rotating add button text
  addButtonTextRotate: {
    transform: [{ rotate: '90deg' }],
  },

  // Task list container
  taskListContainer: {
    flex: 1,
    paddingTop: verticalScale(10),
  },

  // Individual task animation container
  taskAnimationContainer: {
    marginBottom: verticalScale(15),
  },

  // Slide in from left animation
  slideInLeft: {
    transform: [{ translateX: -width }],
    opacity: 0,
  },

  slideInLeftActive: {
    transform: [{ translateX: 0 }],
    opacity: 1,
  },

  // Slide in from right animation  
  slideInRight: {
    transform: [{ translateX: width }],
    opacity: 0,
  },

  slideInRightActive: {
    transform: [{ translateX: 0 }],
    opacity: 1,
  },

  // Bounce in animation
  bounceIn: {
    transform: [{ scale: 0 }],
    opacity: 0,
  },

  bounceInActive: {
    transform: [{ scale: 1 }],
    opacity: 1,
  },

  // Flip animation
  flipIn: {
    transform: [{ rotateY: '90deg' }],
    opacity: 0,
  },

  flipInActive: {
    transform: [{ rotateY: '0deg' }],
    opacity: 1,
  },

  // Zoom and spin animation
  zoomSpin: {
    transform: [{ scale: 0.1 }, { rotate: '360deg' }],
    opacity: 0,
  },

  zoomSpinActive: {
    transform: [{ scale: 1 }, { rotate: '0deg' }],
    opacity: 1,
  },

  // Crazy matrix-style animation
  matrixEffect: {
    transform: [
      { translateY: -height },
      { rotateX: '180deg' },
      { skewX: '45deg' }
    ],
    opacity: 0,
  },

  matrixEffectActive: {
    transform: [
      { translateY: 0 },
      { rotateX: '0deg' },
      { skewX: '0deg' }
    ],
    opacity: 1,
  },

  // Floating animation
  floating: {
    transform: [{ translateY: -5 }],
  },

  floatingDown: {
    transform: [{ translateY: 5 }],
  },

  // Shake animation for errors/validation
  shake: {
    transform: [{ translateX: -10 }],
  },

  shakeRight: {
    transform: [{ translateX: 10 }],
  },

  shakeUp: {
    transform: [{ translateY: -5 }],
  },

  shakeDown: {
    transform: [{ translateY: 5 }],
  },

  // Crazy wiggle animation
  wiggle: {
    transform: [{ rotate: '-3deg' }],
  },

  wiggleRight: {
    transform: [{ rotate: '3deg' }],
  },

  // Pulse glow effects
  pulseGlowSoft: {
    shadowColor: '#60a5fa',
    shadowOpacity: 0.6,
    shadowRadius: horizontalScale(20),
    elevation: 20,
  },

  pulseGlowIntense: {
    shadowColor: '#8b5cf6',
    shadowOpacity: 0.8,
    shadowRadius: horizontalScale(30),
    elevation: 25,
  },

  pulseGlowRainbow: {
    shadowColor: '#f59e0b',
    shadowOpacity: 0.7,
    shadowRadius: horizontalScale(25),
    elevation: 22,
  },

  // Morphing container effects
  morphTiny: {
    height: verticalScale(40),
    borderRadius: horizontalScale(20),
    padding: horizontalScale(10),
  },

  morphHuge: {
    height: verticalScale(100),
    borderRadius: horizontalScale(50),
    padding: horizontalScale(30),
  },

  morphWide: {
    width: '110%',
    marginLeft: '-5%',
  },

  morphNarrow: {
    width: '80%',
    alignSelf: 'center',
  },

  // Ripple effect
  ripple: {
    position: 'absolute',
    borderRadius: 1000,
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
  },

  // Particle explosion effect
  particle: {
    position: 'absolute',
    width: horizontalScale(8),
    height: verticalScale(8),
    borderRadius: horizontalScale(4),
    backgroundColor: '#a855f7',
  },

  // Crazy border animations
  borderDance: {
    borderColor: '#f59e0b',
    borderWidth: 4,
    borderStyle: 'dashed',
  },

  borderPulse: {
    borderColor: '#10b981',
    borderWidth: 6,
    borderTopColor: '#06d6a0',
    borderRightColor: '#118ab2',
    borderBottomColor: '#073b4c',
    borderLeftColor: '#ffd166',
  },

  borderRainbow: {
    borderTopColor: '#ef4444',
    borderRightColor: '#f59e0b',
    borderBottomColor: '#10b981',
    borderLeftColor: '#3b82f6',
    borderWidth: 4,
  },

  // Screen-wide flash effect
  flashOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
    opacity: 0,
  },

  flashOverlayActive: {
    opacity: 1,
  },

  // Priority-based animations
  priorityHighAnimation: {
    shadowColor: '#ef4444',
    shadowOpacity: 0.6,
    shadowRadius: horizontalScale(15),
    borderLeftColor: '#dc2626',
    borderLeftWidth: horizontalScale(6),
  },

  priorityMediumAnimation: {
    shadowColor: '#f59e0b',
    shadowOpacity: 0.5,
    shadowRadius: horizontalScale(12),
    borderLeftColor: '#d97706',
    borderLeftWidth: horizontalScale(4),
  },

  priorityLowAnimation: {
    shadowColor: '#10b981',
    shadowOpacity: 0.4,
    shadowRadius: horizontalScale(10),
    borderLeftColor: '#059669',
    borderLeftWidth: horizontalScale(3),
  },

  // Completion celebration effects
  celebrationBurst: {
    shadowColor: '#fbbf24',
    shadowOpacity: 0.9,
    shadowRadius: horizontalScale(40),
    elevation: 30,
    transform: [{ scale: 1.2 }],
  },

  celebrationSpin: {
    transform: [{ rotate: '720deg' }, { scale: 1.1 }],
  },

  celebrationBounce: {
    transform: [{ translateY: -20 }, { scale: 1.15 }],
  },

  // Loading/processing states
  processingPulse: {
    opacity: 0.5,
    transform: [{ scale: 0.95 }],
  },

  processingGlow: {
    shadowColor: '#6366f1',
    shadowOpacity: 0.8,
    shadowRadius: horizontalScale(25),
    elevation: 20,
  },

  // Responsive tablet animations
  tabletContainer: {
    paddingHorizontal: horizontalScale(40),
  },

  tabletInputContainer: {
    paddingHorizontal: horizontalScale(30),
    borderRadius: horizontalScale(35),
  },

  tabletAddButton: {
    width: horizontalScale(60),
    height: verticalScale(60),
    borderRadius: horizontalScale(30),
  },

  // Dark theme animations
  darkThemeGlow: {
    shadowColor: '#a78bfa',
    backgroundColor: '#1f2937',
    borderColor: '#4c1d95',
  },

  // Light theme animations  
  lightThemeGlow: {
    shadowColor: '#6366f1',
    backgroundColor: '#ffffff',
    borderColor: '#e0e7ff',
  },
});

export default styles;