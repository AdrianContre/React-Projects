import {useCatFact} from './hooks/useCatFact.jsx'
import {useCatImg} from './hooks/useCatImg.jsx'

const API_FACT = 'https://catfact.ninja/fact'
const API_IMAGE = 'https://cataas.com/cat/says/'

function App() {
    const {Fact, updateFact} = useCatFact()
    const {Url} = useCatImg({Fact})
  return (
    <main>
      <h1>Prueba tecnica: Fetching de datos</h1>
      <button onClick={updateFact}>Generate new fact</button>
      {Fact && <p>{Fact}</p>}
      {Url && <img src={Url} alt={`Image generated with an api and a random fact ${Fact}`}></img>}
    </main>
  )
}

export default App