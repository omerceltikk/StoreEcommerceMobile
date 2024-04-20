import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBasketData } from '../../Redux/Slices/basketSlice';
import { fetchFavoritesData } from '../../Redux/Slices/favoritesSlice';
import { FetchDeleteMethod, FetchPostMethod, FetchPutMethod } from '../../Redux/FetchServices';
import styles from "./ProductCard.Style.js"

const ProductCard = ({ item,navigation }) => {
  const [favoriteAdd, setFavoriteAdd] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users.users);
  const favoritesData = useSelector((state) => state.favorites);

  useEffect(() => {
    if (favoritesData.status == "idle") {
      dispatch(fetchFavoritesData());
    }
    if (favoritesData.status == "fulfilled") {
      const filteredData = favoritesData.favorites.find((favoriteItem) => favoriteItem.productId == item.productId);
      if (filteredData) {
        setFavoriteAdd(true);
        setFavoriteProduct(filteredData);
      } else {
        setFavoriteAdd(false);
      }
    }
  }, [dispatch, favoritesData])

  const handleAddBasketClick = async () => {
    const findedProduct = await basketData.find((basketItem) => basketItem.productId == item.productId)
    if (findedProduct) {
      await FetchPutMethod(`basket/${findedProduct.basketId}`, {
        userId: userData[0].userId,
        productsId: item.productId,
        productsCount: findedProduct.productCount + 1,
      })
    } else {
      await FetchPostMethod("basket", {
        userId: userData[0].userId,
        productsId: item.productId,
        productsCount: 1,
      })
    }
    await dispatch(fetchBasketData(`basket?userId=${userData[0].userId}`));
  };

  const handleFavoritesClick = async () => {

    if (favoriteAdd == true) {
      await FetchDeleteMethod("favorites", favoriteProduct.favoritesId);
      await setFavoriteAdd(false)
    } else if (favoriteAdd == false) {
      await FetchPostMethod("favorites", {
        userId: userData[0].userId,
        productsId: item.productId,
      })
      await setFavoriteAdd(true)
      await dispatch(fetchFavoritesData());
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("DetailPage",{item:item})}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.productUrl }} style={styles.image} resizeMethod="auto" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{item.productName.split("\n")}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.discountText}>{`${item.discountPercent}% discount`}</Text>
            <Text style={styles.discountText}>{item.primeCategory}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.discountPrice}>{`${item.discountPrice}$`}</Text>
            <Text style={styles.originalPrice}>{`${item.productPrice}$`}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => handleAddBasketClick()} style={styles.addButton}>
              <Text style={styles.addIcon}>➕</Text>
              <Text>Add Basket</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleFavoritesClick()} style={styles.heartButton}>
              <Text style={styles.heartIcon}>{favoriteAdd ? '❤️' : '🤍'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
