import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import stylesLogin from '../style/StyleLogin';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Login () { 
        return (
            <ScrollView style={stylesLogin.container}>
                <View style={stylesLogin.header}>
                    <Text style={stylesLogin.titleHeader}>SIGN IN</Text>
                    <TouchableOpacity>
                        <Ionicons name="close" size={40}></Ionicons>
                    </TouchableOpacity>
                </View>
            
                <View style={stylesLogin.content}>
                    <View style={stylesLogin.info}>
                        <View style={stylesLogin.infoChild}>
                            <Text style={{fontWeight:'bold', fontSize:15, color:'gray'}}>EMAIL ADDRESS</Text>
                            <TextInput style={{borderWidth:1, borderColor:'gray'}}></TextInput>
                        </View>
                        <View style={stylesLogin.infoChild}>
                            <Text style={{fontWeight:'bold', fontSize:15, color:'gray'}}>
                                
                            </Text>
                            <TextInput style={{borderWidth:1, borderColor:'gray'}}></TextInput>
                        </View>
                        <View style={stylesLogin.buttonSignIn}>
                        <TouchableOpacity style={stylesLogin.buttonSignInChild}>
                            <Text style={stylesLogin.textSignIn}>SIGN IN</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={stylesLogin.node}>
                        <TouchableOpacity>
                            <Text style={stylesLogin.textNode}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesLogin.node1}>
                        <TouchableOpacity>
                            <Text style={stylesLogin.textNode1}>Don't have an Account?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            
                <View style={stylesLogin.footer}>
                        <Text style={{fontWeight:'bold', fontSize:16, color:'gray', marginBottom:10,}}>FACE ID SETTING</Text> 
                        <Text style={{fontSize:15, color:'gray'}} >To turn on/off, go to <Text style={{color:'black'}}>[My Account] > [Setting] > [Face ID] > On/Off</Text></Text>      
                </View>
            </ScrollView>
        )
}

