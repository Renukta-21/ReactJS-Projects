import React, { Children, useState } from 'react'
import confetti from 'canvas-confetti'
import { WINNER_COMBOS, TURNS } from './data/Constants'
import { Square } from './components/Square'
import ResultsModal from './components/ResultsModal'
import ThemeBar from './components/ThemeBar'

export default function App() {
  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(()=>{
    const storageTurn = window.localStorage.getItem('turn')
    return storageTurn ? storageTurn : TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) =>{
    if(board[index]!==null) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }else if(checkIsOver(newBoard)){
      setWinner(false)
    }
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    window.localStorage.setItem('turn', newTurn)
    /* console.log(window.localStorage.getItem('turn')) */
    
  }

  const checkWinner = (boardToCheck)=>{
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if(boardToCheck[a] &&
        boardToCheck[a]===boardToCheck[b] &&
        boardToCheck[b]===boardToCheck[c]){
          return boardToCheck[a]
        }
    }
    return null
  }

  const resetGame = function(){
    setTurn(TURNS.X)
    setBoard(Array(9).fill(null))
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const checkIsOver=(board)=>{
    return board.every((square)=> square !== null)
  }
  
  return (
    <>
    <ThemeBar/>
    <main className='bg-white dark:bg-black min-h-screen grid place-content-center text-center'>
      <h1 className='text-black dark:text-white text-4xl font-bold'>Tic Tac Toe</h1>
      <div className='grid grid-cols-3 my-8 gap-3'>
      {
          board.map(function(_, index){
            return(
              <Square key={index} index={index} updateBoard={updateBoard}>{board[index]}</Square>
            )
          })
      }
      </div>
      <div className='flex justify-center gap-3'>
        <span className={`h-20 aspect-square rounded-lg inline-block grid place-items-center text-4xl ${turn===TURNS.X ? 'turn' : 'text-black dark:text-white'}`}>{TURNS.X}</span>
        <span className={`h-20 aspect-square rounded-lg inline-block grid place-items-center text-4xl ${turn===TURNS.O ? 'turn' : 'text-black dark:text-white'}`}>{TURNS.O}</span>
      </div>
    </main>
    <footer className='text-black dark:text-white absolute bottom-2 inset-x-0 text-center'>&copy; Eduardo Daniel Urbina Martinez &copy;</footer>
    {
      <ResultsModal winner={winner} resetGame={resetGame}/>
    }
    </>
  )
}

