import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DetailsScreen from './src/components/DetailsScreen';
import HomeScreen from './src/components/HomeScreen';
import NewsScreen from './src/components/NewsScreen';
import { AppearanceProvider } from 'react-native-appearance';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppearanceProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen 
            name="News" 
            component={NewsScreen} 
            options={{ headerShown:false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
  </AppearanceProvider>
  );
};

export default App;
