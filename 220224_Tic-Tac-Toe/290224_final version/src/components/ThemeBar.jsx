import React, { useEffect, useState } from 'react'

function ThemeBar() {
const [theme, setTheme] = useState(()=>{
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
        return 'dark'
    }
    
    return 'light'
})

useEffect(() => {
    console.log('sasa')
    if(theme==='dark'){
        document.querySelector('body').classList.add('dark')
    }else{
        document.querySelector('body').classList.remove('dark')
    }
}, [theme])

return (
    <div className='absolute py-6 inset-x-0 justify-center bg-white text-white dark:bg-black dark:text-white flex '>
        <button className='px-7 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black'
        onClick={()=>{
            setTheme(prevTheme => {return prevTheme === "light" ? "dark" : "light"})
        }}>{theme==='light'?'Dark Mode':'Light mode'}</button>
    </div>
  )
}

export default ThemeBar