import React from 'react';
import { StyleSheet, TextInput, View } from "react-native";
import { Icon } from 'react-native-elements'
import { useState } from 'react';
import * as Animatable from 'react-native-animatable';
export default function Inputinicial( {Nome} ) {
  return (
    <View>

      <Animatable.View animation={'fadeInUp'} style={styles.inputView}>
        <Icon color='#333' name='user' type='font-awesome' size={25}></Icon>
        <TextInput style={styles.email} placeholder="Nome de Usuario:" onChangeText={Nome}></TextInput>
      </Animatable.View>

      <Animatable.View animation={'fadeInUp'}  style={styles.inputSenha} >
        <Icon color='#333' name='lock' type='font-awesome' size={25}></Icon>
        <TextInput style={styles.email} secureTextEntry={true} placeholder={'Senha'} textContentType='password'></TextInput>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  email: {
    fontSize: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  inputView: {
    marginLeft: '5%',
    bottom: '9%',
    width: "90%",
    height: 60,
    backgroundColor: "#f1f3f6",
    borderRadius: 8,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputSenha: {
    marginLeft: '5%',
    bottom: '3%',
    width: "90%",
    height: 60,
    backgroundColor: "#f1f3f6",
    borderRadius: 8,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

});
