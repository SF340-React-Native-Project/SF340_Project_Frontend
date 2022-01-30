import React from "react";
import { StyleSheet, Button,Image,ImageBackground, View, SafeAreaView, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Home from "./Home";


const Welcome = ({navigation}) => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground source={require('../image/bg.jpg')} resizeMode="cover" style={styles.imagebg}>
                    <Text style={styles.text}>Inside</Text>

                    <Image
                        style={styles.tinyLogo}
                        source={require('../image/logo.png')}
                    />

                    <Text style={styles.textbut} onPress={() => navigation.navigate('Home')}> HANG OUT!  </Text>
 
                </ImageBackground>
            </View>
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    textbut: {
        fontSize: 40,
        color:'rgb(255,255,255)',
        fontWeight: 'bold',
        letterSpacing: 2,
        width:'75%',
        marginLeft:'12.5%',
        borderRadius:50,
        height:60,
        backgroundColor:'rgb(242,197,4)',
        textAlign:'center',
        marginTop:180,
        marginBottom:100,
    },
    tinyLogo: {
        width:"100%",
        height:200,
        marginTop:100,
    },
    text: {
        fontSize: 70,
        // fontWeight: 'bold',
        // marginLeft: 80,
        textAlign:'center',
        fontFamily: 'Neonderthaw-Regular',
        color:'#ff0072',
    },
});
  

export default Welcome;