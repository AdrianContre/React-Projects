import {API_FACT} from '../constants/constants.js'

export const generateRandomFact = () => {
    return fetch(API_FACT)
            .then(response => response.json())
            .then(data => {
              return data.fact;
          })
  }