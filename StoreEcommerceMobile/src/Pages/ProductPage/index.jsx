import { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, ScrollView,Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../../Redux/Slices/productSlice';
import styles from "./ProductPage.Style"
import Loading from '../Loading';
import ProductCard from '../../Components/ProductCard';
const ProductPage = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [count,setCount] = useState(10)
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  const categoryData = useSelector((state) => state.products)

  const handleCategoriesFetch = useCallback(async () => {
    if (status === "idle") {
      await dispatch(fetchProductsData());
    } else if (status === "fulfilled") {
      const filteredData = await categoryData.products.slice(0, count);
      return filteredData;
    }
  }, [dispatch, status, categoryData,count]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await handleCategoriesFetch();
      if (data) {
        setProducts(data);
      }
    };

    fetchData();
  }, [handleCategoriesFetch]);


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
          </View>
          <View style={styles.main}>
            <Text style={styles.tag}>Fashion isn't just about clothes, it's a reflection of one's personality, a canvas where creativity meets expression, and a journey of self-discovery through style.</Text>
          </View>
        </View>


        <View>
          <View style={styles.infoArea}>
          </View>
          <View style={styles.productsArea}>
            {products.map((item) => (
              <ProductCard navigation={navigation} key={item.productId} item={item} />
            ))}
          </View>
        </View>
        
         <Button color={"#E5DDC5"}  disabled={count >= categoryData.products.length ? true : false} title="Explore More Products" onPress={() => setCount(count + 15)} />
        

      </View>
    </ScrollView>
  );
}

export default ProductPage;
