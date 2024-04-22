import React from 'react'
import { Image, View } from 'react-native'
import styles from "./BasketFavListItem.Style"
import { Avatar, Text, IconButton, MD3Colors, Icon } from 'react-native-paper';
import { FetchDeleteMethod } from '../../Redux/FetchServices';
import { useDispatch } from 'react-redux';
import { deletefavMethod } from '../../Redux/Slices/favoritesSlice';
import { fetchBasketData } from '../../Redux/Slices/basketSlice';
const BasketListItem = ({ data,userData }) => {
  const dispatch = useDispatch();
  const handleDeleteBasketItem = async () => {
    await FetchDeleteMethod("basket", data.item.basketId)
    await dispatch(fetchBasketData(`basket?userId=${userData[0].userId}`));
}

  return (
    <View style={styles.container}>
      <View style={styles.areaTag}>
        <Image style={styles.imageStyle} source={{ uri: data.item.productUrl }} />
      </View>
      <View style={styles.areaTag2}>
        <Text style={styles.textStyle} variant="titleSmall">
          {data.item.productName.split("\n")}
        </Text>
      </View>
      <View style={styles.areaTag}>
        <Text style={styles.textStyle}>
        {data.item.productCount} x {data.item.productPrice}$
        </Text>
      </View>
      <View style={styles.areaTag}>
        <Icon
          source="delete"
          color={MD3Colors.error50}
          size={20}
          onPress={() => handleDeleteBasketItem()}
        />
      </View>
    </View>
  )
}

export default BasketListItem