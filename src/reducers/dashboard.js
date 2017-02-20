import { merge, compose, flatten, prop } from 'ramda'

const formatApiResponce = compose(prop('days'), prop(0))

const defaultState =
  { amountOfRainfall: null
  , isLoading: false
  }

const selector = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_AMOUNT_OF_RAINFALL':
      return merge(state, { amountOfRainfall: formatApiResponce(action.dataset) })

    case 'TOGGLE_LOADING':
      return merge(state, { isLoading: !state.isLoading })

    default:
      return state
  }
}

export default selector
