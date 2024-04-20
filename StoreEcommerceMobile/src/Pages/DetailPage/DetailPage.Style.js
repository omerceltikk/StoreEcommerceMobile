// ProductDetailStyles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  productPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent:"center",
    height:"100%",
  },
  image: {
    width: 350,
    minHeight:400,
    height:"100%",
    marginRight: 10,
    borderRadius: 10,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginTop:20,
    fontStyle:"italic"
  },
  sizeButton: {
    marginRight: 10,
  },
  
  countTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  countButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countButton: {
    paddingHorizontal: 20,
    marginRight: 10,
  },
  count: {
    fontSize: 20,
    marginRight: 10,
  },
  innerButton:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
});

export default styles;