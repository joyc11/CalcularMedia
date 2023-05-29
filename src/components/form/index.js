// Importação das dependências necessárias para o componente
import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard} from 'react-native'
import ResultMedia from "./ResultMedia/index.js";
import styles from "./style.js";

// Definição do componente "Form" como padrão para exportação
export default function Form(){

        //criação dos estados iniciais do utilizando o useState
        const[nota1, setNota1]=useState(null) //armazena altura inicial
        const[nota2, setNota2]=useState(null) //armazena peso inicial
        const[nota3, setNota3]=useState(null)
        const[nota4, setNota4]=useState(null)
        const[messageMedia, setMessageMedia]=useState("Arguadando valores...")

        const[media, setMedia]=useState(null) 

        const[textButton, setTextButton]=useState("Calcular")

        const[errorMessage, setErrorMessage]= useState(null);

        function verificationMedia(){
            if(media == null){
                Vibration.vibrate();//vibra o cell quando da erro
                setErrorMessage("CAMPO OBRIGATÓRIO*")
            }
        }  

         // Função responsável por realizar o cálculo do Media
        function MediaCalculator(){
            return setMedia((parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4))/4).toFixed(2) 
        }
        
        ''
        // Função responsável por validar se os valores de peso e altura foram preenchidos antes de realizar o cálculo
        function validationMedia(){
            if(nota1, nota2, nota3, nota4 != null){
                MediaCalculator()
                setMessageMedia("Sua Media é igual a: ")
                setTextButton("Calcular Novamente")

                //novo
                setErrorMessage(null)


                return
        }
        setMedia(null)
        setTextButton("Calcular")
        setMessageMedia("PREENCHA ALTURA E PESO PARA CALCULAR")
        verificationMedia()

    }

// Retorno do componente "Form" que inclui o formulário e o componente personalizado "ResultMedia"
 return(
    <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
    {/* faz com que, ao clicar em qqr lugar da tela o teclado feche */}


            <View style={styles.form}>
            <Text style={styles.formLabel}>Nota1</Text>
            <TextInput style={styles.input} onChangeText={setNota1} value={nota1}placeholder="Ex: De 0 a 10" keyboardType="numeric"/>
            <Text style={styles.errorMessage}>{errorMessage}</Text>


            <Text style={styles.formLabel}>Nota2</Text>
            <TextInput style={styles.input} onChangeText={setNota2} value={nota2} placeholder="Ex: De 0 a 10" keyboardType="numeric"/>
            <Text style={styles.errorMessage}>{errorMessage}</Text>


            <Text style={styles.formLabel}>Nota3</Text>
            <TextInput style={styles.input} onChangeText={setNota3} value={nota3} placeholder="Ex: De 0 a 10" keyboardType="numeric"/>
            <Text style={styles.errorMessage}>{errorMessage}</Text>


            <Text style={styles.formLabel}>Nota4</Text>
            <TextInput style={styles.input} onChangeText={setNota4} value={nota4} placeholder="Ex: De 0 a 10" keyboardType="numeric"/>
            <Text style={styles.errorMessage}>{errorMessage}</Text>


            <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationMedia()}}>
            <Text style={styles.textButtonCalculator}> {textButton}</Text>
            </TouchableOpacity>


           </View>
           <ResultMedia messageResultMedia={messageMedia} resultMedia={media}/>
        </Pressable>
    )
}   
