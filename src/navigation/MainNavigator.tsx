import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppStack from './AppStack';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Platform, View } from 'react-native';
import { colors } from '../../assets/colors/colors';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <>
      {Platform.OS === 'ios' && (
        <View style={{ backgroundColor: colors.black, height: 44 }} />
      )}
      <SafeAreaView 
        style={{flex: 1, backgroundColor: colors.black}}
        edges={['bottom', 'left', 'right']}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.black }
          }}
          initialRouteName="AppStack"
        >
          <Stack.Screen name="AppStack" component={AppStack} />
        </Stack.Navigator>
      </SafeAreaView>
    </>
  );
}