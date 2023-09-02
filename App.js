import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = { {color: "white", fontSize: 42, fontFamily:"sans-serif-light"} }>
        Hola, Coder!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
