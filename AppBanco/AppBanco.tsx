import React from "react";
import {View, Text, Pressable, Alert, ScrollView} from "react-native";
import styles from "./StyleAppBanco";
import IconCard from "@/components/IconCard/IconCard";
import { CardBottom  } from "@/components/CardBottom/CardBottom";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () =>{
    function Mensagem(){
        alert('Vai');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headHeader}>
                    <Icons onPress={Mensagem} name="menu" size={20} color='#fff'/>
                    <Icons onPress={Mensagem} name="bell-outline" size={20} color='#fff'/>
                </View>
                <View style={styles.headBody}>
                    <View style={styles.headBodyValue}>
                        <Text style={styles.textValue}>2800,00 $</Text>
                        <Text style={styles.textBalance}>Available Balance</Text>
                    </View>
                    <View style={styles.headBodyButton}>
                        <Pressable
                            style={styles.buttonTopMe}
                        >
                            <Text style={styles.textButtonTopMe}>TOP ME</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={styles.modaloptions}>
                <IconCard
                    icone="send"
                    corIcone="#4A44FF"
                    texto="Send"
                    corBackground="#F3F3FF"
                    onpress={Mensagem}
                />
                <IconCard
                    icone="credit-card-settings-outline"
                    corIcone="#00BBF4"
                    texto="Pay"
                    corBackground="#EFFFFF"
                    onpress={Mensagem}
                />
                <IconCard
                    icone="message-arrow-left"
                    corIcone="#FF814A"
                    texto="Request"
                    corBackground="#FFF1EB"
                    onpress={Mensagem}
                />
                <IconCard
                    icone="newspaper-variant-outline"
                    corIcone="#FF4085"
                    texto="Invoice"
                    corBackground="#FFEFF5"
                    onpress={Mensagem}
                />
                <IconCard
                    icone="cards-heart"
                    corIcone="#C871F7"
                    texto="Charity"
                    corBackground="#F9F0FE"
                    onpress={Mensagem}
                />
                <IconCard
                    icone="piggy-bank"
                    corIcone="#825EED"
                    texto="Loan"
                    corBackground="#F4F1FD"
                    onpress={Mensagem}
                />
            </View>
            <View style={styles.body}>
                <Text style={styles.textUpcoming}>Upcoming</Text>
                
                <View style={styles.cardView}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CardBottom
                        text='Design logo for ASA'
                        value={225}
                        bgColor='#4F49FF'
                        />
                        <CardBottom
                        text="Next meeting"
                        value={114}
                        bgColor='#009CFF'
                        />
                        <CardBottom
                        text="Norman send your money"
                        value={190}
                        bgColor='#FF684C'
                        />

                        <CardBottom
                        value={190}
                        bgColor='#A70EEC'
                        />

                        <CardBottom
                        value={190}
                        bgColor='#D95D69'
                        />

                    </ScrollView>
                </View>
	</View>




        </View>
    )
}
export default Home;