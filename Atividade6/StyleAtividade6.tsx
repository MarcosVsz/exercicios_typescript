import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 80,
    },
    button: {
      padding: 10,
      backgroundColor: '#007bff',
      borderRadius: 5,
      marginHorizontal: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    countText: {
      fontSize: 24,
      marginHorizontal: 20,
    },
  });

export default styles;