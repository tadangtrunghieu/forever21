import React, {useState} from 'react'
import { View, Text, ScrollView, TouchableOpacity, TextInput,} from 'react-native'
import stylesJoin from '../style/StyleJoin'
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from '@react-native-community/checkbox';

export default function Join() {
    const [femaleCheckBox, setFemalCheckBox] = useState(false)
    const [maleCheckBox, setMaleCheckBox] = useState(false)
    return (
        <ScrollView style={stylesJoin.container}>
            <View style={stylesJoin.header}>
                <Text style={stylesJoin.titleHeader}>JOIN FOREVER 21</Text>
                <TouchableOpacity>
                    <Ionicons name="close" size={30}/>
                </TouchableOpacity>
            </View>
            
            <View style={stylesJoin.content}>
                <View style={stylesJoin.info}>
                    <View style={stylesJoin.infoChild}>
                        <Text style={{fontWeight:'bold', fontSize:15, color:'gray'}}>FIRST NAME</Text>
                        <TextInput style={{borderWidth:1, borderColor:'gray'}}></TextInput>
                    </View>
                    
                    <View style={stylesJoin.infoChild}>
                        <Text style={{fontWeight:'bold', fontSize:15, color:'gray'}}>LAST NAME</Text>
                        <TextInput style={{borderWidth:1, borderColor:'gray'}}></TextInput>
                    </View>
                    
                    <View style={stylesJoin.infoChild}>
                        <Text style={{fontWeight:'bold', fontSize:15, color:'gray'}}>DATE OF BIRTH (OPTIONAL)</Text>
                        <TextInput style={{borderWidth:1, borderColor:'gray'}}></TextInput>
                    </View>
                    
                    <View style={stylesJoin.infoChild}>
                        <Text style={{fontWeight:'bold', fontSize:15, color:'gray'}}>GENDER (OPTIONAL)</Text>
                        
                        <View  style={stylesJoin.gender}>
                            <View style={{flexDirection:'row',marginHorizontal:10,}}>
                                <CheckBox
                                disabled={false}
                                value={femaleCheckBox}
                                onValueChange={(newValue) => setFemalCheckBox(newValue)}
                                />
                                <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:17,}}>Femal</Text>
                            </View>
                            
                            <View style={{flexDirection:'row',marginHorizontal:90,}}>
                                <CheckBox
                                disabled={false}
                                value={maleCheckBox}
                                onValueChange={(newValue) => setMaleCheckBox(newValue)}
                                />
                                <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:17,}}>Male</Text>
                            </View>
                        </View>
                    </View>

                    <View style={stylesJoin.infoChild}>
                        <Text style={{fontWeight:'bold', fontSize:15, color:'gray'}}>MOBILE (OPTIONAL)</Text>
                        <TextInput style={{borderWidth:1, borderColor:'gray'}}></TextInput>
                    </View>

                    <View style={stylesJoin.infoChild}>
                        <Text style={{fontWeight:'bold', fontSize:15, color:'gray'}}>EMAIL ADDRESS</Text>
                        <TextInput style={{borderWidth:1, borderColor:'gray'}}></TextInput>
                    </View>

                    <View style={stylesJoin.infoChild}>
                        <Text style={{fontWeight:'bold', fontSize:15, color:'gray'}}>CONFIRM EMAIL ADDRESS</Text>
                        <TextInput style={{borderWidth:1, borderColor:'gray'}}></TextInput>
                    </View>

                    <View style={stylesJoin.infoChild}>
                        <Text style={{fontWeight:'bold', fontSize:15, color:'gray'}}>PASSWORD</Text>
                        <TextInput style={{borderWidth:1, borderColor:'gray'}}></TextInput>
                    </View>

                    <View style={stylesJoin.infoChild}>
                        <Text style={{fontWeight:'bold', fontSize:15, color:'gray'}}>CONFIRM PASSWORD</Text>
                        <TextInput style={{borderWidth:1, borderColor:'gray'}}></TextInput>
                    </View>
                </View>

                <View style={stylesJoin.optional}>
                    <Text style={stylesJoin.titleOptional}>OPTIONAL</Text>
                    <View style={stylesJoin.infoChild}>
                        <Text style={{fontWeight:'bold', fontSize:15, color:'gray'}}>PREFERRED EMAIL LANGUAGE</Text>
                        <View  style={stylesJoin.gender}>
                            <View style={{flexDirection:'row',marginHorizontal:10,}}>
                                <CheckBox
                                disabled={false}
                                value={femaleCheckBox}
                                onValueChange={(newValue) => setFemalCheckBox(newValue)}
                                />
                                <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:17,}}>English</Text>
                            </View>
                                
                            <View style={{flexDirection:'row',marginHorizontal:90,}}>
                                <CheckBox
                                disabled={false}
                                value={maleCheckBox}
                                onValueChange={(newValue) => setMaleCheckBox(newValue)}
                                />
                                <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:17,}}>Spanish</Text>
                            </View>
                        </View>
                    </View>
                    <View style={stylesJoin.infoChild}>
                        <Text style={{fontWeight:'bold', fontSize:15, color:'gray'}}>MARKETING EMAIL PREFERENCE</Text>
                        <View style={{flexDirection:'row',marginHorizontal:10,}}>
                            <CheckBox
                            disabled={false}
                            value={femaleCheckBox}
                            onValueChange={(newValue) => setFemalCheckBox(newValue)}
                            />
                            <Text style={{alignSelf:'center', fontSize:17,}}>please sign me up to the latest fashion news & exclusive offers</Text>
                        </View>
                    </View>
                </View>           

                <TouchableOpacity style={stylesJoin.createAccount}>
                    <Text style={stylesJoin.textCreateAccount}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
            </View>
        
        </ScrollView>
    )
}
