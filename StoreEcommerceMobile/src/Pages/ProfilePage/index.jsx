import { View, SafeAreaView, FlatList, Text, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import styles from "./ProfilePage.Style"
import Loading from "../Loading"
import { fetchOrdersData } from '../../Redux/Slices/ordersSlice'
import { fetchFavoritesData } from '../../Redux/Slices/favoritesSlice'
import { Avatar } from 'react-native-paper'
import BasketFavListItem from '../../Components/BasketFavListItem'
import OrdersListItem from '../../Components/OrdersListItem'

const ProfilePage = () => {
  const [currUser, setCurrUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);

  const userData = useSelector((state) => state.users);
  const favoritesData = useSelector((state) => state.favorites);
  const ordersData = useSelector((state) => state.orders);

  const favoritesDataStatus = useSelector((state) => state.favorites.status);
  const ordersDataStatus = useSelector((state) => state.orders.status);

  const dispacth = useDispatch();

  useEffect(() => {
    setCurrUser(userData.users[0])
  }, [dispacth, userData])

  useEffect(() => {
    if (favoritesDataStatus == "idle") {
      dispacth(fetchFavoritesData());
    }
    if (favoritesDataStatus == "fulfilled" && favoritesData.favorites.length > 0) {
      setFavorites(favoritesData.favorites);
    }
  }, [dispacth, favoritesData, favoritesDataStatus])

  useEffect(() => {
    if (ordersDataStatus == "idle") {
          dispacth(fetchOrdersData(`order?userId=${userData.users[0].userId}`));
        }
   else if (ordersDataStatus == "fulfilled" && ordersData.orders.length > 0) {
      setOrders(ordersData.orders);
    }
  }, [dispacth, ordersData, ordersDataStatus])

  if (favoritesDataStatus == "loading" || ordersDataStatus == "loading" || userData.status == "loading") {
    return (
      <Loading />
    )
  }
  if (userData.users.length == 0) {
    return (
      <>
      </>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.main}>
        <View style={styles.headerArea}>
          <Avatar.Image size={82} source={require("../../../assets/boy.png")} />
          <Text style={styles.title}>
            {currUser?.userName}
          </Text>
        </View>
        <View >
          <View style={styles.infoArea}>
            <Text style={styles.tag}>
              Favorites
            </Text>
            <View style={styles.favArea}>
              <FlatList scrollEnabled={false} numColumns={1} renderItem={(item) => <BasketFavListItem key={item.favoritesId} status={"favorites"} data={item}
              />} data={favorites} />
            </View>
          </View>
        </View>
        <View >
          <View style={styles.infoArea}>
            <Text style={styles.tag}>
              Orders
            </Text>
            <View style={styles.favArea}>

              <FlatList scrollEnabled={false} numColumns={1} renderItem={(item) => <OrdersListItem key={item.orderId} data={item}
              />} data={orders} />
             
            </View>
          </View>
        </View>
        
      </ScrollView>

    </SafeAreaView>
  )
}
// }

export default ProfilePage