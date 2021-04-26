import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, FlatList, Image, SafeAreaView } from 'react-native'
import stylesHome from '../style/StyleHome';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DataHome from '../data/DataHome';


export default function Home({ navigation }) {
    const renderItem = ({ item }) => (
        <View style={{ width:'100%' }}>
          <TouchableOpacity style={{ marginBottom:15, }} onPress={() => navigation.navigate('ProductList')}>
          <Image style={{width:'100%', height:300,}} source={item.photo} />
        </TouchableOpacity>
        </View>
      );
    return (
        <View  style={stylesHome.container}>
            
            <View  style={stylesHome.header}>
                
                <View style={stylesHome.titleHeader}>
                    <TouchableOpacity>
                        <Ionicons name="ios-menu-outline" size={30}/>
                    </TouchableOpacity>
                    <View style={stylesHome.titleHeaderChild}>
                    <Text style={stylesHome.textTitle}>FOREVER 21</Text>
                    </View>
                </View>

                <View style={stylesHome.searchHeader}>
                    
                    <View style={stylesHome.searchHeaderChild}>
                        <TouchableOpacity style={stylesHome.searchHeaderChild1}>
                            <Ionicons name="search" size={25}/>
                            <Text style={stylesHome.textSearch}>Search</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesHome.voiceBarcodeHeader}>
                        <TouchableOpacity style={stylesHome.voiceHeader}>
                            <Ionicons name="mic-outline" size={30} color='grey'/>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesHome.barcodeHeader}>
                            <MaterialCommunityIcons name="barcode-scan" size={30} color='grey'/>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            
            </View>
            
            <View style={stylesHome.content}>
               
                <TouchableOpacity style={stylesHome.titleContent}>
                    <Text style={stylesHome.textTitleContent}>All Special Offers(12)</Text>
                </TouchableOpacity>
           
                <FlatList
                    data={DataHome}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
                
            </View>
        
        </View>
    )
}
