import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [nameField, setNameField] = useState('');

  const handleSendName = () => {
    setName(nameField);
    setNameField('');
  }

  const handleClear = () => {
    setName('');
  }
  return (
    <View style={styles.container}>
    {name == '' &&
        <View style={styles.layout1}>
            <Text style={styles.texto1}>Qual o seu nome?</Text>
            <TextInput
            style={styles.input}
            onChangeText={(texto) => setNameField(texto)}/>

            <Button
            title="Enviar"
            color='#FFA051'
            onPress={handleSendName}
            />
        </View>
      }
    {name != '' &&
      <View style={styles.layout2}>
        <Text style={styles.texto2}>Olá {name}</Text>
        <Text style={styles.texto1}>Tudo bem?</Text>
        <Button
        title={`Não sou ${name}`}
        color='#FFA051'
        onPress={handleClear}
        />
      </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#FFF'
    },
    
    layout1: {
      height: 450,
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 10,
      backgroundColor: '#131047',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      padding: 10
    },
    layout2: {
        height: 200,
        width: '100%',
        flexDirection: 'column',
        marginTop: 10,
        backgroundColor: '#131047',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 10
      },
    
        texto1:{
        color: '#fff',
        fontSize: 20,
        margin: 10
      },
    
        texto2:{
        color: '#fff',
        fontSize: 30,
      },
      input: {
        fontSize: 15,
        padding: 10,
        width: 300,
        borderRadius: 15,
        backgroundColor: '#f1f1f1',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginBottom: 20,
      },
    });
export default App;    