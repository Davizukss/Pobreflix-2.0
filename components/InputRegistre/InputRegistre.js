import React from 'react';
import { StyleSheet, TextInput, View } from "react-native";
import { useState } from 'react';
import { Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
export default function InputRegistre({Nome}) {
  return (
    <View>
     <Animatable.View animation={'fadeInUp'} style={styles.inputNome}>
        <Icon color='#333' name='user' type='font-awesome' size={25}></Icon>
        <TextInput style={styles.email} placeholder="Nome:" onChangeText={Nome}></TextInput>
      </Animatable.View> 

      <Animatable.View animation={'fadeInUp'} style={styles.inputSobrenome}>
        <Icon color='#333' name='tag' type='font-awesome' size={25}></Icon>
        <TextInput style={styles.email} placeholder="CPF:"></TextInput>
      </Animatable.View>

      <Animatable.View animation={'fadeInUp'} style={styles.inputMatricula}>
        <Icon color='#333' name='clipboard' type='font-awesome' size={25}></Icon>
        <TextInput style={styles.email} placeholder="Data de nascimento:"></TextInput>
      </Animatable.View>

      <Animatable.View animation={'fadeInUp'} style={styles.inputView}>
        <Icon color='#333' name='address-book' type='font-awesome' size={25}></Icon>
        <TextInput style={styles.email} placeholder="Email:"></TextInput>
      </Animatable.View>

      <Animatable.View animation={'fadeInUp'}  style={styles.inputSenha} >
        <Icon color='#333' name='lock' type='font-awesome' size={25}></Icon>
        <TextInput style={styles.email} secureTextEntry={true} placeholder={'Senha:'} textContentType='password'></TextInput>
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
    top: '7%',
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
    top: '10%',
    width: "90%",
    height: 60,
    backgroundColor: "#f1f3f6",
    borderRadius: 8,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputMatricula: {
    marginLeft: '5%',
    top: '4%',
    width: "90%",
    height: 60,
    backgroundColor: "#f1f3f6",
    borderRadius: 8,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputNome: {

    marginLeft: '5%',
    bottom: '4%',
    width: "90%",
    height: 60,
    backgroundColor: "#f1f3f6",
    borderRadius: 8,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputSobrenome: {
    marginLeft: '5%',
    bottom: '0%',
    width: "90%",
    height: 60,
    backgroundColor: "#f1f3f6",
    borderRadius: 8,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }

});
