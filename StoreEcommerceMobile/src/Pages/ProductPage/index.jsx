import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../../Redux/Slices/productSlice';
import styles from "./ProductPage.Style"
import Loading from '../Loading';
import ProductCard from '../../Components/ProductCard';
const ProductPage = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  const data = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProductsData());
    }
    if (status === "fulfilled") {
      const filteredData = data.products.filter((item) => 5 == item.categoryId);
      setProducts(filteredData);
    }
  }, [dispatch, data /*categoryId*/]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <ScrollView>
      <View>
        <View>
          <Image
            style={styles.imageStyle}
            resizeMethod="resize"
            source={{ uri: 'https://github.com/omerceltikk/StoreEcommerceFrontend/blob/main/StoreEcommerce/assets/productsresmain.jpg?raw=true' }}
          />
        </View>
        <Text style={styles.title}>Chic Choices, Endless Possibilities</Text>

        <View style={styles.innerContainer}>
          <View style={styles}>
            {/* <Image
              style={styles.imageStyle}
              source={require("../../../assets/productsImages/productsimage11.jpg")} /> */}
          </View>
          <View style={styles.main}>
            <Text style={styles.tag}>Fashion isn't just about clothes, it's a reflection of one's personality, a canvas where creativity meets expression, and a journey of self-discovery through style.</Text>
          </View>
        </View>


        <View>
          <View style={styles.infoArea}>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {products.map((item) => (
              <ProductCard navigation={navigation} key={item.productId} item={item} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ProductPage;
