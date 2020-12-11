import React, { ReactNode, useState } from 'react'

import { CTokenResponse, RateObject } from '@types'
import { Api } from '@modules'
import { getRateObj } from '@utils'

export interface CompoundContextInterface {
  fetchCToken(): Promise<boolean>
  rateObj: RateObject
}

interface ProviderProps {
  children: ReactNode
}

const initialContext: CompoundContextInterface = {
  fetchCToken: () => {
    return new Promise((resolve) => setTimeout(() => resolve(true), 10))
  },
  rateObj: {
    daiRate: 0,
    usdcRate: 0,
    usdtRate: 0,
  },
}

export const CompoundContext = React.createContext<CompoundContextInterface>(
  initialContext
)

export const CompoundContextProvider = (props: ProviderProps): JSX.Element => {
  const { children } = props
  const [rateObj, setRateObj] = useState<RateObject>({
    daiRate: 0,
    usdcRate: 0,
    usdtRate: 0,
  })

  const fetchCToken = async (): Promise<boolean> => {
    let response: CTokenResponse
    try {
      response = (await Api().get('https://api.compound.finance/api/v2/ctoken')).data
      setRateObj(getRateObj(response.cToken))
      return true
    } catch (error) {
      return false
    }
  }

  return (
    <CompoundContext.Provider value={{ rateObj, fetchCToken }}>
      {children}
    </CompoundContext.Provider>
  )
}
