// style.js - Comprehensive styles for TaskInput and TaskList components
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  // ===== TASK INPUT STYLES =====
  container: {
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    paddingHorizontal: 24,
    paddingVertical: 28,
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 24,
    shadowColor: '#667eea',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    position: 'relative',
    overflow: 'hidden',
  },

  // Background gradient overlay
  containerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 24,
  },

  // Priority Picker Styles
  picker: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    paddingHorizontal: 16,
    minHeight: 56,
    backdropFilter: 'blur(10px)',
  },

  // Input Container (TextInput + Button)
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 4,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(15px)',
  },

  // Text Input Styles
  textInput: {
    flex: 1,
    fontSize: 17,
    fontWeight: '500',
    color: '#2c3e50',
    paddingVertical: 16,
    paddingRight: 12,
    letterSpacing: 0.3,
    fontFamily: 'System',
  },

  // Add Button Styles
  addButton: {
    backgroundColor: '#ff6b6b',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ff6b6b',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    transform: [{ scale: 1 }],
  },

  addButtonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 28,
  },

  // ===== TASK LIST STYLES =====
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 100, // Space for floating input
    flexGrow: 1,
  },

  // Individual Task Item Container
  taskItem: {
    backgroundColor: '#ffffff',
    marginVertical: 6,
    marginHorizontal: 4,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
    transform: [{ scale: 1 }],
  },

  // Task Item Content
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
    minHeight: 72,
  },

  // Task Text Container
  taskTextContainer: {
    flex: 1,
    marginRight: 16,
  },

  taskText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    lineHeight: 22,
    letterSpacing: 0.2,
  },

  taskTextDone: {
    textDecorationLine: 'line-through',
    color: '#95a5a6',
    opacity: 0.7,
  },

  // Priority Badge Styles
  priorityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginTop: 8,
    alignSelf: 'flex-start',
    minWidth: 60,
    alignItems: 'center',
  },

  priorityHigh: {
    backgroundColor: 'rgba(231, 76, 60, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(231, 76, 60, 0.3)',
  },

  priorityMedium: {
    backgroundColor: 'rgba(243, 156, 18, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(243, 156, 18, 0.3)',
  },

  priorityLow: {
    backgroundColor: 'rgba(39, 174, 96, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(39, 174, 96, 0.3)',
  },

  priorityText: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  priorityTextHigh: {
    color: '#e74c3c',
  },

  priorityTextMedium: {
    color: '#f39c12',
  },

  priorityTextLow: {
    color: '#27ae60',
  },

  // Action Buttons Container
  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  // Checkbox/Toggle Button
  checkButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  checkButtonDone: {
    backgroundColor: '#3498db',
    borderColor: '#3498db',
  },

  checkMark: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },

  // Delete Button
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(231, 76, 60, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(231, 76, 60, 0.2)',
  },

  deleteButtonText: {
    color: '#e74c3c',
    fontSize: 16,
    fontWeight: '700',
  },

  // ===== ENHANCED INTERACTIVE STYLES =====
  
  // Pressed States
  addButtonPressed: {
    transform: [{ scale: 0.95 }],
    backgroundColor: '#ff5252',
  },

  taskItemPressed: {
    transform: [{ scale: 0.98 }],
    shadowOpacity: 0.2,
  },

  checkButtonPressed: {
    transform: [{ scale: 0.9 }],
  },

  deleteButtonPressed: {
    backgroundColor: 'rgba(231, 76, 60, 0.2)',
    transform: [{ scale: 0.9 }],
  },

  // ===== EMPTY STATE STYLES =====
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 100,
  },

  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 12,
  },

  emptySubtext: {
    fontSize: 14,
    color: '#95a5a6',
    textAlign: 'center',
    lineHeight: 20,
  },

  // ===== ANIMATION HELPERS =====
  fadeIn: {
    opacity: 1,
    transform: [{ translateY: 0 }],
  },

  fadeOut: {
    opacity: 0,
    transform: [{ translateY: -20 }],
  },

  // ===== RESPONSIVE STYLES =====
  containerTablet: {
    maxWidth: 600,
    alignSelf: 'center',
    marginHorizontal: 24,
  },

  listContainerTablet: {
    paddingHorizontal: 24,
  },

  // ===== ACCESSIBILITY STYLES =====
  accessibleButton: {
    minHeight: 44,
    minWidth: 44,
  },

  accessibleText: {
    fontSize: 16,
    lineHeight: 24,
  },

  // ===== DARK THEME VARIANTS =====
  containerDark: {
    backgroundColor: '#2c3e50',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },

  taskItemDark: {
    backgroundColor: '#34495e',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },

  taskTextDark: {
    color: '#ecf0f1',
  },

  textInputDark: {
    color: '#ecf0f1',
  },
});

export default styles;