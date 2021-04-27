// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home'
import Login from './src/screens/Login'
import Wishlist from './src/screens/Wishlist'
import ProductList from './src/screens/ProductList'
import Cart from './src/screens/Cart'
import Detail from './src/screens/Detail'
import Me from './src/screens/Me'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="ProductList" component={ProductList} options={{ title: "Women's Best Sellers ", headerTitleStyle: {fontSize: 22, fontWeight:'bold', marginLeft:50}}}/>
        <Stack.Screen name="Detail" component={Detail} options={{ title: "FOREVER 21 ",headerTitleStyle: {fontSize: 22, fontWeight:'bold', marginLeft:85},}}/>
      </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline';
            } else if (route.name === 'Wishlist') {
              iconName = focused ? 'heart-outline' : 'heart-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart-outline' : 'cart-outline';
            } else if (route.name === 'Me') {
              iconName = focused ? 'person-outline' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      > 
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Wishlist" component={Wishlist} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Me" component={Me} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
