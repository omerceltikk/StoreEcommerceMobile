import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBasketData } from '../../Redux/Slices/basketSlice';
import { FetchPostMethod } from '../../Redux/FetchServices';
import { Checkbox, Button } from 'react-native-paper';
import Loading from '../Loading';
import styles from "./CompleteBuy.Style"
const CompleteBuy = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [address, setAddress] = useState("");
  const status = useSelector((state) => state.baskets.status);
  const data = useSelector((state) => state.baskets);
  const userData = useSelector((state) => state.users.users);

  useEffect(() => {
    if (status == "idle") {
      dispatch(fetchBasketData("basket"));
    }
    if (status == "fulfilled") {
      const filteredData = data.baskets.filter((item) => item.userId == userData[0].userId);
      setProducts(filteredData);
      let totalPrice = 0;
      filteredData.forEach((item) => {
        totalPrice += item.productPrice * item.productCount;
      });
      setPrice(totalPrice);
    }
  }, [dispatch, data]);

  const handleOrderClick = async () => {
    const modifiedProducts = products.map((item) => ({
      productId: item.productId,
      productCount: item.productCount,
      price: item.productPrice * item.productCount,
      productName: item.productName
    }));
    await FetchPostMethod("order", {
      userId: userData[0].userId,
      orderAddress: address,
      productList: JSON.stringify(modifiedProducts),
    });
    setAddress("");
  };

  if (status == "loading") {
    return (
      <Loading />
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View >
        <Text style={styles.tag}>Address Header:</Text>
        <TextInput
          style={styles.customInput}
          placeholder="Home..."
          value={address}
          onChangeText={setAddress}
        />
        <Text style={styles.tag}>Address:</Text>
        <TextInput
          style={styles.customInput}
          placeholder="Enter your address..."
          multiline
          value={address}
          onChangeText={setAddress}
        />
        <View style={styles.checkBoxArea}>
          <Text>
            By checking this box, you acknowledge that you have read and agree to our Privacy Policy.
          </Text>
          <Checkbox
          />
        </View>
        <View style={styles.checkBoxArea}>
          <Text>
            This Privacy Policy outlines how [Company Name] collects, uses, protects, and discloses information gathered from users of our website and services. This policy applies to website visitors and service users.
          </Text>
          <Checkbox
          />
        </View>
      </View>
      <View >
        <Text style={styles.title}>Credit Card Information</Text>
      </View>
      <View>
        <TextInput
          style={styles.customInput}
          placeholder="credit card number..."
          value={address}
          onChangeText={setAddress}
        />
        <Checkbox.Item
          label="Enable 3D secure"
        />
      </View>
      <View style={styles.innerInfo}>
        <View style={styles.listArea}>
          <Text style={styles.tag}>Summary:</Text>
        </View>
        {products.map((item) => (
          <Text key={item.productId} style={styles.productText}>{item.productCount} x {item.productName.split("\n")}</Text>
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={styles.totalPrice}> Total Price: {price}$</Text>
        <Button textColor='#000' style={styles.button} onPress={() => handleOrderClick()}>
          Buy
        </Button>
      </View>
    </ScrollView>
  );
};

export default CompleteBuy;
