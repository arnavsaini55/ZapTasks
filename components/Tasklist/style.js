import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  // TaskList Styles - Stargazing Theme
  container: {
    flex: 1,
    position: 'relative',
  },
  
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },

  star: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  shootingStar: {
    position: 'absolute',
    width: 100,
    height: 2,
    zIndex: 10,
  },

  shootingStarGradient: {
    flex: 1,
    borderRadius: 1,
  },

  nebula1: {
    position: 'absolute',
    top: height * 0.1,
    left: width * 0.1,
    width: width * 0.3,
    height: height * 0.2,
    backgroundColor: 'rgba(138, 43, 226, 0.1)',
    borderRadius: 100,
    transform: [{ rotate: '45deg' }],
  },

  nebula2: {
    position: 'absolute',
    top: height * 0.4,
    right: width * 0.1,
    width: width * 0.25,
    height: height * 0.15,
    backgroundColor: 'rgba(72, 61, 139, 0.08)',
    borderRadius: 80,
    transform: [{ rotate: '-30deg' }],
  },

  nebula3: {
    position: 'absolute',
    bottom: height * 0.2,
    left: width * 0.2,
    width: width * 0.2,
    height: height * 0.1,
    backgroundColor: 'rgba(147, 112, 219, 0.06)',
    borderRadius: 60,
    transform: [{ rotate: '15deg' }],
  },

  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 120,
  },

  emptyListContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  taskItemContainer: {
    marginBottom: 15,
  },

  taskItemGlow: {
    shadowColor: '#7E57C2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  taskItemGradient: {
    borderRadius: 12,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderWidth: 1,
    borderColor: 'rgba(126, 87, 194, 0.2)',
  },

  emptyStateContainer: {
    alignItems: 'center',
    padding: 40,
  },

  emptyStateText: {
    fontSize: 48,
    marginBottom: 20,
  },

  emptyStateTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },

  emptyStateSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    lineHeight: 22,
  },

  // Home Component - AI Button Styles
  aiButtonContainer: {
    position: 'relative',
    alignItems: 'center',
    margin: 20,
    zIndex: 100,
  },

  glowContainer: {
    position: 'absolute',
    width: 220,
    height: 80,
    backgroundColor: '#7E57C2',
    borderRadius: 40,
    opacity: 0.3,
    shadowColor: '#7E57C2',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 20,
  },

  lightningContainer: {
    position: 'absolute',
    width: 200,
    height: 60,
  },

  lightning: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    opacity: 0.6,
  },

  lightning1: {
    width: 2,
    height: 15,
    top: -8,
    left: 20,
    transform: [{ rotate: '15deg' }],
    animationDuration: '0.1s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
  },

  lightning2: {
    width: 1,
    height: 12,
    top: -6,
    right: 30,
    transform: [{ rotate: '-20deg' }],
    animationDuration: '0.15s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
  },

  lightning3: {
    width: 1,
    height: 10,
    bottom: -5,
    left: '50%',
    transform: [{ rotate: '10deg' }],
    animationDuration: '0.12s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
  },

  buttonWrapper: {
    shadowColor: '#7E57C2',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 15,
  },

  aiButton: {
    borderRadius: 30,
    overflow: 'hidden',
  },

  buttonGradient: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    minWidth: 180,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  buttonContent: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  aiButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  buttonShine: {
    position: 'absolute',
    top: 2,
    left: 10,
    right: 10,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 1,
  },

  sparkle: {
    position: 'absolute',
    zIndex: 10,
  },

  sparkleText: {
    fontSize: 12,
    color: '#FFD700',
    textShadowColor: '#FFD700',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },

  particleContainer: {
    position: 'absolute',
    width: 200,
    height: 60,
    pointerEvents: 'none',
  },

  particle: {
    position: 'absolute',
    width: 3,
    height: 3,
    backgroundColor: '#FFD700',
    borderRadius: 1.5,
    opacity: 0.8,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },

  // Legacy TaskInput styles (keeping for compatibility)
  taskItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#7E57C2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default styles;