import { useRef, useState } from "react";

enum Operadores {
  add, subtract, multiply, divide
}

export const useCalculator = () => {

  const [previousNumber, setPreviousNumber] = useState('0');
  const [textNumber, setTextNumber] = useState('0');
  const lastOperation = useRef<Operadores>()

  const resetTextNumber = () => {
    setTextNumber('0');
    setPreviousNumber('0');
  };

  const buildNumber = (numberString: string) => {
    // Validations
    const newNumber = textNumber + numberString;
    const includesDot = textNumber.includes('.') && numberString === '.';
    const startWithZero = textNumber.startsWith('0') || textNumber.startsWith('-0');
    const zeroWhithDot = numberString === '0' && textNumber.includes('.');
    const textWithoutZero = numberString !== '0' && !textNumber.includes('.');
    const isAvoidZero = numberString === '0' && !textNumber.includes('.');
    if (includesDot) {
      return;
    }
    console.log('startwithzero', startWithZero);

    if (startWithZero) {
      //Decimal point
      if (numberString === '.') {
        setTextNumber(newNumber);
        console.log('in1');
      } else if (zeroWhithDot) {
        console.log('in2');
        setTextNumber(newNumber);
      } else if (textWithoutZero) {
        console.log('in3');
        setTextNumber(numberString);
      } else if (isAvoidZero) { // Avoid 00000.0
        console.log('in4');
        setTextNumber(textNumber);
      } else {
        console.log('in5');
        setTextNumber(newNumber);
      }
    } else {
      console.log('in6');
      setTextNumber(newNumber); //concatenate
    }
  };

  const setPositiveNegativeSimbol = () => {
    let newTextNumber;
    if (textNumber.includes('-')) {
      newTextNumber = textNumber.replace('-', '')
    } else {
      newTextNumber = '-' + textNumber;
    }
    setTextNumber(newTextNumber);
  }

  const deleteButton = () => {
    //textNumber
    let negative = '';
    let auxNumber = textNumber;
    if (textNumber.includes('-')) {
      negative = '-';
      auxNumber = textNumber.substr(1);
    }
    if (auxNumber.length > 1) {
      setTextNumber(negative + auxNumber.slice(0, -1));
    } else {
      setTextNumber('0');
    }
  }

  const definePreviousNumber = () => {
    if (textNumber.endsWith('.')) {
      setPreviousNumber(textNumber.slice(0, -1));
    } else {
      setPreviousNumber(textNumber);
    }
    setTextNumber('0');
  }

  const addOperation = () => {
    definePreviousNumber();
    lastOperation.current = Operadores.add;
    console.log(lastOperation);
  }

  const substractOperation = () => {
    definePreviousNumber();
    lastOperation.current = Operadores.subtract;
    console.log(lastOperation);
  }

  const multiplyOperation = () => {
    definePreviousNumber();
    lastOperation.current = Operadores.multiply;
    console.log(lastOperation);
  }

  const divideOperation = () => {
    definePreviousNumber();
    lastOperation.current = Operadores.divide;
    console.log(lastOperation);

  }

  const calculateOperation = () => {    
    const numberOne = Number(textNumber)
    const numberTwo = Number(previousNumber)
    if (numberOne && numberTwo) {
      let calcutaleResult;
      switch (lastOperation.current) {
        case Operadores.add:
          calcutaleResult = (numberOne + numberTwo).toString();
          setTextNumber(calcutaleResult)
          break;
        case Operadores.subtract:
          calcutaleResult = (numberTwo - numberOne).toString();
          setTextNumber(calcutaleResult)
          break;
        case Operadores.multiply:
          calcutaleResult = (numberOne * numberTwo).toString();
          setTextNumber(calcutaleResult)
          break;
        case Operadores.divide:
          calcutaleResult = (numberTwo / numberOne).toString();
          setTextNumber(calcutaleResult)
          break;
      }
    }
  }


  return {
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
  }
}