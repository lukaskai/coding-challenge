import React, { useEffect, useContext, useState } from 'react'
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
} from 'react-native'
import normalize from 'react-native-normalize'
import { PieChart } from 'react-native-chart-kit'
import Spinner from 'react-native-loading-spinner-overlay'
import { Slider } from '@miblanchard/react-native-slider'
import styled from 'styled-components'
import { HomeStackNavProps } from '@navigation'
import { CompoundContext } from '@context'
import { WavyHeader, CurrencyInput, DonutLogo } from '@components'
import { calculateEarning, LABELS, COLORS } from '@utils'
import { CoinType, CompoundResult } from '@types'

export const Home: React.FC<HomeStackNavProps<'Home'>> = ({}) => {
  const { rateObj, fetchCToken } = useContext(CompoundContext)

  const [usdAmount, setUsdAmount] = useState(0)
  const [daiPercent, setDaiPercent] = useState(100)
  const [usdcPercent, setUsdcPercent] = useState(0)
  const [usdtPercent, setUsdtPercent] = useState(0)
  const [compoundResult, setCompoundResult] = useState<CompoundResult>({
    blendedInterestRate: 0,
    totalEarnings: 0,
  })
  const chartConfigs = {
    color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`,
  }

  const chartData = [
    {
      name: CoinType.DAI,
      population: daiPercent,
      color: COLORS.daiColor,
      legendFontColor: COLORS.chartTitle,
      legendFontSize: 15,
    },
    {
      name: CoinType.USDC,
      population: usdcPercent,
      color: COLORS.usdcColor,
      legendFontColor: COLORS.chartTitle,
      legendFontSize: 15,
    },
    {
      name: CoinType.USDT,
      population: usdtPercent,
      color: COLORS.usdtColor,
      legendFontColor: COLORS.chartTitle,
      legendFontSize: 15,
    },
  ]

  useEffect(() => {
    fetchCToken()
    const fetchTimer = setInterval(fetchCToken, 60000)
    return () => {
      clearInterval(fetchTimer)
    }
  }, [])

  useEffect(() => {
    setCompoundResult(
      calculateEarning(
        usdAmount,
        daiPercent,
        rateObj.daiRate,
        usdcPercent,
        rateObj.usdcRate,
        usdtPercent,
        rateObj.usdtRate
      )
    )
  }, [usdAmount, daiPercent, usdcPercent, usdtPercent])

  const setPercent = (key: CoinType, value: number) => {
    let diff
    switch (key) {
      case CoinType.DAI:
        diff = 100 - value - usdtPercent
        if (diff <= 0) {
          setUsdtPercent(100 - value)
          setUsdcPercent(0)
        } else setUsdcPercent(diff)
        setDaiPercent(value)
        break
      case CoinType.USDC:
        diff = 100 - daiPercent - value
        if (diff <= 0) {
          setDaiPercent(100 - value)
          setUsdtPercent(0)
        } else setUsdtPercent(diff)
        setUsdcPercent(value)
        break
      case CoinType.USDT:
        diff = 100 - daiPercent - value
        if (diff <= 0) {
          setDaiPercent(100 - value)
          setUsdcPercent(0)
        } else setUsdcPercent(diff)
        setUsdtPercent(value)
        break
      default:
        break
    }
  }

  return (
    <HomeContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <HeaderContainer>
          <LogoContainer>
            <DonutLogo />
          </LogoContainer>
          <WavyHeader
            styles={styles.svgCurve}
            height={160}
            bgColor={COLORS.headerBgColor}
            wavePattern='M0,192L21.8,181.3C43.6,171,87,149,131,160C174.5,171,218,213,262,229.3C305.5,245,349,235,393,197.3C436.4,160,480,96,524,106.7C567.3,117,611,203,655,213.3C698.2,224,742,160,785,144C829.1,128,873,160,916,165.3C960,171,1004,149,1047,128C1090.9,107,1135,85,1178,106.7C1221.8,128,1265,192,1309,218.7C1352.7,245,1396,235,1418,229.3L1440,224L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z'
          />
        </HeaderContainer>
      </TouchableWithoutFeedback>
      <Board alwaysBounceVertical={false} showsVerticalScrollIndicator={false}>
        <CurrencyInput
          onChangeText={(value) => setUsdAmount(+value)}
          defaultValue={usdAmount}
        />
        <SliderPercent color={COLORS.daiColor}>{`${daiPercent}%`}</SliderPercent>
        <Slider
          trackStyle={styles.daiTrack}
          thumbStyle={styles.daiThumb}
          animateTransitions
          minimumTrackTintColor={COLORS.daiColor}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(value) => setPercent(CoinType.DAI, Math.trunc(value[0]))}
          value={daiPercent}
        />
        <SliderTitle color={COLORS.daiColor}>
          {`${LABELS.DAI_SUPPLY_RATE + (rateObj.daiRate * 100).toFixed(2)}%`}
        </SliderTitle>
        <SliderPercent color={COLORS.usdcColor}>{`${usdcPercent}%`}</SliderPercent>

        <Slider
          trackStyle={styles.daiTrack}
          thumbStyle={styles.daiThumb}
          animateTransitions
          minimumTrackTintColor={COLORS.usdcColor}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(value) => setPercent(CoinType.USDC, Math.trunc(value[0]))}
          value={usdcPercent}
        />
        <SliderTitle color={COLORS.usdcColor}>
          {`${LABELS.USDC_SUPPLY_RATE + (rateObj.usdcRate * 100).toFixed(2)}%`}
        </SliderTitle>
        <SliderPercent color={COLORS.usdtColor}>{`${usdtPercent}%`}</SliderPercent>

        <Slider
          trackStyle={styles.daiTrack}
          thumbStyle={styles.daiThumb}
          animateTransitions
          minimumTrackTintColor={COLORS.usdtColor}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(value) => setPercent(CoinType.USDT, Math.trunc(value[0]))}
          value={usdtPercent}
        />
        <SliderTitle color={COLORS.usdtColor}>
          {`${LABELS.USDT_SUPPLY_RATE + (rateObj.usdtRate * 100).toFixed(2)}%`}
        </SliderTitle>

        <PieChart
          data={chartData}
          width={Dimensions.get('window').width}
          height={220}
          accessor='population'
          backgroundColor='transparent'
          paddingLeft='0'
          chartConfig={chartConfigs}
          style={{ marginVertical: 8 }}
        />

        <TargetValueContainer>
          <View>
            <ResultText>{LABELS.BLENDED_INTEREST_RATE}</ResultText>
            <ResultValue>{compoundResult.blendedInterestRate.toFixed(2)}%</ResultValue>
          </View>
          <View>
            <ResultText>{LABELS.PROJECTED_TOTAL_EARNINGS}</ResultText>
            <ResultValue>${compoundResult.totalEarnings.toFixed(2)}</ResultValue>
          </View>
        </TargetValueContainer>
      </Board>
      {rateObj.daiRate === 0 && rateObj.usdcRate === 0 && rateObj.usdtRate === 0 && (
        <Spinner visible={true} color='white' />
      )}
    </HomeContainer>
  )
}

const HomeContainer = styled(View)`
  flex: 1;
  background-color: ${COLORS.cardBgColor};
`

const HeaderContainer = styled(View)`
  height: ${normalize(150)}px;
`

const LogoContainer = styled(View)`
  margin-top: ${normalize(20)}px;
  align-self: center;
  width: 60%;
  z-index: 2;
`

const Board = styled(ScrollView)`
  border-radius: ${normalize(15)}px;
  padding: ${normalize(15)}px;
`

const SliderTitle = styled(Text)<{ color: string }>`
  color: ${(props) => String(props.color)};
`

const SliderPercent = styled(Text)<{ color: string }>`
  color: ${(props) => String(props.color)};
  text-align: center;
`

const TargetValueContainer = styled(View)`
  border-radius: ${normalize(10)}px;
  border-color: ${COLORS.labelColor};
  border-width: 1px;
  padding: ${normalize(15)}px;
  margin: ${normalize(15)}px 0;
  margin-bottom: ${normalize(30)}px;
  flex-direction: row;
  justify-content: space-between;
`

const ResultText = styled(Text)`
  color: white;
  font-size: 14px;
  text-align: center;
`

const ResultValue = styled(Text)`
  color: ${COLORS.valueColor};
  font-size: 40px;
  text-align: center;
`

export const styles = StyleSheet.create({
  daiTrack: {
    backgroundColor: COLORS.trackColor,
    borderRadius: 5,
    height: 10,
  },
  daiThumb: {
    backgroundColor: COLORS.trackColor,
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    zIndex: 1,
  },
})
