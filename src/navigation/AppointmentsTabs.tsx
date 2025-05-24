import React, { useEffect, useRef } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../assets/colors/colors';
import { fonts } from '../../assets/fonts/fonts';
import PendingAppointments from '../screens/HomeScreens/PendingAppointments';
import ConfirmedAppointments from '../screens/HomeScreens/ConfirmedAppointments';
import { Animated } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const AppointmentsTabs = () => {
  const renderLabel = ({ focused, children }: { focused: boolean, children: string }) => {
    const scaleValue = useRef(new Animated.Value(focused ? 1 : 0)).current;
  
    useEffect(() => {
      Animated.timing(scaleValue, {
        toValue: focused ? 1 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, [focused]);
  
    return (
      <View style={styles.labelContainer}>
        <Text
          style={[
            styles.labelText,
            { color: focused ? colors.app_color : colors.black },
            { fontFamily: focused ? fonts.regular : fonts.light }
          ]}
        >
          {children}
        </Text>
        <Animated.View
          style={[
            styles.customIndicator,
            {
              transform: [{ scaleX: scaleValue }],
              opacity: scaleValue,
            },
          ]}
        />
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.white,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarPressColor: 'transparent',
        animationEnabled: true,
      }}
    >
      <Tab.Screen
        name="Confirmed"
        component={ConfirmedAppointments}
        options={{
          tabBarLabel: ({ focused }) => renderLabel({ focused, children: 'Upcoming' }),
        }}
      />
      <Tab.Screen
        name="Pending"
        component={PendingAppointments}
        options={{
          tabBarLabel: ({ focused }) => renderLabel({ focused, children: 'Completed' }),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppointmentsTabs;

const styles = StyleSheet.create({
  labelContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 16,
    fontFamily: fonts.medium,
    textTransform: 'none',
  },
  customIndicator: {
    marginTop: hp(2),
    height: hp(0.4),
    width: wp(49),
    backgroundColor: colors.app_color,
    borderRadius: 50,
  },
});
