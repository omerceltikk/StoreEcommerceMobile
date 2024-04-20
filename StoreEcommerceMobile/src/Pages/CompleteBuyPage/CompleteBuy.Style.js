import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
  
  },

  tag: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  customInput: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  innerInfo: {
    padding: 16,
  },
  button: {
    backgroundColor: '#fff',
    color: '#000',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    margin: 10,
    marginBottom:120
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingVertical: 20,
  },
  listArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  checkBoxArea:{
    flexDirection:"row",
    paddingVertical:20,
    paddingHorizontal:16,
    alignItems:"center",
    gap:5
  },
  productText:{
    padding:8,
    fontSize:12
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
  footer:{
    marginBottom:50
  },
  totalPrice:{
    fontWeight:"bold",
    fontStyle:"italic",
    fontSize:16,
    textAlign:"right",
    padding:16
  }
});
