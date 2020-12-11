import axios from 'axios'

export const Api = (): any => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    'Cache-Control': 'no-cache',
  }

  const instance = axios.create(defaultOptions)

  return instance
}
