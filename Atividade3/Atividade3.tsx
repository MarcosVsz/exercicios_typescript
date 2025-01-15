import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './StyleAtividade3';

const ValidarSenha = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar, setConfirmar] = useState('');

    const Validar = () => {
        if (senha == '') {
            return <Text style={styles.iguais}></Text>;
        }else if (senha == confirmar) {
            return <Text style={styles.iguais}>Senhas iguais</Text>;
        }else{
            return <Text style={styles.diferentes}>Senhas não conferem</Text>;
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.caixaInput}>
                <Text>Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite alguma coisa..."
                    placeholderTextColor="#ccc"
                    onChangeText={(emailUser) => setEmail(emailUser)}
                />
        
                <Text>Senha</Text>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    placeholder="Digite alguma coisa..."
                    placeholderTextColor="#ccc"
                    onChangeText={(senhaUser) => setSenha(senhaUser)}
                />
                <Text>Confirmar Senha</Text>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    placeholder="Digite alguma coisa..."
                    placeholderTextColor="#ccc"
                    onChangeText={(confirmarUser) => setConfirmar(confirmarUser)}
                />
            </View>
            <View style={styles.mensagemValidacao}>{Validar()}</View>
        </View>
  );
};
export default ValidarSenha;    