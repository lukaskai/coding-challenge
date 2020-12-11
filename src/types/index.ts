export interface CTokenResponse {
  cToken: CToken[]
  error: null
  meta: CTokenMeta
  request: CTokenRequest
}

export interface CToken {
  borrow_rate: CObject
  cash: CObject
  collateral_factor: CObject
  exchange_rate: CObject
  interest_rate_model_address: string
  name: string
  number_of_borrowers: number
  number_of_suppliers: number
  reserves: CObject
  reserve_factor: CObject
  supply_rate: CObject
  symbol: string
  token_address: string
  total_borrows: CObject
  total_supply: CObject
  underlying_address: string
  underlying_name: string
  underlying_price: CObject
  underlying_symbol: string
}

interface CTokenRequest {
  addresses?: string[]
  block_number?: number
  block_timestamp?: number
  meta: boolean
  network: string
}

interface CTokenMeta {
  unique_suppliers?: number
  unique_borrowers?: number
}

interface CObject {
  value: string
}

export interface RateObject {
  daiRate: number
  usdcRate: number
  usdtRate: number
}

export interface CompoundResult {
  blendedInterestRate: number
  totalEarnings: number
}

export enum CoinType {
  DAI = 'DAI',
  USDC = 'USDC',
  USDT = 'USDT',
}
