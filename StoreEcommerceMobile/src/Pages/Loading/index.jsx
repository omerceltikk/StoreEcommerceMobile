import React from 'react';
import { View,Text } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Loading.Style';

const Loading = () => {
  return (
    <View style={styles.container}>
       <LottieView
        source={require('../../../assets/animation4.json')}
        autoPlay
        loop
        style={{ width: 300, height: 300 }}
      />
      <Text style={styles.tag}>
        Loading...
      </Text>
    </View>
  );
};

export default Loading;
