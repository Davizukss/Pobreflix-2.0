import React, { useState, useEffect } from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; 

const TelaLogin = () => {
  const navigation = useNavigation();


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // evento pro botão Entrar
  const handleLogin = async () => {
    // Verifique as credenciais do usuário no AsyncStorage
    const storedPassword = await AsyncStorage.getItem(username);

    if (password === storedPassword) {
      // Autenticação bem sucedida
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      alert('Erro de autenticação');
    }
  };

  useEffect(() => {
    const checkRememberedUser = async () => {
      const rememberedUser = await AsyncStorage.getItem('rememberedUser');
      if (rememberedUser) {
        // navegação para a tela Home
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
    };
    checkRememberedUser();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Usuário" onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder="Senha" onChangeText={setPassword} secureTextEntry style={styles.input} />
      <View>
      <CheckBox value={rememberMe} onValueChange={setRememberMe} style={styles.checkbox} />
      <Text style={styles.label}>Lembrar-me</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
         <Text style={styles.botaoTxt} onPress={handleLogin}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Registre')}>
         <Text style={styles.botaoTxt}>Registre-Se</Text>
      </TouchableOpacity>
    </View>
  );
};

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
  },
  checkbox: {
    flexDirection: 'row',
    marginRight: 50,
  },
  label: {
    color: "#fff",
    marginTop: -20,
    marginLeft: 25,
  },
  button: {
    height: 60,
        backgroundColor: '#FE0000',
        borderRadius: 10,
        width: '55%',
        marginTop: '10%',
        alignItems: "center",
        justifyContent: "center",
  },
  botaoTxt: {
    color: '#fff',
    fontSize: 18,
    padding: 20,
    width: '100%',
    textAlign: 'center',

  },
});

export default TelaLogin;
