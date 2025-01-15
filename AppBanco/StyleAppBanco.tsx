import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FaFaFa',
        width:'100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      header:{
        backgroundColor:'#4A44FF',
        width:'100%',
        height: '30%',
        borderBottomLeftRadius:70,
        borderBottomRightRadius:70,
        display: 'flex',
        paddingVertical: '10%',
        paddingHorizontal: '10%'
      },
      modaloptions:{
        backgroundColor: '#fff',
        width: '80%',
        height: '40%',
        position: 'absolute', 
        display: 'flex',
        alignItems: 'center',
        top:'25%',
        borderRadius: 15,
        flexWrap: 'wrap',
      },
      headHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '30%'
      },
      headBody:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50%'
      },
      headBodyValue:{
        width: '60%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between'
      },
    
      headBodyButton:{
        width: '40%',
        justifyContent:'center',
        alignItems:'flex-end',
      },
    
      textValue:{
        fontSize: 35,
        fontWeight: '500',
        color:'#fff'
      },
    
      textBalance:{
        fontSize: 15,
        fontWeight: '400',
        color:'#fff'
      },
      buttonTopMe:{
        width: '90%',
        height: 50,
        backgroundColor: '#00CCFF',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
      },
      textButtonTopMe: {
        fontSize: 15,
        fontWeight: '400',
        color:'#fff'
      },
      body:{
        width: '80%',
        marginTop:310,
       
    
      },
    
      textUpcoming:{
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 20
      },
    
      cardView:{
        flexDirection: 'row'
        
      }
    
});

export default styles;