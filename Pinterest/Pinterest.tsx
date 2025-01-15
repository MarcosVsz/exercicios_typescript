import { View, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, Text} from "react-native";
import styles from "./StylePinterest";

const Atividade1 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'default'} />
            <View style={styles.component}>
                <Image source={require('@/assets/images/pinterest.png')} style={{width: 50, height: 50, top: 30}}/>
                <View style={{top: 40}}>
                    <Text style={{fontWeight: '700', fontSize: 32}}>Log in to see more</Text>
                </View>
                <View style={{top: 60, alignItems: 'center'}}>
                    <TextInput 
                        style={{width: 300,height: 40,  borderWidth:1,borderRadius: 3, paddingLeft: 10}}   
                        placeholder="Email or phone number" 
                        placeholderTextColor="#202020"
                    />
                    <View style={{height: 10}}></View>
                    <TextInput 
                        style={{width: 300,height: 40,  borderWidth:1,borderRadius: 3, paddingLeft: 10}} 
                        placeholder="Password" 
                        placeholderTextColor="#202020"
                    />
                    <View style={{height: 10}}></View>
                    <TouchableOpacity style={{width: 300, height: 40, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center',borderRadius: 5}}>
                        <Text style={{color: 'white', fontWeight: '800'}}>Log in</Text>
                    </TouchableOpacity> 
                    <Text style={{margin: 10}}>Or</Text>
                    <TouchableOpacity style={{width: 300, height: 40, backgroundColor: '#2F2CE6',  justifyContent: 'center',alignItems: 'center',flexDirection: 'row',borderRadius: 5}}>
                        <Image source={require('@/assets/images/facebookIcon.png')} style={{left: -42}}/>
                        <Text style={{color: 'white', fontWeight: '700'}}>Continue with Facebook</Text>
                    </TouchableOpacity>
                    <View style={{height: 10}}></View>
                    <TouchableOpacity style={{width: 300, height: 40, backgroundColor: '#1798E8', justifyContent: 'center',alignItems: 'center',flexDirection: 'row',borderRadius: 5}}>
                        <Image source={require('@/assets/images/google.png')} style={{left: -50}}/>
                        <Text style={{color: 'white', fontWeight: '700'}}>Continue with Google</Text>
                    </TouchableOpacity>
                    <View style={{height: 10}}></View>
                    <View style={{margin: 10}}> 
                        <View style={{alignItems: 'center'}}>
                            <Text>Forgot you password?</Text>
                            <Text>Are you a business? Get started here</Text>
                        </View>
                        <View style={{alignItems: 'center', margin: 10}}>
                            <View style={{backgroundColor: 'gray', width: 200, height: 1}}></View>
                        </View>
                        <TouchableOpacity style={{alignItems: 'center', }}>
                            <Text>Not on Pinterest?{' '} <Text style={{textDecorationLine: 'underline'}}>Sign Up</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Atividade1;