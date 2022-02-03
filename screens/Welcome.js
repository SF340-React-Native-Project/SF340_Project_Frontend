import React from "react";
import { StyleSheet, Button,Image,ImageBackground, View, SafeAreaView, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


import Home from "./Home";
import { color } from "react-native-reanimated";


const Welcome = ({navigation}) => {
    return(
        <View style={styles.container}>

            <Image
                style={styles.tinyLogo}
                source={require('../image/newbg.png')}
            />
            <View style={{flexDirection: "row"}}>
                {/* <Image 
                        style={styles.holiday}
                        source={require('../holiday.png')}
                    /> */}
                <Image 
                    style={styles.label}
                    source={require('../image/label.png')}
                />
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.textbut} onPress={() => navigation.navigate('Home')}> {'HANG \nOUT!!'}  </Text>
                <Image 
                    style={styles.beerimg}
                    source={require('../image/beer2.png')}
                />
            </View>

        </View>

    )
}

const styles = StyleSheet.create({

    tinyLogo : {
        
        width:"90%",
        height:200,
        marginTop:20,
    },

    imagebg:{
        width: "100%",
        height: 'auto',
        justifyContent: 'center',
        flex: 1,
        marginRight:1000
    },

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(15,35,45)',
    },

    holiday:{
        width:200,
        height:200,
        transform: [
        { rotate: "-5deg" },
        {translateX:-35},
        {translateY:200},
        ]

    },
    label:{
        width:125,
        height:125,
        transform: [
        { rotate: "5deg" },
        { translateX:95 },
        { translateY:72 },
        ],
        zIndex:-1,
    },

    textbut:{
            fontFamily: 'sans-serif-ligh',
            fontSize:40,
            fontWeight: 'bold',
            letterSpacing: 2,
            borderRadius:25,
            height:'auto',
            color:'rgb(242,197,4)',
            borderWidth:5,
            borderColor:"rgb(214,28,255)",
            shadowColor: "rgb(214,28,255)",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 5,
            shadowRadius: 16.00,
            elevation: 50,
            transform: 
            [
                {translateX:15},
                {translateY:-50},
                {rotate: "-10deg"}
            ],
            textAlign:'center',
            justifyContent: 'center',
            marginBottom:140,
    },

    beerimg:{
        width:200,
        height:200,
        marginTop:50,
        transform: [
        {translateY:-20},
        {translateX:35},
        { rotate: "10deg" },
        ],
        zIndex:-1,
    }



  });
  

export default Welcome;

{/* <ImageBackground source={require('../bg.jpg')} resizeMode="cover" style={styles.imagebg}>
                <Text style={styles.text}>Inside</Text>

                <Image
                    style={styles.tinyLogo}
                    source={require('../logo.png')}
                />

                <Text style={styles.textbut} onPress={() => navigation.navigate('Home')}> HANG OUT!  </Text>
 
</ImageBackground> */}