import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View, StyleSheet } from 'react-native';
import { fonts } from '../../assets/fonts/fonts';
import { colors } from '../../assets/colors/colors';
import { AppImages } from '../../assets/images/AppImages';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Home from '../screens/Home';
import List from '../screens/List';
import Invest from '../screens/Invest';
import Portfolio from '../screens/Portfolio';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'black',
          height: hp(9),
          borderTopWidth: 0,
          paddingTop: hp(2),
        },
        tabBarIcon: ({ focused, color }) => {
          let iconSource;
          
          if (route.name === 'Account') {
            iconSource = AppImages.account;
          } else if (route.name === 'List') {
            iconSource = AppImages.list;
          } else if (route.name === 'Search') {
            iconSource = AppImages.search;
          } else if (route.name === 'Invest') {
            iconSource = AppImages.invest;
          } else if (route.name === 'Portfolio') {
            iconSource = AppImages.portfolio;
          }

          const isSearch = route.name === 'Search';

          return (
            <View style={styles.tabContainer}>
              {focused && !isSearch && (
                <View style={styles.activeIndicator} />
              )}

              <View style={[
                styles.iconContainer,
                isSearch && styles.searchIconContainer
              ]}>
                <Image
                  source={iconSource}
                  style={[
                    styles.icon,
                    {
                      tintColor: isSearch ? 'white' : focused ? colors.app_color : 'white',
                    }
                  ]}
                  resizeMode="contain"
                />
              </View>

              {!isSearch && (
                <Text style={[
                  styles.label,
                  { color: focused ? colors.app_color : 'white' }
                ]}
                >
                  {route.name}
                </Text>
              )}
            </View>
          );
        },
      })}>
      <Tab.Screen name="Account" component={Home} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Invest" component={Invest} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  activeIndicator: {
    position: 'absolute',
    top: -hp(2.7),
    width: wp(20),
    height: 2,
    backgroundColor: colors.app_color,
    borderRadius: 2,
  },
  iconContainer: {
    marginBottom: hp(0.5),
  },
  searchIconContainer: {
    backgroundColor: colors.app_color,
    borderRadius: 100,
    padding: hp(1.7),
    marginBottom: hp(0.5),
  },
  icon: {
    width: hp(2.5),
    height: hp(2.5),
  },
  label: {
    fontSize: hp(1.5),
    fontFamily: fonts.medium,
    textAlign: 'center',
      width: wp(20), 

  },
});