import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import stylesMe from '../style/StyleMe'
import Ionicons from "react-native-vector-icons/Ionicons";
export default function Me() {
    return (
        <View style={stylesMe.container}>
            <View  style={stylesMe.header}>
                <View style={{flex:1, justifyContent:'space-around', alignItems:'center'}}>
                    <Text style={stylesMe.titleHeader}>MY ACCOUNT</Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name="settings" size={30}/>
                </TouchableOpacity>  
            </View>

            <ScrollView style={stylesMe.content}>
                
                <Text style={stylesMe.titleContent}>Hello, Trung Hieu</Text>
                <View style={{backgroundColor:'white',paddingLeft:15,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>MY ORDERS</Text>
                            <Text style={stylesMe.textSelect}>Order Status, History and Tracking</Text></View>
                        <Ionicons name="chevron-forward-outline" size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',paddingLeft:15,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>PROFILE</Text>
                            <Text style={stylesMe.textSelect}>Manage user information</Text></View>
                        <Ionicons name="chevron-forward-outline" size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',paddingLeft:15,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>PASSWORD</Text>
                            <Text style={stylesMe.textSelect}>Manage password</Text></View>
                        <Ionicons name="chevron-forward-outline" size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',paddingLeft:15,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>MANAGE PREFERNCE</Text>
                            <Text style={stylesMe.textSelect}>Marketing preference for email and push notification</Text></View>
                        <Ionicons name="chevron-forward-outline" size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',paddingLeft:15,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>ADDRESS BOOK</Text>
                            <Text style={stylesMe.textSelect}>Manage payment type methods</Text></View>
                        <Ionicons name="chevron-forward-outline" size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',paddingLeft:15,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>WALLET</Text>
                            <Text style={stylesMe.textSelect}>Manage payment type methods</Text></View>
                        <Ionicons name="chevron-forward-outline" size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',paddingLeft:15,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>FOREVER 21 CREDIT CARD</Text>
                            <Text style={stylesMe.textSelect}>Manage F21 Credit Card</Text></View>
                        <Ionicons name="chevron-forward-outline" size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',paddingLeft:15,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>FOREVER 21 VISA CREDIT CARD</Text>
                            <Text style={stylesMe.textSelect}>Manage F21 Visa Credit Card</Text></View>
                        <Ionicons name="chevron-forward-outline" size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',paddingLeft:15,marginVertical:10,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>NOTIFICATIONS</Text>
                            <Text style={stylesMe.textSelect}>View events and promotions</Text></View>
                        <Ionicons name="chevron-forward-outline" size={30}/>
                    </TouchableOpacity>
                </View>
                
                <View style={{backgroundColor:'white',paddingLeft:15,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>HELP & SUPPORT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',paddingLeft:15,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>SHIPPING INFO</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',paddingLeft:15,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>FIND A STORE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',paddingLeft:15,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>GET THE FOREVER 21 CREDIT CARD</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',paddingLeft:15,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>CAREES AT FOREVER 21</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',paddingLeft:15,}}>
                    <TouchableOpacity style={stylesMe.selectContentChild}>
                        <View style={stylesMe.selectChild}>
                            <Text style={stylesMe.titleSelect}>RATE OUR APP</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                    <TouchableOpacity style={stylesMe.signOut}>
                            <Text style={stylesMe.textSignOut}>SIGN OUT</Text>
                    </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
