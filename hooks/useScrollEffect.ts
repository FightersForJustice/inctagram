import { useEffect, useState } from 'react'

export const useScrollEffect = (setImagesContent: React.Dispatch<React.SetStateAction<string[]>>, images: string[]) => {
  const [fetching, setFetching] = useState(false)
  useEffect(() => {
    if (fetching) {
      setImagesContent((prevArray: string[]) => [...prevArray, ...images])
      setFetching(false)
    }
  }, [fetching])

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as Document
      if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) < 100) {
        setFetching(true)
      }
    }

    document.addEventListener('scroll', handleScroll)

    return function cleanup() {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
}
