import React from 'react'
import { Image, View } from 'react-native'
import styles from "./OrderItem.Style"
import {  Text} from 'react-native-paper';
const OrderItem = ({ data }) => {


  return (
    <View style={styles.container}>
      <View style={styles.areaTag}>
        {/* <Image style={styles.imageStyle} source={{ uri: data.item.imageUrl }} /> */}
      </View>
      <View style={styles.areaTag2}>
        <Text style={styles.textStyle} variant="titleSmall">
          {data.item.productName}
        </Text>
      </View>
      <View style={styles.areaTag}>
        <Text style={styles.textStyle}>
          {data.item.productPrice}$
        </Text>
      </View>
    </View>
  )
}

export default OrderItem