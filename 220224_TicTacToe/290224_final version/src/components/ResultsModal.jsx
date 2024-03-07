import React from 'react'

function ResultsModal({winner, resetGame}) {
  return (
    winner !== null &&(<div className='absolute inset-0 backdrop-filter backdrop-blur-sm  flex justify-center items-center'>
      <article className='text-black dark:text-white dark:bg-black bg-white w-[330px] shadow-black shadow-[10px_10px_20px] aspect-square border border-black dark:border-white rounded-2xl  flex flex-col justify-around items-center'>
        {
          winner===false ?
          <h1 className='text-2xl'>Ha habido un empate</h1>
          :
          <>
          <h1 className='text-2xl'>El ganador es</h1>
          <span className='inline-block w-20 border border-black dark:border-white aspect-square grid place-content-center rounded-md text-2xl font-bold'>{winner}</span>
          </>
        }
        <button className='px-8 py-2 border border-black dark:border-white rounded-md'
        onClick={resetGame}>Reset Game</button>
      </article>
    </div>)
  )
}

export default ResultsModal