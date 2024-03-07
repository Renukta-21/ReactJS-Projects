import React, { useEffect, useState } from 'react'
import { loadFact } from './logic/fetch'
import { useCatImage } from './logic/useCatImage'
/* const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/papu?fontSize=50&fontColor=white` */

export const App = () => {
  const [fact, setFact] = useState('')
  const { image } = useCatImage({ fact })

  useEffect(() => {
    loadFact().then(setFact)
  }, [])

  return (
    <div className='h-screen grid justify-center text-center  bg-red-900 text-white py-10 '>
      <div className='max-w-xl'>
        <h1 className='mb-8 text-4xl '>Aplicacion de Gatos</h1>
        {fact && (
          <div className='flex flex-col'>
            <p className='w-[90%] mx-auto'>{fact}</p>
            <img src={image} alt='' className='w-[90%] mx-auto mt-8' />
            <button
              className='py-2 px-4 bg-white text-black max-w-[250px] mx-auto absolute bottom-8 inset-x-0 rounded-md shadow-lg shadow-black'
              onClick={async () => {
                const newFact = await loadFact()
                setFact(newFact)
              }}
            >
              Generate Fact
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
