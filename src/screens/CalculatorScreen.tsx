import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../components/Button/Button.component';
import { COLORS } from '../constants/colors';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {

  const { 
    previousNumber,
    textNumber,
    resetTextNumber,
    setPositiveNegativeSimbol,
    deleteButton,
    divideOperation,
    buildNumber,
    multiplyOperation,
    substractOperation,
    calculateOperation,
    addOperation
   } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {
        (previousNumber !== '0') && (
          <Text style={styles.firstResult}> {previousNumber} </Text>
        )
      }
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit={true}
      >
        {textNumber}
      </Text>
      <View style={styles.buttonRow}>
        <Button
          text={'C'} color={COLORS.LIGHT_GREY}
          onPress={resetTextNumber}
        />
        <Button
          text={'+/-'}
          color={COLORS.LIGHT_GREY}
          onPress={setPositiveNegativeSimbol}
        />
        <Button
          text={'Del'}
          color={COLORS.LIGHT_GREY}
          onPress={deleteButton}
        />
        <Button
          text={'/'}
          color={COLORS.ORANGE}
          onPress={divideOperation}
        />
      </View>
      <View style={styles.buttonRow}>
        <Button text={'1'} onPress={buildNumber} />
        <Button text={'8'} onPress={buildNumber} />
        <Button text={'9'} onPress={buildNumber} />
        <Button text={'X'} color={COLORS.ORANGE} onPress={multiplyOperation} />
      </View>
      <View style={styles.buttonRow}>
        <Button text={'4'} onPress={buildNumber} />
        <Button text={'5'} onPress={buildNumber} />
        <Button text={'6'} onPress={buildNumber} />
        <Button text={'-'} color={COLORS.ORANGE} onPress={substractOperation} />
      </View>
      <View style={styles.buttonRow}>
        <Button text={'1'} onPress={buildNumber} />
        <Button text={'2'} onPress={buildNumber} />
        <Button text={'3'} onPress={buildNumber} />
        <Button text={'+'} color={COLORS.ORANGE} onPress={addOperation} />
      </View>
      <View style={styles.buttonRow}>
        <Button text={'0'} isDoubleButton={true} onPress={buildNumber} />
        <Button text={'.'} onPress={buildNumber} />
        <Button text={'='} color={COLORS.ORANGE} onPress={calculateOperation}/>
      </View>
    </View>
  );
};
