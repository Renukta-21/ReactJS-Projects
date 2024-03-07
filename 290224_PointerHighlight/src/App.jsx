import React, { useEffect, useState } from 'react';

function App() {
  const [enabled, setEnabled] = useState(true);
  const [position, setPosition] = useState({x:0,y:0})
  useEffect(() => {

    const handleMove = function(e){
        const {clientX, clientY} = e
        setPosition({x:clientX, y:clientY})
    }
    if(enabled){
      document.addEventListener('pointermove', handleMove)
    }

    return()=>{
      document.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  
  return (
    <main className="h-screen bg-black flex items-center justify-center">
      <div 
      className={`absolute top-0 left-0 bg-blue-600 w-[40px] aspect-square rounded-full`}
      style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
      </div>
      <button
      className='bg-white text-black px-10 py-2 rounded-lg' 
      onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  );
}

export default App;
