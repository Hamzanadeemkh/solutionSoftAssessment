import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../assets/colors/colors';
import { fonts } from '../../assets/fonts/fonts';
import Icons from './Icons';
import CustomButton from './CustomButton';

interface ListingCardProps {
  title: string;
  location: string;
  pricePerToken: string;
  currency: string;
  label:string,
  homeValue: string;
  tokenSupply: string;
  onPress: () => void;
  image: any;
  ButtonText:string
}

const Listing = ({
  title,
  location,
  pricePerToken,
  currency,
  homeValue,
  tokenSupply,
  onPress,
  label,
  ButtonText,
  image,
}: ListingCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageRow}>
        <Image source={image} style={styles.image} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{label}</Text>
        </View>
      </View>

      <View style={styles.locationRow}>
        <Icons iconName="map-marker-outline" iconType="MaterialCommunityIcons" size={16} color={colors.app_color} />
        <Text style={styles.locationText}>{location}</Text>
      </View>

      <Text style={styles.title}>{title}</Text>
      <View style={styles.infoRow}>
        <View style={styles.infoColumn}>
          <Text style={styles.infoLabel}>Price / Token:</Text>
          <Text style={styles.infoValue}>
            {pricePerToken} <Text style={styles.currency}>{currency}</Text>
          </Text>
        </View>
        <View style={styles.infoColumn}>
          <Text style={styles.infoLabel}>Home Value:</Text>
          <Text style={styles.infoValue}>{homeValue}</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text style={styles.infoLabel}>Token Supply:</Text>
          <Text style={styles.infoValue}>{tokenSupply}</Text>
        </View>
      </View>
      <CustomButton onPress={onPress} ButtonText={ButtonText}/>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#121212',
    borderRadius: 16,
    padding:hp(1.5),
    marginTop:hp(2)
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: wp(100),
    height: hp(14),
    borderRadius: 12,
  },
 badge: {
  position: 'absolute',
  top: 8,
  left: 8,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  borderRadius: 50,
  paddingHorizontal: hp(1.4),
  paddingVertical: hp(0.5),
},
badgeText: {
  fontSize: hp(1.4),
  fontFamily: fonts.medium,
  color:colors.white,
},
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1.5),
  },
  locationText: {
    color: colors.border_grey,
    marginLeft: wp(1),
    fontSize: hp(1.8),
    fontFamily: fonts.regular,
  },
  title: {
    fontSize: hp(2),
    color: colors.white,
    fontFamily: fonts.bold,
    marginTop: hp(0.5),
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  infoColumn: {
    flex: 1,
    alignItems: 'flex-start',
  },
  infoLabel: {
    fontSize: hp(1.7),
    color: colors.border_grey,
    fontFamily: fonts.regular,
  },
  infoValue: {
    fontSize: hp(1.9),
    color: colors.white,
    fontFamily: fonts.bold,
        marginTop:hp(0.5)

  },
  currency: {
    color: colors.app_color,
    fontFamily: fonts.bold,
  },

});

export default Listing;
