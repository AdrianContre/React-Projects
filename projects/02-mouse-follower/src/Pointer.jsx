import {useState,useEffect} from 'react'

export function Pointer() {
    const [enabled,setEnabled] = useState(false)
    const [position,setPosition] = useState({x: 0, y: 0})

    const changeButtonState = () => {
        setEnabled(!enabled)
    }

  useEffect(() => {
    const handleMouse = (event) => {
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove',handleMouse)
    }
    return () => {
      window.removeEventListener('pointermove',handleMouse)
      setPosition({x:0,y:0})
    }
    },[enabled])


    const buttonText = enabled ? 'Desactiva seguidor de puntero' : 'Activa seguidor de puntero';
    return (
        <>
            <div className="container">
                <button onClick={changeButtonState}>{buttonText}</button>
            </div>
            <span style={{transform: `translate(${position.x}px, ${position.y}px)`}} id="circle" className="circle"></span>
        </>
    )
}