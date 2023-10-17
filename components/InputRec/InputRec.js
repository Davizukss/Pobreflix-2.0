import React from 'react';
import { StyleSheet, TextInput, View } from "react-native";
import { Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
export default function InputRec() {
  return (
    <View>

      <Animatable.View animation={'fadeInUp'} style={styles.inputView}>
        <Icon color='#333' name='envelope' type='font-awesome' size={22}></Icon>
        <TextInput style={styles.email} placeholder="Email de recuperação"></TextInput>
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

});
