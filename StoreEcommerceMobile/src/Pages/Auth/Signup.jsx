import React from 'react'
import {  View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { FetchPostMethod,RefreshToken } from '../../Redux/FetchServices';
import { Formik } from 'formik';
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
import styles from "./Auth.Style"
import { loginUserReducer } from '../../Redux/Slices/userSlice';
import { Text } from 'react-native-paper';
const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users);

  const onSubmit = async (values) => {
    const valuesBody = {
      userName: values.userName,
      password: values.password,
      userStatus: "user",
    }
    const response = await FetchPostMethod("auth/register", valuesBody).then((res) => {
      if (res.status != 200) {
          showMessage({
            message: "username already in use",
            type: "danger",
          });
                  } else {
          return res.json();
      }
  })
    await dispatch(loginUserReducer(response));
    await showMessage({
      message: "logged in succesfully",
      type: "success",
    });
  }
  if (userData.status == "loading") {
    return (
      <Loading />
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <Text style={styles.textColor} variant="displayMedium">Sign Up &</Text>
      <Text style={styles.textColor} variant="displayMedium">Discover</Text>
        <Formik
          initialValues={{ userName: "", password: "" }}
          onSubmit={values => onSubmit(values)}
        >{({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              style={styles.input}
              onBlur={handleBlur("userName")}
              placeholder='username...'
              onChangeText={handleChange("userName")}
              value={values.userName}
            />
            <TextInput
              style={styles.input}
              onBlur={handleBlur("password")}
              placeholder='Password...'
              onChangeText={handleChange("password")}
              secureTextEntry={true}
              value={values.password}
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.textColor}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )
          }
        </Formik>
        <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
          <Text style={styles.link}>or create an account on this link!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Signup