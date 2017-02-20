import superagent from 'superagent'

const AMOUNT_OF_RAINFALL_URL = 'http://private-4945e-weather34.apiary-proxy.com/weather34/rain'

export const setNumericValue = (valueName, value) => {
  return {
    type: 'SET_NUMERIC_VALUE',
    valueName,
    value
  }
}

export const setAmountOfRainfall = dataset => {
  return {
    type: 'SET_AMOUNT_OF_RAINFALL',
    dataset
  }
}

export const toggleLoading = () => {
  return {
    type: 'TOGGLE_LOADING'
  }
}

export const showError = message => {
  return {
    type: 'SHOW_ERROR',
    message
  }
}

export const getAmountOfRainfall = () => {
  return dispatch => {

    const handleSuccess = ({ body }) => {
      dispatch(setAmountOfRainfall(body))
      dispatch(toggleLoading())
    }

    const handleError = error => {
      dispatch(toggleLoading())
      dispatch(showError(error))
    }
    
    superagent
      .get(AMOUNT_OF_RAINFALL_URL)
      .then(handleSuccess)
      .catch(handleError)
  }
}
