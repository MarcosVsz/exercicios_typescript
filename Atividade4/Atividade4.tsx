import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './StyleAtividade4';

const ValidarEmail = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar, setConfirmar] = useState('');

    const Validar = () => {
        if (senha == '') {
            return <Text style={styles.iguais}></Text>;
        }else if (senha == confirmar) {
            return <Text style={styles.iguais}>Muito bem!</Text>;
        }else{
            return <Text style={styles.diferentes}>Os email precisam ser iguais</Text>;
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.caixaInput}>
                <Text>Nome</Text>
                <TextInput
                style={styles.textInput}
                placeholder="Digite alguma coisa..."
                placeholderTextColor="#ccc"
                onChangeText={(emailUser) => setEmail(emailUser)}
                />
        
                <Text>E-mail</Text>
                <TextInput
                style={styles.textInput}
                
                placeholder="Digite alguma coisa..."
                placeholderTextColor="#ccc"
                onChangeText={(senhaUser) => setSenha(senhaUser)}
                />
                <Text>Confirmar E-mail</Text>
                <TextInput
                    style={styles.textInput}
                    
                    placeholder="Digite alguma coisa..."
                    placeholderTextColor="#ccc"
                    onChangeText={(confirmarUser) => setConfirmar(confirmarUser)}
                />
            </View>
            <View style={styles.mensagemValidacao}>{Validar()}</View>
        </View>
  );
};
export default ValidarEmail;    