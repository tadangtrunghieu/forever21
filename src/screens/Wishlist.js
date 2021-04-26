import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image,} from 'react-native'
import stylesWishlist from '../style/StyleWishlist';
import Ionicons from "react-native-vector-icons/Ionicons";
import DataWishlist from '../data/DataWishlist';

export default function Wishlist() {
    const renderItem = ({ item }) => (
            <View style={stylesWishlist.imgContent}>
                    {/* <TouchableOpacity>         */}
                    <Image style={stylesWishlist.imgContentChildStyle} source={item.photo} />
                    {/* </TouchableOpacity> */}
                <View style={stylesWishlist.infoImg}>
                    <View style={stylesWishlist.rowPrice}>
                        <View style={stylesWishlist.rowPriceChild}>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>{item.price}</Text>
                            <Text style={{fontSize:15,color:'gray'}}>{item.name}</Text>
                        </View>
                        <TouchableOpacity>
                            <Ionicons name="ellipsis-vertical" size={30}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View>
                        
                        <View style={stylesWishlist.colorSizeInfo}>
                            <View style={{flex:1,borderRightWidth:1, borderRightColor:'#d3d3d3', marginRight:10}}>
                            <TouchableOpacity style={stylesWishlist.colorSizeInfoChild}>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>WHITE</Text>
                                <Ionicons name="chevron-down" size={20}/>
                            </TouchableOpacity></View>
                            
                            <TouchableOpacity style={stylesWishlist.colorSizeInfoChild}>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>S</Text>
                                <Ionicons name="chevron-down" size={20}/>
                            </TouchableOpacity>
                        </View>
                        
                        <TouchableOpacity style={stylesWishlist.quanityInfoChild}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>QTY</Text>
                            <Ionicons name="chevron-down" size={20}/>
                        </TouchableOpacity>
                    
                    </View>
                
                </View>
            
            </View>
      );
    return (
        <View  style={stylesWishlist.container}>
            <View  style={stylesWishlist.header}>
                <Text style={stylesWishlist.titleHeader}>WISHLIST</Text>
            </View>
            
            <View style={stylesWishlist.nodeHeader}>
                <Text style={stylesWishlist.textNodeHeader}>1 Item(s)</Text>
            </View>
            
            <View style={stylesWishlist.content}>
                <FlatList
                data={DataWishlist}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}
