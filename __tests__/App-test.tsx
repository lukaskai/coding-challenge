/**
 * @format
 */

import 'react-native'

import React from 'react'
import { act } from 'react-test-renderer'
import { render } from '@testing-library/react-native'
import App from '../App'

describe('<App />', () => {
  jest.useFakeTimers()
  it('should match snapshot', async () => {
    const result = render(<App />)
    await act(async () => {
      expect(result).toMatchSnapshot()
    })
  })
})
