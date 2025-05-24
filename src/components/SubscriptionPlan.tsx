import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icons from './Icons';
import CustomButton from './CustomButton';
import {colors} from '../../assets/colors/colors';
import {fonts} from '../../assets/fonts/fonts';

const SubscriptionPlan = () => {
  const benefits = [
    'Early Access to New Listings',
    'Reduced Transaction Fees',
    'Priority Listing for Sellers',
    'Advanced Market Analytics',
    'VIP Investment Opportunities',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Subscription</Text>
        <View style={styles.planContainer}>
          <Text style={styles.planText}>Basic</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <Text style={styles.benefitsTitle}>Platinum Benefits:</Text>

      {benefits.map((benefit, index) => (
        <View key={index} style={styles.benefitItem}>
          <Icons
            iconType="Ionicons"
            iconName="checkmark-circle"
            size={hp('2.5%')}
            color={colors.app_color}
          />
          <Text style={styles.disabledText}>{benefit}</Text>
        </View>
      ))}

      <CustomButton
        ButtonText="Upgrade to Platinum"
        onPress={() => {
          console.log('pressed');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: hp(1),
    backgroundColor: '#111',
    borderTopColor: colors.app_color,
    borderTopWidth: 2,
    marginVertical:hp(4)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  divider: {
    height: 1,
    width: '95%',
    backgroundColor: '#212122',
    alignSelf: 'center',
    marginBottom: hp(1),
  },
  title: {
    color: '#fff',
    fontSize: hp('2.2%'),
    fontFamily: fonts.bold,
  },
  planContainer: {
    backgroundColor: '#212122',
    paddingHorizontal: wp('4%'),
    borderRadius: 50,
    borderBottomColor: colors.app_color,
    borderBottomWidth: 0.5,
  },
  planText: {
    color: '#b28eff',
    fontFamily: fonts.bold,
    fontSize: hp('2%'),
    padding: wp(1.5),
  },
  benefitsTitle: {
    color: colors.white,
    marginBottom: hp('1%'),
    fontSize: hp('2%'),
    fontFamily: fonts.medium,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1.5%'),
  },
  icon: {
    marginRight: wp('3%'),
  },
  disabledText: {
    color: colors.white,
    fontSize: hp('2%'),
    marginLeft: wp(1),
  },
  upgradeButton: {
    marginTop: hp('4%'),
    backgroundColor: '#8a4dff',
    paddingVertical: hp('1.8%'),
    borderRadius: wp('3%'),
    alignItems: 'center',
  },
  upgradeText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: hp('2.2%'),
  },
});

export default SubscriptionPlan;
