import { StyleSheet } from "react-native";
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  //botón
  button: {
    height: 70,
    width: 70,
    backgroundColor: COLORS.DARK_GREY,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10 //provisional
  },
  textButton: {
    color: 'black',
    padding: 10,
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center'
  },
});
