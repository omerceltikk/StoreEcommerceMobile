import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import styles from "./OrdersListItem.Style"
import {Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import OrderItem from '../OrderItem';
const OrdersListItem = ({ data, status }) => {
const [currData,setCurrData] = useState([])
useEffect(() => {
  setCurrData(data);
},[])
  return (
    <View>
    <View style={styles.container}>
      <View style={styles.areaTag}>
        <Text style={styles.textStyle} variant="titleSmall">
          Order Id: {data.item.id}
        </Text>
      </View>
      <View style={styles.areaTag2}>
        <Text style={styles.textStyle} variant="titleSmall">
        Adress:   {data.item.orderAddress ? data.item.orderAddress : "null"}
        </Text>
      </View>
    </View>
    {/* <FlatList scrollEnabled={false} numColumns={1} renderItem={(item) => <OrderItem data={item}
              />} data={currData?.item?.products} 
              keyExtractor={item => item.productId} 
              /> */}
    </View>
  )
}

export default OrdersListItem