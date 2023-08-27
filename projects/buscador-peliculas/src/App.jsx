import './App.css'
import {useRef} from 'react'
import { Movies } from './components/Movies'
import {getMovies} from './logic/main.js'
import {useMovies} from './hooks/useMovies.jsx'




function App() {
  const {search,setSearch,movies,setMovies} = useMovies()  
  const lastInput = useRef(search)
  
  const handleSubmit =  async (event) => {
    event.preventDefault()
    if (lastInput.current !== search) {
      lastInput.current = search
      const newMovies =  await getMovies({search})
      setMovies(newMovies)
    }
  }

  const updateSearch = (event) => {
    event.preventDefault()
    const newValue = event.target.value
    setSearch(newValue)
  }

  return (
    <>
      <div className='container'>
        <h1>Buscador de películas</h1>
        <form className='formContainer' onSubmit={handleSubmit}>
          <input type="text" name="textField" placeholder='Avengers,Megalodon,..' onChange={updateSearch}></input>
          <input type="submit" value="Buscar"></input>
        </form>
      </div>
      <main>
        {movies && <Movies movies={movies}/>}
      </main>
    </>
  )
}

export default App
