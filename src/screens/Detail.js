import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import stylesDetail from '../style/StyleDetail';

export default function Detail() {
    return (
        <View style={stylesDetail.container}>
            <ScrollView style={stylesDetail.content}>
                <View style={stylesDetail.imgContent}>
                    <Image style={stylesDetail.imgContentChild} source={require('../images/wishlist/wishlistphoto01.jpg')}/>
                    <View style={stylesDetail.price}>
                        <Text style={stylesDetail.textPrice}>đ260,000</Text>
                        <View style={stylesDetail.priceChild}>
                            <SimpleLineIcons name="star" size={15} color='#c28e00'/>
                            <SimpleLineIcons name="star" size={15} color='#c28e00'/>
                            <SimpleLineIcons name="star" size={15} color='#c28e00'/>
                            <SimpleLineIcons name="star" size={15} color='#c28e00'/>
                            <SimpleLineIcons name="star" size={15} color='#c28e00'/>
                            <Text style={{fontSize:16,color:'grey',marginLeft:10,}}>(0)</Text>
                        </View>
                    </View>
                    <Text style={stylesDetail.nameShirt}>Prove Them Wrong Graphic Tee</Text>
                </View>
                
                <View style={stylesDetail.select}>
                    <View style={stylesDetail.selectChild}>
                        <TouchableOpacity style={stylesDetail.selectChild1}>
                            <Text style={stylesDetail.titleSelect}>Product information</Text>
                            <AntDesign name="plus" size={15}/>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesDetail.selectChild}>
                        <TouchableOpacity style={stylesDetail.selectChild1}>
                            <Text style={stylesDetail.titleSelect}>Size Guide</Text>
                            <AntDesign name="plus" size={15}/>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesDetail.selectChild}>
                        <TouchableOpacity style={stylesDetail.selectChild2}>
                            <Text style={stylesDetail.titleSelect}>Review (0)  </Text>
                            <SimpleLineIcons name="star" size={15} color='#c28e00'/>
                            <SimpleLineIcons name="star" size={15} color='#c28e00'/>
                            <SimpleLineIcons name="star" size={15} color='#c28e00'/>
                            <SimpleLineIcons name="star" size={15} color='#c28e00'/>
                            <SimpleLineIcons name="star" size={15} color='#c28e00'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
                <View style={stylesDetail.footer}>
                    <TouchableOpacity style={stylesDetail.colorFooter}>
                        <FontAwesome name="circle-thin" size={40} color='black'/>
                        <Text style={stylesDetail.colorCartFooter}>WHITE/BLUE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesDetail.cartFooter}>
                        <Text style={stylesDetail.textCartFooter}>ADD TO CARD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesDetail.wishlistFooter}>
                        <Ionicons name="heart-outline" size={40}/>
                    </TouchableOpacity>
                </View>
        </View>
    )
}
