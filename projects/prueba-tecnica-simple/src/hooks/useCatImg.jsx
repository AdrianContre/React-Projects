import {useState, useEffect} from 'react'
import {API_IMAGE} from '../constants/constants.js'

export function useCatImg({Fact}) {
    const[Url,setUrl] = useState()
    useEffect(() => {
        if (Fact === undefined) return
        const firstWord = Fact.split(' ')[0]
        fetch(`${API_IMAGE}${firstWord}?size=50&color=red&json=true`)
        .then(response => response.json())
        .then(data => {
            setUrl(data.url)
        })
      },[Fact])
      return {Url}
}