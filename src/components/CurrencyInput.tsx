import * as React from 'react'
import { View, TextInput, TouchableHighlight, Text, StyleSheet } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const INPUT_HEIGHT = 48
const BORDER_RADIUS = 4

type CurrencyInputProps = {
  defaultValue: number
  onChangeText: (value: string) => void
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  defaultValue,
  onChangeText,
}) => {
  const containerStyles = [styles.container]
  const buttonTextStyles = [styles.buttonText]

  return (
    <View style={containerStyles}>
      <TouchableHighlight style={styles.buttonContainer}>
        <Text style={buttonTextStyles}>{'USD'}</Text>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        defaultValue={String(defaultValue)}
        onChangeText={onChangeText}
        keyboardType='number-pad'
      />
    </View>
  )
}

const styles = EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,
  container: {
    backgroundColor: '$white',
    height: INPUT_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    marginVertical: 11,
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },
  separator: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    borderTopRightRadius: BORDER_RADIUS,
    paddingHorizontal: 8,
    color: '$inputText',
    fontSize: 18,
  },
})
