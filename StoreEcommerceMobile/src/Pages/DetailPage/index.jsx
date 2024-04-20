import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../../Redux/Slices/productSlice';
import styles from './DetailPage.Style';
import Loading from '../Loading';
import BuyButtonGroup from '../../Components/BuyButtonGroup';

const ProductDetail = ({ route }) => {
  const { item } = route.params;
  const [product, setProduct] = useState(item);
  const [count, setCount] = useState(1);
  const sizes = ['S', 'M', 'L', 'XL', 'XXL']


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.marginBottom20}>
        <Text style={styles.productName}>{product.productName.split("\n")}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.discountPrice}>{product.discountPrice}$</Text>
          <Text style={styles.productPrice}>{product.productPrice}$</Text>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.productUrl }} style={styles.image} resizeMethod="resize" />
          {product?.images?.map((item) => (
            <Image key={item.imageId} source={{ uri: item.imageUrl }} style={styles.image} />
          ))}
        </View>
      </ScrollView>
      <View >
        <Text style={styles.description}>{product.productDescription}</Text>
      </View>
      <View style={styles.marginBottom20}>
        <Text style={styles.countTitle}>Size</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {sizes.map((size) => (
            <Button key={size} style={styles.sizeButton} labelStyle={styles.buttonLabel}>{size}</Button>
          ))}
        </ScrollView>
      </View>
      <View style={styles.marginBottom20}>
        <Text style={styles.countTitle}>Count</Text>
        <View style={styles.innerButton}>
          <View style={styles.countButtonGroup}>
            <Button onPress={() => setCount(count - 1)} style={styles.countButton} disabled={count === 0}>-</Button>
            <Text style={styles.count}>{count}</Text>
            <Button onPress={() => setCount(count + 1)} style={styles.countButton} disabled={product.productStockCount - 1 === count}>+</Button>
          </View>
          <BuyButtonGroup count={count} item={product} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
