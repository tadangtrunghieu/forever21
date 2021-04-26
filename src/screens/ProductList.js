import React, {useEffect, useState} from 'react'
import { View, Text, Button, TouchableOpacity, FlatList, Image } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from 'axios'
import {getProduct} from '../services/Api'
import { getImage } from '../services/getImage';

export default function ProductList({ navigation }) {

    const[product, setProduct] = useState()
    useEffect(() => {
     const getApiProduct = async()=>{
      const result = await getProduct()
      console.log('result', result)
      setProduct(result.data.data)
     }
    getApiProduct()
    }, [])
    
    const renderItem = ({ item }) => (
    <View style={{ width: "45%" }}>
      <Image style={{height: 300,width: "auto"}} source={{uri:getImage(item?.images?.[0])}} />
      <View style={{flexDirection: "row",justifyContent: "space-between",marginTop: 10}}>
        <Text>{item.price}</Text>
        <Ionicons name="heart-outline" size={30} color='black' />
      </View>
      <Text>{item.name}</Text>
    </View>
  );
  return (
    <View style={{backgroundColor:'white'}}>
      <View style={{flexDirection: "row",borderBottomWidth: 1,borderBottomColor: "grey"}}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>SORT</Text>
          <Ionicons name="chevron-down-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ textAlign: "center" }}>REFINE</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ textAlign: "center", marginTop: 15, marginBottom: 20 }}>
        405 styles
      </Text>
      <FlatList
        data={product}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item._id?.toString()}
        columnWrapperStyle={{
          justifyContent: "space-around",
          marginBottom: 10,
          flex: 1
        }}
        style={{ marginBottom: 100 }}
      />
    </View>
  );
}