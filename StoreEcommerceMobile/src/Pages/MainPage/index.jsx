import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./Main.Style"
// import Loading from '../../Components/Loading';
// import ErrorPage from '../../Components/ErrorPage';
// import SummaryModal from '../../Components/SummaryModal';
import { SafeAreaView, View, Text, ImageBackground, ScrollView, Image, Button } from 'react-native';
import CustomDrawer from '../../Components/DrawerContent';

const MainPage = () => {
  const [active, setActive] = React.useState('');
  const dispatch = useDispatch();
  const currUserData = useSelector((state) => state.users);
  const categoriesData = useSelector((state) => state.products);

  const data = useSelector((state) => state.categories);



  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  if (categoriesData.status == "loading") {
    return (
      <Loading />
    )
  }
  if (data.status == "failed") {
    return (
      <ErrorPage item={data.error} />
    )
  }
  const image = { uri: "https://github.com/omerceltikk/JavaStoreEcommerceProject/blob/master/StoreEcommerceFrontEnd/StoreEcommerce/assets/mainresponsive1.jpg?raw=true" };


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Button title="Menüyü Aç/Kapat" onPress={toggleDrawer} />
        <CustomDrawer
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image
            source={image}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.imageText}>Resim 1</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={image}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.imageText}>Resim 2</Text>
        </View>
        {/* Daha fazla resim ekleyebilirsiniz */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default MainPage