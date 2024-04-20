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
    padding: 10,
    paddingVertical: 30,
    borderRadius: 15,
    
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
    backgroundColor: '#fff',
    color: '#000',
    borderWidth:1,
    borderColor:"#ccc",
    padding: 5,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    margin:10
  },
  title: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom:10
  },
  tag: {
    fontSize: 24,
    paddingHorizontal: 5,
    color: '#000',
  },
});
