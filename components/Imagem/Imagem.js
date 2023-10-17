import React from 'react';
import Logo from '../../assets/logo.jpg';
import {Image, StyleSheet, View } from 'react-native';

export default function Imagem(){
    return(
        <View style={styles.centralizar}>
            <Image style= {styles.Imagem} source={Logo}></Image>
        </View>
        
    )
}
const styles = StyleSheet.create({
    centralizar:{
        justifyContent: 'center', 
        alignItems: 'center'
    },
    Imagem:{
        resizeMode: 'contain', 
        width: '100%',
    }
    
})