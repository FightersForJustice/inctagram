import { useEffect, useState } from 'react'

export const useScrollEffect = (onScrollCallback: () => void) => {
  const [fetching, setFetching] = useState(false)
  useEffect(() => {
    if (fetching) {
      onScrollCallback()
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
