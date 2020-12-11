import React from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

export type WavyHeaderProps = {
  styles: any
  wavePattern: any
  bgColor: string
  height: number
}
export const WavyHeader: React.FC<WavyHeaderProps> = ({
  styles,
  wavePattern,
  bgColor,
  height,
}) => {
  return (
    <View style={styles}>
      <View style={{ backgroundColor: bgColor, height }}>
        <Svg
          height='60%'
          width='100%'
          viewBox='0 0 1440 320'
          style={{ position: 'absolute', top: 130 }}>
          <Path fill={bgColor} d={wavePattern} />
        </Svg>
      </View>
    </View>
  )
}
