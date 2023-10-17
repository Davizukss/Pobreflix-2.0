import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Imagem from "../components/Imagem/Imagem";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
export default function TelaBemVindo() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View animation={"flipInY"} style={styles.containerLogo}>
                <Imagem/>
            </Animatable.View>
            <Animatable.View delay={800} animation={"fadeInUp"} style={styles.containerForm}>
                <Text style={styles.titulo}>Series e filmes são baum de maizi!</Text>
                <Text style={styles.texto}>Cadastre-Se ou Acesse Já!</Text>
                <TouchableOpacity style={styles.botao2} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textoBotao2}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Registre')}>
                    <Text style={styles.textoBotao}>Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#000',
        justifyContent: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    titulo:{
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 28,
        marginBottom: 12,
        color: '#010101',
    },
    texto:{
        color: '#010101'
    },
    botao2:{
        height: 60,
        position: "absolute",
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        paddingVertical: 8,
        width: '55%',
        bottom: '12%',
        alignItems: "center",
        justifyContent: "center",
    },
    botao:{
        height: 60,
        position: "absolute",
        backgroundColor: '#FE0000',
        borderRadius: 10,
        paddingVertical: 8,
        width: '55%',
        alignSelf: 'flex-end',
        bottom: '12%',
        alignItems: "center",
        justifyContent: "center",
       
    },
    textoBotao:{
        color: '#fff',
        fontSize: 18,
        fontWeight: "bold",
    },
    textoBotao2:{
        color: '#000',
        fontSize: 18,
        fontWeight: "bold",
    }


})