import React from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBasketData } from '../../Redux/Slices/basketSlice';
import { FetchPostMethod, FetchPutMethod } from '../../Redux/FetchServices';
import { Button } from 'react-native-paper';
import styles from "./BuyButtonGroup.Style"
const BuyButtonGroup = ({ count, item }) => {
  const userData = useSelector((state) => state.users.users);
  const basketData = useSelector((state) => state.baskets.baskets);
  const dispatch = useDispatch();
  const handleAddBasketClick = async () => {
    const findedProduct = await basketData.find((basketItem) => basketItem.productId == item.productId)
    if (findedProduct) {
      await FetchPutMethod(`basket/${findedProduct.basketId}`, {
        userId: userData[0].userId,
        productsId: item.productId,
        productsCount: findedProduct.productCount + count,
      })
    } else {
      await FetchPostMethod("basket", {
        userId: userData[0].userId,
        productsId: item.productId,
        productsCount: count,
      })
    }
    await dispatch(fetchBasketData(`basket?userId=${userData[0].userId}`));
  }
  return (
    <View style={{ flexDirection: 'row', justifyContent:"flex-end" }}>
      <Button textColor='#000' style={styles.button} onPress={() => handleAddBasketClick()}>
        + Add Basket
      </Button>
     
    </View>
  )
}

export default BuyButtonGroup