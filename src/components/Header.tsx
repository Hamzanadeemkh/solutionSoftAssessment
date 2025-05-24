import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icons from './Icons';
import {fonts} from '../../assets/fonts/fonts';
import {colors} from '../../assets/colors/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppImages} from '../../assets/images/AppImages';

interface CustomHeaderProps {
  title: string;
  isBack?: boolean;
  onSearch?: (text: string) => void;
  isSearch?: boolean;
  isLogo?: boolean;
}

const Header = ({
  title,
  isBack = false,
  onSearch,
  isSearch = false,
  isLogo = false,
}: CustomHeaderProps) => {
  const navigation = useNavigation<any>();
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
    onSearch?.(text);
  };

  return (
    <>
      <View style={styles.headerContainer}>
        {isBack && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Icons
              size={22}
              color="black"
              iconName="chevron-back"
              iconType="Ionicons"
            />
          </TouchableOpacity>
        )}
        {isLogo && (
          <Image source={AppImages.appLogoBGremove} style={styles.appLogo}></Image>
        )}

        {showSearch && isSearch ? (
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#999"
              value={searchText}
              onChangeText={handleSearch}
              autoFocus={true}
            />
            <TouchableOpacity
              onPress={() => {
                setShowSearch(false);
                handleSearch('');
              }}
              style={styles.searchIconButton}>
              <Icons
                size={22}
                color="black"
                iconName="close"
                iconType="MaterialIcons"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}

        {isSearch && !showSearch ? (
          <TouchableOpacity
            onPress={() => setShowSearch(true)}
            style={styles.searchIconButton}>
            <Icons
              size={22}
              color="black"
              iconName="search"
              iconType="MaterialIcons"
            />
          </TouchableOpacity>
        ) : null}
        <Image source={AppImages.profile} style={styles.profile}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    backgroundColor: colors.black,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  title: {
    fontSize: hp(2.7),
    fontFamily: fonts.medium,
    color: colors.white,
    flex: 1,
    textAlign: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginLeft: 32,
    height: 40,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    color: '#000',
    fontSize: 16,
    paddingVertical: 0,
  },
  searchIconButton: {
    position: 'absolute',
    right: 16,
    padding: 8,
  },
  appLogo: {
    height: hp(4),
    width: hp(4),
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  profile:{
       height: hp(4),
    width: hp(4),
    position: 'absolute',
    right: 16,
    zIndex: 1,
    borderRadius:100
  }
});

export default Header;
