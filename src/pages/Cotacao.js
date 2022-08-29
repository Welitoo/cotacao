import React, {useState} from "react";  

import {View, 
        Text,
        TextInput,
        StyleSheet,
        TouchableOpacity,
     } from 'react-native';


     export default function Cotacao(){

        let [real,setReal] = useState();
        let [dolar,setDolar] = useState();
        let [total, setTotal] = useState();

            function CalcularTotal(){
                let resultado =  parseFloat(real) / parseFloat(dolar);
                setTotal(resultado);

                alert("A cotação do real para o dolar é de U$" + total + " Dolares");

            }
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Cotacao</Text>

                <TextInput onChangeText={setReal} style={styles.campo} placeholder="Digite a quantia em reais" />

                <TextInput onChangeText={setDolar} style={styles.campo} placeholder="Digite a quantia do dolar do dia" />

                <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
                    <Text style={styles.botaoTexto}>Calcular</Text>
                </TouchableOpacity>
            </View> 
        );
     }

     const styles = StyleSheet.create({
            container: { 
            backgroundColor: '#3B3936',
            flex: 1,  
            justifyContent: 'center',
            alignItems: 'center',
     },

     titulo: { 
        fontSize: 25,
        color: '#FFF',
        fontWeight:'bold',
        marginBottom:40
     },

     campo:{
        backgroundColor: '#FFF',
        fontSize: 18,
        padding: 8,
        marginTop: 10,
        width: 300,
        marginBottom:10,
        borderRadius: 10
     },

     botao:{
        backgroundColor: 'red',
        alignItems: "center",
        padding: 15,
        borderRadius: 7,
        marginTop: 20,
        width: 250
     },

     botaoTexto:{
        color: '#FFF',
        fontSize: 17,
        fontWeight: "700",
     }
    });