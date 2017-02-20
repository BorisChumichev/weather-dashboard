import { merge, compose, prop } from 'ramda'

const formatApiResponce = compose(prop('days'), prop(0))

const defaultState =
  { amountOfRainfall: null
  , isLoading: false
  , pressure: 1000
  , temperature: 20
  }

const selector = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_AMOUNT_OF_RAINFALL':
      return merge(state, { amountOfRainfall: formatApiResponce(action.dataset) })

    case 'TOGGLE_LOADING':
      return merge(state, { isLoading: !state.isLoading })

    case 'SET_NUMERIC_VALUE':
      return merge(state, { [action.valueName]: action.value })

    default:
      return state
  }
}

export default selector
