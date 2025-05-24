import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './src/navigation/MainNavigator';
import { colors } from './assets/colors/colors';

export default function App() {
  return (
      <SafeAreaProvider>
        <StatusBar backgroundColor={colors.black} barStyle="light-content" />
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
  );
}
