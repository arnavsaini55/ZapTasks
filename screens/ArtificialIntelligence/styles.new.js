import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0f',
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
    backgroundColor: '#0a0a0f',
    borderTopWidth: 1,
    borderTopColor: 'rgba(96, 165, 250, 0.3)',
    width: '100%',
  },
  TextThing: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    color: 'white',
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(96, 165, 250, 0.3)',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  backButtonText: {
    color: '#1E90FF',
    fontSize: 16,
  },
  // ... keep all your other existing styles
});
