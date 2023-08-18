import {useState} from 'react'
import {Square} from './components/Square.jsx'
import {Modal} from './components/Modal.jsx'
import confetti from 'canvas-confetti'

const turns = {
    X : '❌',
    O : '⭕️'
}

const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkWins(board) {
    for (const combinations of wins) {
        const [a,b,c] = combinations
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            return [true,board[a]]
        }
    }
    return false;
}

function GameOver(board) {
    return board.every((cell) => cell !== null)
}





export function App() {
    const [board,setBoard] = useState(Array(9).fill(null))
    const [turn,setTurn] = useState(turns.X)
    const [winner,setWinner] = useState(null)
    
    const updateBoard = (index) => {
        const newBoard = [...board]
        if (newBoard[index] === null) {
            newBoard[index] = turn
            const newTurn = turns.X === turn ? turns.O : turns.X
            setTurn(newTurn)
            setBoard(newBoard)    
            const check = checkWins(newBoard)
            if (check[0]) {
                setWinner(check[1])
                confetti()
            }
            else if(GameOver(newBoard)) {
                setWinner(false)
            }
        }

    }

    const resetGame = () => {
        setWinner(null)
        setBoard(Array(9).fill(null))
        setTurn(turns.X)
    } 
    return (
        <div>
            <h1 className='turn'>Turn for {turn}</h1>
            <div className="board">
                {
                    board.map((elem,index) => {
                        return (
                            <Square 
                            key={index} 
                            index={index}
                            updateBoard={updateBoard}
                            >
                                {elem}
                            </Square>
                        )
                    })
                }
                
                <Modal winner={winner} resetGame={resetGame}></Modal>
            </div>
        </div>
        
    )
}