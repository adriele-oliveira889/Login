import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from '../componentes/Logo';
export default function Login() {
  return (
    <View style={styles.container}>
      <Logo></Logo>
      <Text style={styles.texto}>Informe os dados para acessar:</Text>
      <TextInput style={styles.textinput}></TextInput>
      <TextInput style={styles.textinput}></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  textinput:{
    width: 280,
    height: 50,
    borderWidth: 0.5,
    borderColor: '#000',
    marginTop: 20,
    borderRadius: 10 
  }
});
