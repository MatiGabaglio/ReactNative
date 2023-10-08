import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingTop: 10
  },
  withLocation: {
    width: 300,
    height: 75,
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  withOutLocation: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }   
});
