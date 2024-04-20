import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  main: {
    flex: 1,
  },
  headerArea: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  
  infoArea: {
    // flex:1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
    paddingVertical: 30,
    borderRadius: 15,
    borderWidth:1,
    borderColor:"#000",
    
    margin: 10,
  },
  listArea: {
    backgroundColor: '#cecece',
    flex: 1,
    paddingBottom: 100,
  },
  innerInfo: {
    flex: 0.5,
    gap: 10,
  },
  button: {
    backgroundColor: '#5C8374',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  imageStyle: {
    maxHeight: 120,
    borderWidth: 1,
    color: '#cecece',
  },
  tag: {
    fontSize: 24,
    paddingHorizontal: 5,
    color: '#000',
  },
});
