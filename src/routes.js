import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {navigationRef} from './RootNavigation';
import navigationTheme from './styles/navigation';
import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function src() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      <Header />
      <Stack.Navigator mode="card" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
