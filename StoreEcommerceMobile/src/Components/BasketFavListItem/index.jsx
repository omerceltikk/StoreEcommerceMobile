import React from 'react'
import { Image, View } from 'react-native'
import styles from "./BasketFavListItem.Style"
import {  Text, Icon, MD3Colors } from 'react-native-paper';
import { FetchDeleteMethod } from '../../Redux/FetchServices';
import { useDispatch } from 'react-redux';
import { deletefavMethod } from '../../Redux/Slices/favoritesSlice';


const BasketFavListItem = ({ data, status }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = async () => {
    if (status == "favorites") {
      await FetchDeleteMethod("favorites", data.item.favoritesId);
      await dispatch(deletefavMethod());
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaTag}>
        <Image style={styles.imageStyle} source={{ uri: data.item.imageUrl }} />
      </View>
      <View style={styles.areaTag2}>
        <Text style={styles.textStyle} variant="titleSmall">
          {data.item.productName.split("\n")}
        </Text>
      </View>
      <View style={styles.areaTag}>
        <Text style={styles.textStyle}>
          {data.item.productPrice}$
        </Text>
      </View>
      <View style={styles.areaTag}>
        <Icon
          source="delete"
          color={MD3Colors.error50}
          size={20}
          onPress={() => handleDeleteItem()}
        />
      </View>
    </View>
  )
}

export default BasketFavListItem