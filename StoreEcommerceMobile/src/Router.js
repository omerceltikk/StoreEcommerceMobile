import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import LogInPage from './Pages/LogInPage';
// import SıgnUpPage from './Pages/SıgnUpPage';
import MainPage from './Pages/MainPage';
// import DetailPage from './Pages/DetailPage';
import ProfilePage from './Pages/ProfilePage';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from 'react-native-paper';
import BasketPage from './Pages/BasketPage';
import { useDispatch, useSelector } from 'react-redux';
import ProductPage from './Pages/ProductPage';
import DetailPage from './Pages/DetailPage';
import CompleteBuy from './Pages/CompleteBuyPage';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';


const Router = () => {
  const Tab = createMaterialBottomTabNavigator();
  const userData = useSelector((state) => state.users);

  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#004225"
        inactiveColor="#cecece"
        tabBarColor="#000"
        barStyle={{backgroundColor: '#000', borderRadius: 25}}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon source="home" color={color} size={26} />
            ),
            tabBarColor: '#000',
          }}
          name="MainPageNavigator"
          component={MainPageDetail}
        />

      {userData.users.length != 0 &&  <Tab.Screen
          options={{
            headerShown: true,
            headerTitle: 'Basket',
            tabBarLabel: 'Basket',
            headerTitleAlign: 'center',
            headerTintColor: '#5C8374',
            tabBarIcon: ({color}) => (
              <Icon source="account" color={color} size={26} />
            ),
          }}
          name="BasketSectionNavigator"
          component={BasketSectionNavigator}
        />
      }
        <Tab.Screen
          options={{
            headerShown: true,
            headerTitle: 'Profile',
            tabBarLabel: 'Profile',
            headerTitleAlign: 'center',
            headerTintColor: '#5C8374',
            tabBarIcon: ({color}) => (
              <Icon source="account" color={color} size={26} />
            ),
          }}
          name="ProfilePage"
          component={userData.users.length == 0 && userData.userStatus == null ? AuthNavigator : ProfilePage}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: 'Receipes',
          headerTintColor: '#5C8374',
          headerTitleAlign: 'center',
        }}
        name="LoginPage"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: 'Receipes',
          headerTintColor: '#5C8374',
          headerTitleAlign: 'center',
        }}
        name="SignupPage"
        component={Signup}
      />
    </Stack.Navigator>
  );
};


const MainPageDetail = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: 'Receipes',
          headerTintColor: '#5C8374',
          headerTitleAlign: 'center',
        }}
        name="MainPage"
        component={MainPage}
      /> */}
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: 'Receipes',
          headerTintColor: '#5C8374',
          headerTitleAlign: 'center',
        }}
        name="ProductPage"
        component={ProductPage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: 'Receipes',
          headerTintColor: '#5C8374',
          headerTitleAlign: 'center',
        }}
        name="DetailPage"
        component={DetailPage}
      />
     
    </Stack.Navigator>
  );
};
const BasketSectionNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: 'Receipes',
          headerTintColor: '#5C8374',
          headerTitleAlign: 'center',
        }}
        name="BasketPage"
        component={BasketPage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: 'Receipes',
          headerTintColor: '#5C8374',
          headerTitleAlign: 'center',
        }}
        name="CompleteBuy"
        component={CompleteBuy}
      />
    </Stack.Navigator>
  );
};
export default Router;
