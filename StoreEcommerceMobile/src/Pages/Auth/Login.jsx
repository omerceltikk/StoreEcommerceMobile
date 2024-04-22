import React from 'react'
import { View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { FetchPostMethod, RefreshToken } from '../../Redux/FetchServices';
import { Formik } from 'formik';
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
import styles from "./Auth.Style"
import { loginUserReducer, setStatus } from '../../Redux/Slices/userSlice';
import { Text } from 'react-native-paper';
const Login = ({ navigation }) => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.users);

  const onSubmit = async (values) => {
    const valuesBody = {
      userName: values.userName,
      password: values.password,
      userStatus: "user",
    }
    await dispatch(setStatus("loading"));

    const res = await FetchPostMethod("auth/login", valuesBody).then((res) => {
      if (res.status != 200) {
        const response = RefreshToken();
        if (response.status == 200) {
          return FetchPostMethod("auth/login".valuesBody).then((res) = res.json());
        } else {
          navigation.navigate("MainPageNavigator");
          showMessage({
            message: "user can not be logged in",
            type: "danger",
          });
        }
      } else {
        return res.json();

      }
    })
    await dispatch(loginUserReducer(res));
    await dispatch(setStatus("fulfilled"));
    await console.log(userData.status);
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
        <Text style={styles.textColor} variant="displayMedium">Login &</Text>
        <Text style={styles.textColor} variant="displayMedium">Explore</Text>
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
              <Text style={styles.textColor}>Log In</Text>
            </TouchableOpacity>
          </View>
        )
          }
        </Formik>
        <TouchableOpacity onPress={() => navigation.navigate("SignupPage")}>
          <Text style={styles.link}>or create an account on this link!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login