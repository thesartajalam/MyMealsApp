import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: {backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1'
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title: 'All Categories',
      headerTitleAlign: 'center',
      drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size}/>,
    }}/>
    <Drawer.Screen name="Favourites" component={FavouritesScreen} options={{
      drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size}/>
    }}/>
  </Drawer.Navigator>;
}

export default function App() {
  return (
  <>
  <StatusBar style='light'/>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      contentStyle: { backgroundColor: '#3f2f25' }
    }}>
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
        title: 'All Categories',
        headerShown: false,
        }}/>
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
      // options={({ route, navigation }) => { // for adding options dynamically using route.params
      //   const catId = route.params.categoryId;
      //   return {
      //     title: catId
      //   };
      // }}
      />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
        title: 'About the Meal'
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
