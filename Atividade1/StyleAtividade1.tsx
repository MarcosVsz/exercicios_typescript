import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
    },
    textos:{
        margin: 10,
    },
    textosAlterados: {
        fontSize: 30,
        margin: 10,
        color: '#000000'
    },
    campos:{
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textosCampos:{
        color: 'white'
    },
});

export default styles;