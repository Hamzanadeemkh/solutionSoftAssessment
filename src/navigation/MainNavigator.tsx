import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppStack from './AppStack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} edges={['top']}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={"AppStack"}>
          <Stack.Screen name="AppStack" component={AppStack} />
        </Stack.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
