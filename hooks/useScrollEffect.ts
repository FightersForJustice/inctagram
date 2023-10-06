import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const useScrollEffect = (
  onScrollCallback: () => void,
  fetching: boolean,
  setFetching: Dispatch<SetStateAction<boolean>>
) => {
  useEffect(() => {
    if (fetching) {
      onScrollCallback()
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
