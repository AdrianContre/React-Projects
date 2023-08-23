import {useState, useEffect} from 'react'
import { generateRandomFact } from '../logic/main.js'



export function useCatFact() {
    const [Fact,setFact] = useState()
    const updateFact = async () => {
        const response = await generateRandomFact()
        setFact(response)
      }
    
    useEffect(() => {
      updateFact()
    },[])
    
    return {Fact,updateFact}



}