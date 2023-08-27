import {useState,useEffect} from 'react'
import {getMovies} from '../logic/main.js'

export function useMovies() {
    const [search,setSearch] = useState('')
    const [movies,setMovies] = useState()
    useEffect(() => {
        const fetchMovies = async () => {
          if (search !== '') {
            const newMovies = await getMovies({ search });
            setMovies(newMovies);
          }
        }
        fetchMovies()
      },[search])

    return {search, setSearch, movies, setMovies}

}