import { View, Text, TouchableOpacity } from "react-native";
import styles from "./StyleAtividade1";
import { useState } from "react";

const Atividade1 = () =>{
    const[Nome, setNome] = useState(''); 
    const[Time, setTime] = useState('');
    return(
        <View style={styles.container}>
            <View style={styles.textos}>
                {Nome && (
                    <Text style={styles.textosAlterados}>Nome: {Nome}</Text>
                )}
                {Time && (
                    <Text style={styles.textosAlterados}>Time: {Time}</Text>
                )}
            </View>
            <View>
                {Nome !== 'Carlos' && (
                    <TouchableOpacity style={[styles.campos, {backgroundColor: 'orange'}]} onPress={() => setNome('Carlos')}>
                        <Text style ={styles.textosCampos}>Carlos</Text>
                    </TouchableOpacity>
                )}
                {Nome !== 'Paulo' && (
                    <TouchableOpacity style={[styles.campos, {backgroundColor: 'blue'}]} onPress={() => setNome('Paulo')}>
                        <Text style ={styles.textosCampos}>Paulo</Text>
                    </TouchableOpacity>
                )}
                {Time !== 'Vasco' && (
                    <TouchableOpacity style={[styles.campos, {backgroundColor: 'black'}]} onPress={() => setTime('Vasco')}>
                        <Text style ={styles.textosCampos}>Vasco</Text>
                    </TouchableOpacity>
                )}
                {Time !== 'Flamengo' && (
                    <TouchableOpacity style={[styles.campos, {backgroundColor: 'red'}]} onPress={() => setTime('Flamengo')}>
                        <Text style ={styles.textosCampos}>Flamengo</Text>
                    </TouchableOpacity>
                )}
            </View>
            
        </View>
    );
}

export default Atividade1;