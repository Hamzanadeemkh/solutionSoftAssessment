import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ToastAndroid,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {AppImages} from '../../assets/images/AppImages';
import Icons from './Icons';
import {fonts} from '../../assets/fonts/fonts';
import {colors} from '../../assets/colors/colors';

interface WalletCardProps {
  balance?: string;
  walletAddress?: string;
}

const WalletCard: React.FC<WalletCardProps> = ({balance, walletAddress}) => {
  const copyToClipboard = () => {
    Clipboard.setString(walletAddress);
    ToastAndroid.show('Wallet address copied!', ToastAndroid.SHORT);
  };

  const formatAddress = (address: string) =>
    `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <Image source={AppImages.appLogo} style={styles.logo} />
          <Text style={styles.logoText}>RealChain Wallet</Text>
        </View>
        <Text style={styles.balance}>${balance}</Text>
      </View>
      <View style={styles.mainAdressRowView}>
        <Text style={styles.label}>Wallet Address</Text>

        <View style={styles.addressRow}>
          <Text style={styles.addressText}>{formatAddress(walletAddress)}</Text>
          <TouchableOpacity onPress={copyToClipboard}>
            <Icons iconName="copy" iconType="Feather" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />
      <TouchableOpacity style={styles.button}>
        <Icons iconName="plus" iconType="AntDesign" size={18} color="white" />

        <Text style={styles.buttonText}>Add Funds</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WalletCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E0C3B',
    borderRadius: 16,
    padding: wp(4),
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: hp(3.5),
    height: hp(3.5),
    resizeMode: 'contain',
    marginRight: wp(2),
    borderRadius: 100,
  },
  logoText: {
    color: '#A962FF',
    fontFamily: fonts.medium,
    fontSize: hp(1.8),
  },
  balance: {
    color: 'white',
    fontSize: hp(2.8),
    fontFamily: fonts.bold,
  },
  label: {
    color: 'white',
    fontSize: hp(1.6),
    fontFamily: fonts.regular,
  },
  addressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#342058',
    borderRadius: 25,
    padding: wp(3),
    width: wp(40),
    alignSelf: 'flex-end',
  },
  addressText: {
    color: 'white',
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '40%',
    backgroundColor: colors.app_color,
    borderRadius: 10,
    paddingVertical: hp(1.5),
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: hp(2),
    fontFamily: fonts.medium,
    marginLeft: wp(2),
  },
  mainAdressRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(4),
  },
  divider: {
    height: 1,
    width: '95%',
    backgroundColor: "#212122",
    alignSelf: 'center',
    marginVertical: hp(2),
  },
});
