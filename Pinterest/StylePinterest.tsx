import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
    },
    component:{
        width: 380, 
        height: 550, 
        borderWidth: 1, 
        borderRadius: 10,
        alignItems:'center',
        elevation: 30, 
        backgroundColor:'white',
        shadowColor:'#333333', 
        shadowOffset:{width: 6, height: 6}, 
        shadowOpacity:0.6, 
        shadowRadius:4
    }
});

export default styles;