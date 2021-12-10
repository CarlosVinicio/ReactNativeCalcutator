import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './Button.styles';
import { COLORS } from '../../constants/colors';

interface Props {
  text: string,
  color?: string,
  isDoubleButton?: boolean,
  onPress: (number: string) => void
}

export const Button = (props: Props) => {
  const {
    text,
    color = COLORS.DARK_GREY,
    isDoubleButton,
    onPress,
  } = props;
  const textColor = (color === COLORS.LIGHT_GREY)
    ? 'black'
    : 'white';
  const widthDoubleButton = (isDoubleButton)
    ? 180
    : 70;
  return (
    <TouchableOpacity
      style={{...styles.button, backgroundColor: color, width: widthDoubleButton }}
      onPress={() => onPress(text)}
    >
      <Text
        style={[styles.textButton, {color: textColor}]}
        numberOfLines={1}
      >
        { text }
      </Text>
    </TouchableOpacity>
  );
};
