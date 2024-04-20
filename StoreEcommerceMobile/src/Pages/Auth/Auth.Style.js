import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#000"
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop:40,
    padding: 50,
  },
  input: {
    borderRadius: 100,
    borderWidth:1,
    borderColor:"#fff",
    // borderBlockColor:"#fff",
    paddingHorizontal: 20,
    backgroundColor: "#dadada",
    margin:10,
    marginVertical:15
  },
  imageStyle: {
    zIndex: 1,
    width: 400,
    height: 300,
    alignSelf:"center",
  },
  button:{
    padding:10,
    paddingHorizontal:60,
    // width:"50%",
    textAlign:"center",
    alignSelf:"center",
    backgroundColor:"#E5DDC5",
    borderRadius:100,
    color:"#000",
    marginTop:10
  },
  company:{
    fontWeight:"700",
    fontSize:35,
    textAlign:"center",
    color:"#E74646",
    marginBottom:20
  },
  textColor:{
    color:"#383838"
  },
  link:{
    textAlign:"center",
    fontSize:13,
    marginTop:10,
    fontStyle:"italic",
    color:"#E5DDC5"
  }
})