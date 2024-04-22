import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding:10,
    overflow:"hidden",
    width:"90%"
  },
  innerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    overflow:"hidden",

  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '50%',
   aspectRatio:0.8
  },
  heartButton: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    borderRadius: 20,
    padding: 5,
    borderColor: 'red',
  },
  heartIcon: {
    color: 'white',
  },
  detailsContainer: {
    padding: 5,
    width:"50%"
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom:10
  },
  discountText: {
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  discountPrice: {
    fontSize: 16,
    marginRight: 5,
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: 'grey',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  addIcon: {
    marginRight: 5,
  },
  
});

export default styles;
