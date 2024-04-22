import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from "./Loading.Style"
import LottieView from "lottie-react-native";
const Loading = () => {
  return (
    <View style={styles.container}>
    <LottieView source={require("../../../assets/lottieLoading.json")} style={styles.imageGif}/>
    </View>
  )
}

export default Loading