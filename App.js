import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DetailsScreen from './src/components/DetailsScreen';
import HomeScreen from './src/components/HomeScreen';
import { AppearanceProvider } from 'react-native-appearance';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppearanceProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  </AppearanceProvider>
  );
};

export default App;
