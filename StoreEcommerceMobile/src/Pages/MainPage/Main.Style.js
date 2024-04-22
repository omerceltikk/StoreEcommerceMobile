import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  imageBackground: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ccc',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    textAlign: 'center',
  },
  textContent: {
    alignSelf: 'flex-end',
    marginBottom: 150,
  },
  button: {
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'italic',
    color: '#E5DDC5',
    textAlign: 'center',
  },
  text2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ccc',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    marginBottom: 100,
  },
  text3: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignSelf: 'baseline',
    marginTop: 100,
  },
  text4: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignSelf: 'baseline',
    marginBottom: 250,
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  drawerContent: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    color: 'white',
    fontSize: 20,
    marginVertical: 10,
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
  },
  alignself: {
    alignSelf: 'flex-end',
    marginBottom:50
  },
});
