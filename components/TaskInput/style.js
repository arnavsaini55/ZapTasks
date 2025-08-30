


import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#2c3e50',
    backgroundColor: 'transparent',
    fontWeight: '400',
    letterSpacing: 0.3,
  },
  
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginLeft: 8,
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
    transform: [{ scale: 1 }],
  },
  
  addButtonPressed: {
    backgroundColor: '#0056b3',
    transform: [{ scale: 0.95 }],
  },
  
  addButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 24,
  },
  
  // Picker styling
  pickerContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
    overflow: 'hidden',
  },
  
  picker: {
    height: 50,
    color: '#2c3e50',
    backgroundColor: 'transparent',
  },
  
  // Priority label styling
  priorityLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6c757d',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  
  // Animation styles for feedback
  successFeedback: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
    backgroundColor: '#28a745',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  
  successText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  
  // Focus states
  textInputFocused: {
    borderColor: '#007AFF',
    shadowColor: '#007AFF',
    shadowOpacity: 0.2,
  },
  
  // Priority-based styling
  priorityHigh: {
    borderLeftWidth: 4,
    borderLeftColor: '#dc3545',
  },
  
  priorityMedium: {
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  
  priorityLow: {
    borderLeftWidth: 4,
    borderLeftColor: '#28a745',
  },
  
  // Enhanced picker items (for custom picker if needed)
  pickerItem: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: '500',
  },
  
  // Loading state (if you want to add loading feedback)
  loadingButton: {
    backgroundColor: '#6c757d',
    opacity: 0.7,
  },
  
  loadingText: {
    opacity: 0.7,
  },
  
  // Responsive adjustments
  containerSmall: {
    marginHorizontal: 12,
    paddingHorizontal: 16,
  },
  
  // Accessibility enhancements
  accessibilityFocus: {
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  
  // Gradient background option (if you want to enhance further)
  gradientContainer: {
    borderRadius: 16,
    padding: 1,
  },
  
  innerContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
  },
});

export default styles;