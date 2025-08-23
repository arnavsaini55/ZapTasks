import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../Assest/style/scaling";

const style = StyleSheet.create({
  // Main container for the Input component
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: verticalScale(8),
    padding: horizontalScale(18),
    backgroundColor: "#f8fafc", // Even softer blue-white
    borderRadius: horizontalScale(20),
    width: "95%",
    alignSelf: "center",
    height: verticalScale(70),
    shadowColor: "#475569",
    shadowOffset: {
      width: 0,
      height: verticalScale(4),
    },
    shadowOpacity: 0.12,
    shadowRadius: horizontalScale(12),
    elevation: 8,
    borderWidth: 1.5,
    borderColor: "#e1e7ef", // Softer border
    // Beautiful gradient-like borders
    borderTopColor: "#d1d9e0",
    borderLeftColor: "#d1d9e0",
    // Subtle inner glow effect
    borderRightColor: "#f1f5f9",
    borderBottomColor: "#f1f5f9",
  },

  // Active/pressed state for container
  containerPressed: {
    backgroundColor: "#eef4f7", // Gentle pressed state
    transform: [{ scale: 0.97 }],
    shadowOpacity: 0.18,
    shadowRadius: horizontalScale(8),
    elevation: 6,
    borderColor: "#d4e2ea",
  },

  // Completed task container
  containerCompleted: {
    backgroundColor: "#f0fdf4", // Soft mint background
    borderColor: "#86efac",
    borderTopColor: "#bbf7d0",
    borderLeftColor: "#bbf7d0",
    borderRightColor: "#dcfce7",
    borderBottomColor: "#dcfce7",
    shadowColor: "#22c55e",
    shadowOpacity: 0.15,
  },

  // Hover animation state
  containerHover: {
    backgroundColor: "#f1f6f9",
    borderColor: "#cbd5e1",
    shadowOpacity: 0.2,
    shadowRadius: horizontalScale(14),
    transform: [{ translateY: -1 }],
  },

  // Title text styling (matches Text component with style.title)
  title: {
    flex: 1,
    fontSize: horizontalScale(16),
    color: "#334155", // Richer contrast
    marginHorizontal: horizontalScale(14),
    fontWeight: "600",
    lineHeight: verticalScale(24),
    letterSpacing: 0.4,
    // Soft glow text shadow
    textShadowColor: "rgba(255, 255, 255, 0.8)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  textCompleted: {
    color: "#64748b",
    fontWeight: "400",
  },

  // Done/strikethrough styling (matches checklist && style.done)
  done: {
    textDecorationLine: "line-through",
    color: "#94a3b8",
    opacity: 0.75,
  },

  // Priority icon styling (for FontAwesome flag icon)
  flagIcon: {
    marginRight: horizontalScale(14),
    shadowColor: "#64748b",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  flagIconHigh: {
    shadowColor: "#f87171",
    shadowOpacity: 0.4,
  },

  flagIconMedium: {
    shadowColor: "#fbbf24",
    shadowOpacity: 0.4,
  },

  flagIconLow: {
    shadowColor: "#34d399",
    shadowOpacity: 0.4,
  },

  // Checkbox/toggle icon styling (for FontAwesome check/square icons)
  checkIcon: {
    marginLeft: horizontalScale(10),
    color: "#94a3b8",
    shadowColor: "#64748b",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  checkIconActive: {
    color: "#16a34a",
    shadowColor: "#22c55e",
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },

  // Priority-based container backgrounds
  priorityHigh: {
    borderLeftWidth: horizontalScale(5),
    borderLeftColor: "#f87171",
    backgroundColor: "#fef7f7", // Very subtle red tint
  },

  priorityMedium: {
    borderLeftWidth: horizontalScale(5),
    borderLeftColor: "#fbbf24",
    backgroundColor: "#fffdf7", // Very subtle yellow tint
  },

  priorityLow: {
    borderLeftWidth: horizontalScale(5),
    borderLeftColor: "#34d399",
    backgroundColor: "#f7fef9", // Very subtle green tint
  },

  priorityNone: {
    borderLeftWidth: horizontalScale(5),
    borderLeftColor: "#e2e8f0",
    backgroundColor: "#f8fafc", // Default clean background
  },

  // Pressable interaction styles
  pressableArea: {
    padding: horizontalScale(8),
    borderRadius: horizontalScale(8),
  },

  pressablePressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },

  // Animation states for smooth transitions
  pulseAnimation: {
    transform: [{ scale: 1 }],
  },

  pulseAnimationActive: {
    transform: [{ scale: 1.05 }],
  },

  bounceIn: {
    transform: [{ scale: 0.3 }],
    opacity: 0,
  },

  bounceInActive: {
    transform: [{ scale: 1 }],
    opacity: 1,
  },

  slideFromLeft: {
    transform: [{ translateX: -100 }],
    opacity: 0,
  },

  slideFromLeftActive: {
    transform: [{ translateX: 0 }],
    opacity: 1,
  },

  slideFromRight: {
    transform: [{ translateX: 100 }],
    opacity: 0,
  },

  slideFromRightActive: {
    transform: [{ translateX: 0 }],
    opacity: 1,
  },

  floatUp: {
    transform: [{ translateY: 2 }],
  },

  floatDown: {
    transform: [{ translateY: -2 }],
  },

  shake: {
    transform: [{ translateX: -5 }],
  },

  shakeRight: {
    transform: [{ translateX: 5 }],
  },

  // Glow effects for different states
  glowSoft: {
    shadowColor: "#60a5fa",
    shadowOpacity: 0.3,
    shadowRadius: horizontalScale(10),
    elevation: 10,
  },

  glowSuccess: {
    shadowColor: "#34d399",
    shadowOpacity: 0.4,
    shadowRadius: horizontalScale(12),
    elevation: 12,
  },

  glowWarning: {
    shadowColor: "#fbbf24",
    shadowOpacity: 0.4,
    shadowRadius: horizontalScale(10),
    elevation: 10,
  },

  glowError: {
    shadowColor: "#f87171",
    shadowOpacity: 0.4,
    shadowRadius: horizontalScale(10),
    elevation: 10,
  },

  // Enhanced contrast variations
  containerHighContrast: {
    backgroundColor: "#ffffff",
    borderColor: "#cbd5e1",
    shadowOpacity: 0.2,
  },

  containerLowContrast: {
    backgroundColor: "#f1f5f9",
    borderColor: "#e2e8f0",
    shadowOpacity: 0.1,
  },

  // Morphing container sizes
  morphSmall: {
    height: verticalScale(60),
    padding: horizontalScale(14),
  },

  morphLarge: {
    height: verticalScale(80),
    padding: horizontalScale(22),
  },

  // Interactive feedback effects
  rippleEffect: {
    position: "absolute",
    borderRadius: 1000,
    backgroundColor: "rgba(59, 130, 246, 0.3)",
  },

  breathe: {
    transform: [{ scale: 1.02 }],
  },

  breatheOut: {
    transform: [{ scale: 0.98 }],
  },

  // Theme variants
  darkTheme: {
    backgroundColor: "#1f2937",
    borderColor: "#374151",
    shadowColor: "#000",
  },

  darkThemeText: {
    color: "#f9fafb",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
  },

  lightTheme: {
    backgroundColor: "#ffffff",
    borderColor: "#e5e7eb",
    shadowColor: "#6b7280",
    shadowOpacity: 0.1,
  },

  lightThemeText: {
    color: "#1f2937",
    textShadowColor: "transparent",
  },

  // Responsive tablet adjustments
  tabletContainer: {
    height: verticalScale(75),
    padding: horizontalScale(22),
  },

  tabletTitle: {
    fontSize: horizontalScale(18),
  },

  tabletIcon: {
    marginHorizontal: horizontalScale(16),
  },
});

export default style;