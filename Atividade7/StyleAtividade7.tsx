import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      padding: 30,
      backgroundColor: '#fff',
      marginTop: 30,
    },
    display: {
      fontSize: 32,
      marginBottom: 20,
      backgroundColor: '#e0e0e0',
      width: '100%',
      textAlign: 'right',
      paddingRight: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 10,
    },
    button: {
      width: 70,
      height: 70,
      backgroundColor: '#f0f0f0',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 35,
    },
    buttonText: {
      fontSize: 24,
    },
  });