import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
});
