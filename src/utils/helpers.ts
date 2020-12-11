import { CToken, CoinType } from '@types'

const getSupplyRate = (cToken: CToken[], symbol: string) => {
  return (
    Number(cToken.find((item) => item.underlying_symbol === symbol)?.supply_rate.value) ||
    0
  )
}

export const getRateObj = (cToken: CToken[]) => {
  return {
    daiRate: getSupplyRate(cToken, CoinType.DAI),
    usdcRate: getSupplyRate(cToken, CoinType.USDC),
    usdtRate: getSupplyRate(cToken, CoinType.USDT),
  }
}

export const calculateEarning = (
  totalAmount = 0,
  daiPercent = 0,
  daiRate = 0,
  usdcPercent = 0,
  usdcRate = 0,
  usdtPercent = 0,
  usdtRate = 0
) => {
  const earning =
    ((daiPercent * daiRate + usdcPercent * usdcRate + usdtPercent * usdtRate) *
      totalAmount) /
    100
  const blendedInterestRate = totalAmount === 0 ? 0 : (earning * 100) / totalAmount

  return { blendedInterestRate, totalEarnings: earning }
}
