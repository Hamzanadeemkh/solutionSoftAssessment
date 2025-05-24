import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import { fonts } from '../../assets/fonts/fonts'

interface customButtonProps{
    onPress:()=>void
    ButtonText:string
}

const CustomButton = ({
    onPress,
    ButtonText
}:customButtonProps) => {
  return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>{ButtonText}</Text>
            </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
      button: {
    backgroundColor: 'transparent',
    borderColor: '#9A5DF5',
    borderWidth: 1.5,
    paddingVertical: hp(1.3),
    borderRadius: 10,
    marginTop: hp(2),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#FFF',
    fontFamily: fonts.medium,
  },
})