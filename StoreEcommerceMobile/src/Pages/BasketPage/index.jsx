import React from 'react'
import { View ,SafeAreaView,ScrollView,Text,FlatList} from 'react-native'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBasketData } from '../../Redux/Slices/basketSlice'
import { showMessage } from 'react-native-flash-message';
import Loading from '../Loading'
import BasketListItem from '../../Components/BasketListItem'
import styles from "./BasketPage.Style"
import { Button } from 'react-native-paper'
const BasketPage = ({navigation}) => {
  const dispatch = useDispatch();
  const [basketProducts, setBasketProducts] = useState([]);
  const status = useSelector((state) => state.baskets.status);
  const data = useSelector((state) => state.baskets)
  const userData = useSelector((state) => state.users.users)

  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchBasketData(`basket?userId=${userData[0].userId}`));
    }
    if (status == "fulfilled") {
      const filteredData = data.baskets.filter((item) => item.userId == userData[0].userId);
      if (filteredData.length >= 0 && filteredData.status != 400) {
        setBasketProducts(filteredData);
      }
      else {
        showMessage({
          message: filteredData.error,
          type: "danger",
        });
      }
    }
  }, [dispatch, data])
  if (status == "loading") {
    return (
      <Loading />
    )
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.main}>
        <View style={styles.infoArea}>
          <Text style={styles.title}>
            Products
          </Text>
          <View style={styles.favArea}>
            <FlatList scrollEnabled={false} numColumns={1} renderItem={(item) => <BasketListItem userData={userData} key={item.favoritesId} status={"favorites"} data={item}
            />} data={basketProducts} />
          </View>
        </View>
      </ScrollView>
      <View>
        <Button textColor='#000' style={styles.button} onPress={() => navigation.navigate("CompleteBuy")}>
          Complete Buy
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default BasketPage