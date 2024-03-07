import { useEffect, useState } from 'react'

export function useCatImage({ fact }) {
  const [image, setImage] = useState('')
  useEffect(() => {
    if (!fact) return
    const threeWords = fact.split(' ', 3).join(' ')
    const imageUrl = `https://cataas.com/cat/says/${threeWords}?fontSize=45&fontColor=red`
    setImage(imageUrl)
  }, [fact])
  return { image }
}
