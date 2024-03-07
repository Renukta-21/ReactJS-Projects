import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      return 'dark'
    }else{
      return 'light'
    }
  });
  useEffect(()=>{
    if(theme === 'dark'){
      document.querySelector('html').classList.add('dark');
    }else{
      document.querySelector('html').classList.remove('dark');
    }
  })
  const handleClick = () =>{
    setTheme(prevTheme => prevTheme === 'light' ? 'dark':'light');
  }
  return (
    <div className="h-screen bg-white flex items-center justify-center dark:bg-neutral-900">
      <button className="bg-slate-500 px-8 py-4 rounded-lg text-white cursor-pointer hover:bg-black transition-all dark:bg-slate-200 dark:text-black" onClick={handleClick}>
        Toogle Mode
      </button>
    </div>
  );
}

export default App;
