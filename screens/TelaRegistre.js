import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaRegistre = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (username && password) {

      const existingUser = await AsyncStorage.getItem(username);
      if (existingUser) {
        alert('Nome de usuário já existe. Escolha outro nome de usuário.');
      } else {
        // Armazene as informações do novo usuário no AsyncStorage
        await AsyncStorage.setItem(username, password);
        alert('Cadastro bem-sucedido.');
        
        // navegaçãotela "Login" após o cadastro
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nome de Usuário:</Text>
      <TextInput
      style={styles.input}
        placeholder="Nome de Usuário"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Text>Senha:</Text>
      <TextInput
      style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Cadastrar" onPress={handleRegister} />
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000",
  },
  input: {
    width: '80%',
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    backgroundColor: "#fff",
  }})
export default TelaRegistre;