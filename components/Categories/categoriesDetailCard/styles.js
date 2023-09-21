import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: windowWidth * 0.9, 
      },
      imagen: {
        width: windowWidth * 0.85,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
        borderRadius: 10,
      },
      nombre: {
        fontSize: 16,
        fontWeight: 'bold',
      },
});
