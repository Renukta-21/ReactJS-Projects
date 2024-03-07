import React from "react"

export const Square = ({children, index, updateBoard}) => {
    return (
      <div className='dark:text-white text-black  text-3xl rounded-xl  h-20 aspect-square border border-black dark:border dark:border-white flex place-items-center justify-center cursor-pointer'
      onClick={()=>{
        updateBoard(index)
      }}>
        {children}
      </div>
    )
  }