import React from 'react'
import { View, Text } from 'react-native'

const DataWishlist = Array(1)
  .fill("")
  .map((e, i) => ({
    id: 1,
    photo: require ('../images/wishlist/wishlistphoto01.jpg'),
    name: "Organic Basic Tank Top",
    price: "đ207,700",
  }));

export default DataWishlist;