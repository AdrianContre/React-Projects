import {API} from '../constants/consts.js'

export const getMovies = ({search}) => {
    if (search === '') return
    return fetch(`${API}${search}`)
      .then(response => response.json())
      .then(data => {
        return data.Search
      })
}