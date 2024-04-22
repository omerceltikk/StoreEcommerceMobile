import React from 'react';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './Main.Style';
import { useSelector } from 'react-redux';
import CustomDrawer from '../../Components/DrawerContent';
const MainPage = ({ navigation }) => {
  return (
    <ScrollView>
      <CustomDrawer />
      <View>
        <ImageBackground
          source={{ uri: 'https://github.com/omerceltikk/JavaStoreEcommerceProject/blob/master/StoreEcommerceFrontEnd/StoreEcommerce/assets/mainresponsive1.jpg?raw=true' }}
          style={styles.imageBackground}
        >
          <View style={styles.textContent}>
            <Text style={styles.text}>Discover Your Style, Define Your Story</Text>
            <TouchableOpacity onPress={() => navigation.navigate("ProductPage")}>
              <Text style={styles.button}>
                Explore...
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View>
        <ImageBackground
          source={{ uri: 'https://github.com/omerceltikk/JavaStoreEcommerceProject/blob/master/StoreEcommerceFrontEnd/StoreEcommerce/assets/mainresponsive2.jpg?raw=true' }}
          style={styles.imageBackground}
        >
          <Text style={styles.text2}>Where Trends Meet
            Timeless Elegance</Text>
        </ImageBackground>
      </View>
      <View>
        <ImageBackground
          source={{ uri: 'https://github.com/omerceltikk/JavaStoreEcommerceProject/blob/master/StoreEcommerceFrontEnd/StoreEcommerce/assets/mainresponsive3.jpg?raw=true' }}
          style={styles.imageBackground}
        >
          <Text style={styles.text3}>Style That Speaks Volumes</Text>
        </ImageBackground>
      </View>
      <View >
        <ImageBackground
          source={{ uri: 'https://github.com/omerceltikk/JavaStoreEcommerceProject/blob/master/StoreEcommerceFrontEnd/StoreEcommerce/assets/mainresponsive4.jpg?raw=true' }}
          style={styles.imageBackground}
        >
          <View style={styles.alignself}>
          <Text style={styles.text4}>Discover Your Style Destination!</Text>
            <TouchableOpacity  onPress={() => navigation.navigate("ProductPage")}>
              <Text style={styles.button}>
                Explore... 
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default MainPage;
