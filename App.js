import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import AddItem from './components/AddItem.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#f2f2f2"  
        barStyle="light-content"    
        translucent={false}       
      />
      <Text style = { styles.titulo}> Lista de compras</Text>
      <View>
        <AddItem/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: 'center',
    justifyContent: 'top',
  },
  titulo: {
    color: "#242424",
    fontSize: 42,
    fontFamily:"sans-serif-light",
    paddingTop: 30,
    fontWeight: 'bold',
  },
});
