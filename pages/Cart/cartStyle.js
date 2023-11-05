import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'space-between',
  },
  listContainer: {
    flex: 1,
    color: 'black',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});