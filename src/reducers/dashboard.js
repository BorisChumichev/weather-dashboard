import { merge, compose, prop, map, partial } from 'ramda'

import { chanceOfRain } from '../utils'

const formatApiResponce = compose(prop('days'), prop(0))
const computeChances = (pressure, temperature, amounts) => map(
    compose(
      partial(chanceOfRain, [ pressure, temperature ]),
      prop('amount')
    ),
    amounts
  )

const defaultState =
  { amountOfRainfall: null
  , chances: null
  , isLoading: true
  , pressure: 1000
  , temperature: 20
  }

const selector = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_AMOUNT_OF_RAINFALL':
      const amounts = formatApiResponce(action.dataset)
      
      return merge(state,
          { amountOfRainfall: amounts
          , chances: computeChances(state.pressure, state.temperature, amounts)
          }
        )

    case 'TOGGLE_LOADING':
      return merge(state, { isLoading: !state.isLoading })

    case 'SET_NUMERIC_VALUE':
      return merge(state,
          { [action.valueName]: action.value
          , chances: action.valueName === 'pressure'
              ? computeChances(action.value, state.temperature, state.amountOfRainfall)
              : computeChances(state.pressure, action.value, state.amountOfRainfall)
          }
        )

    default:
      return state
  }
}

export default selector
