import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2D3748',
    marginBottom: 8,
    textAlign: 'center',
  },
  
  subtitle: {
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
    fontWeight: '400',
  },
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#2D3748',
    paddingVertical: 16,
    paddingRight: 12,
    fontWeight: '500',
  },
  
  addButton: {
    backgroundColor: '#667EEA',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#667EEA',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 24,
  },
  
  tasksContainer: {
    flex: 1,
    marginBottom: 20,
  },
  
  tasksList: {
    paddingBottom: 20,
  },
  
  taskItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  
  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#CBD5E0',
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  
  checkboxDone: {
    backgroundColor: '#48BB78',
    borderColor: '#48BB78',
  },
  
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  
  taskText: {
    fontSize: 16,
    color: '#2D3748',
    fontWeight: '500',
    flex: 1,
    lineHeight: 22,
  },
  
  taskTextDone: {
    textDecorationLine: 'line-through',
    color: '#A0AEC0',
  },
  
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FEB2B2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  
  deleteText: {
    color: '#E53E3E',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
  },
  
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  
  emptyStateText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4A5568',
    marginBottom: 8,
  },
  
  emptyStateSubtext: {
    fontSize: 14,
    color: '#A0AEC0',
    textAlign: 'center',
    lineHeight: 20,
  },
  
  footer: {
    paddingVertical: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  
  footerText: {
    fontSize: 14,
    color: '#718096',
    fontWeight: '500',
  },
});

export default styles