import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import WalletCard from '../components/Wallet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../assets/colors/colors';
import Listing from '../components/Listing';
import {AppImages} from '../../assets/images/AppImages';
import RecentTransactionCard from '../components/RecentTransactionCard';
import SubscriptionPlan from '../components/SubscriptionPlan';
import { fonts } from '../../assets/fonts/fonts';

const listings = [
  {
    id: '1',
    title: 'Cliffside Sunset Villa',
    location: 'Mykonos, Greece',
    pricePerToken: '$250',
    currency: 'USDC',
    homeValue: '$350,000',
    tokenSupply: '500 Tokens',
    label: 'House',
    image: AppImages.sampleVillaImage,
    ButtonText: 'View Details',
  },
  {
    id: '2',
    title: 'Oceanfront Dream House',
    location: 'Malibu, California',
    pricePerToken: '$500',
    currency: 'USDC',
    homeValue: '$800,000',
    tokenSupply: '1200 Tokens',
    label: 'House',
    image: AppImages.sampleVillaImage,
    ButtonText: 'View Details',
  },
];
const transactions = [
  {
    id: '1',
    title: 'Deposit',
    date: 'Jan 02, 2025, 01:53AM',
    amount: '500.00',
    status: 'Completed',
  },
  {
    id: '2',
    title: 'Deposit',
    date: 'Jan 02, 2025, 01:53AM',
    amount: '500.00',
    status: 'Processing',
  },
  {
    id: '3',
    title: 'Deposit',
    date: 'Jan 02, 2025, 01:53AM',
    amount: '500.00',
    status: 'Completed',
  },
  {
    id: '4',
    title: 'Deposit',
    date: 'Jan 02, 2025, 01:53AM',
    amount: '500.00',
    status: 'Completed',
  },
];

const Home = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Header title="Account" isLogo />
      <View style={styles.container}>
        <WalletCard
          balance="150.01"
          walletAddress="0x98be3e8fabeedc8b3a1f24354c8b4febd6ab8ee1"
        />
        <View style={styles.listHeaderView}>
          <Text style={styles.listText}>
            My Listings <Text style={styles.listCount}>(12)</Text>
          </Text>
          <Text style={styles.viewAllText}>View all</Text>
        </View>

        <FlatList
          data={listings}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Listing
              title={item.title}
              location={item.location}
              pricePerToken={item.pricePerToken}
              currency={item.currency}
              homeValue={item.homeValue}
              tokenSupply={item.tokenSupply}
              label={item.label}
              image={item.image}
              onPress={() => console.log(`${item.title} pressed`)}
              ButtonText={item.ButtonText}
            />
          )}
          numColumns={1}
          scrollEnabled={false}
        />
        <View style={styles.listHeaderView}>
          <Text style={styles.listText}>Recent Transaction</Text>
          <Text style={styles.viewAllText}>View all</Text>
        </View>
        <FlatList
          data={transactions}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          renderItem={({item}) => (
            <RecentTransactionCard
              title={item.title}
              date={item.date}
              amount={item.amount}
              status={item.status}
            />
          )}
        />
        <SubscriptionPlan/>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
    marginVertical: hp(2),
  },
  mainContainer: {
    backgroundColor: colors.black,
  },
  listHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(4),
  },
  listText: {
    color: colors.white,
    fontSize: hp(2),
    fontFamily:fonts.bold
  },
  listCount: {
    color: colors.app_color,
  },
  viewAllText: {
    color: colors.white,
    fontSize: hp(1.6),
    fontFamily:fonts.light
  },
});
