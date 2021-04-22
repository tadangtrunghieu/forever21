import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView,} from 'react-native'
import stylesCart from '../style/StyleCart';
import Ionicons from "react-native-vector-icons/Ionicons";
import DataCart from '../data/DataCart';

export default function Wishlist() {
    
    const renderItem = ({ item }) => (
        
            <View style={stylesCart.imgContent}>       
                    <Image style={stylesCart.imgContentChildStyle} source={item.photo} /> 
                <View style={stylesCart.infoImg}>
                    <View style={stylesCart.rowPrice}>
                        <View style={stylesCart.rowPriceChild}>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>{item.price}</Text>
                            <Text style={{fontSize:15,color:'gray'}}>{item.name}</Text>
                        </View>
                        <TouchableOpacity>
                            <Ionicons name="ellipsis-vertical" size={30}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View>       
                        <View style={stylesCart.colorSizeInfo}>
                            <View style={{flex:1,borderRightWidth:1, borderRightColor:'#d3d3d3', marginRight:10}}>
                            <TouchableOpacity style={stylesCart.colorSizeInfoChild}>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>WHITE</Text>
                                <Ionicons name="chevron-down" size={20}/>
                            </TouchableOpacity></View>
                            
                            <TouchableOpacity style={stylesCart.colorSizeInfoChild}>
                                <Text style={{fontSize:15,fontWeight:'bold'}}>S</Text>
                                <Ionicons name="chevron-down" size={20}/>
                            </TouchableOpacity>
                        </View>
                        
                        <TouchableOpacity style={stylesCart.quanityInfoChild}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>QTY</Text>
                            <Ionicons name="chevron-down" size={20}/>
                        </TouchableOpacity>
                    </View> 
                </View>
            </View>
            
      );
    return (
        <View  style={stylesCart.container}>
            <View  style={stylesCart.header}>
                <View style={stylesCart.titleHeader}>
                    <TouchableOpacity>
                        <Ionicons name="arrow-back" size={30}/>
                    </TouchableOpacity>
                    <Text style={stylesCart.textTitle}>CART</Text>
                </View>
            </View>
            
            <View style={stylesCart.nodeHeader}>
                <Text style={stylesCart.textNodeHeader}>1 Item(s) : Total (excluding delivery) đ207,700</Text>
            </View>
            
            <View style={stylesCart.content}>
                <FlatList
                data={DataCart}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
              
            
                <View style={stylesCart.order}>
                    <Text style={stylesCart.titleOrder}>Order Summary</Text>
                    <View style={stylesCart.orderChild}>
                        <Text style={stylesCart.textSubtotalDiscount}>Subtotal</Text>
                        <Text style={stylesCart.textSubtotalDiscount}>đ207,700</Text>
                    </View>
                    <View style={stylesCart.orderChild}>
                        <Text style={stylesCart.textSubtotalDiscount}>Discount</Text>
                        <Text style={stylesCart.textSubtotalDiscount}>đ0</Text>
                    </View>
                    <View style={stylesCart.orderChild}>
                        <Text style={stylesCart.textTotal}>TOTAL</Text>
                        <Text style={stylesCart.textTotal}>đ207,700</Text>
                    </View>
                    <TouchableOpacity style={stylesCart.orderChild1}>
                        <Text style={stylesCart.textPromotionCode}>PROMOTION CODE</Text>
                        <Ionicons name="chevron-forward-outline" size={30} style={{paddingVertical:15,}}/>
                    </TouchableOpacity>
                </View>
            
                <View style={stylesCart.node}>
                    <Text style={stylesCart.textNodeChild}>SAVE FOR LATE (0)</Text>
                </View>
                        
                <View style={stylesCart.node1}>
                    <Text style={stylesCart.textNodeChild1}>There are no items in save for late</Text>
                </View>
            
            
            <View style={stylesCart.footer}>
                <View>
                <TouchableOpacity style={stylesCart.signOut}>
                    <Text style={stylesCart.textSignOut}>CHECKOUT</Text>
                </TouchableOpacity></View>
            </View>
           </View>      
        </View>
    )
}
