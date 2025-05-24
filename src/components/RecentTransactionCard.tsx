import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../assets/colors/colors';
import Icons from './Icons';
import { fonts } from '../../assets/fonts/fonts';

interface TransactionCardProps {
  title: string;
  date: string;
  amount: string;
  status: any;
}

const RecentTransactionCard = ({
  title,
  date,
  amount,
  status,
}: TransactionCardProps) => {
  const statusColor =
    status === 'Completed' ? colors.online_color : colors.border_grey;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icons
          iconType="MaterialIcons"
          iconName="payment"
          size={20}
          color={colors.app_color}
        />
      </View>

      <View style={styles.bodySection}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>

        <View>
          <Text style={styles.amount}>$ +{amount}</Text>
          <View style={styles.statusSection}>
            <View style={[styles.dot, {backgroundColor: statusColor}]} />
            <Text style={[styles.status, {color: statusColor}]}> {status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecentTransactionCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: hp(1.5),
    alignItems: 'center',
  },
  iconContainer: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: '#212122',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(4),
  },
  bodySection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: hp(2),
    fontFamily: fonts.bold,
  },
  date: {
    color: colors.white,
    fontSize: hp(1.6),
    marginTop: hp(0.5),
        fontFamily:fonts.regular

  },

  amount: {
    color: colors.white,
    fontSize: hp(2),
    fontFamily: fonts.bold,
  },
  status: {
    fontSize: hp(1.6),
  },
  statusSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(0.5),
    fontFamily:fonts.medium
  },
  dot: {
    height: hp(1),
    width: hp(1),
    borderRadius: 100,
  },
});
