import { useState, useEffect, useContext } from 'react'
import GifsContext from '../context/GifsContext'
import getGits from '../services/getGifs'

const INITIAL_PAGE = 0

const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(GifsContext)

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    setLoading(true)

    const fetchData = async () => {
      const response = await getGits({ keyword: keywordToUse })
      setGifs(response)
      setLoading(false)
      localStorage.setItem('lastKeyword', keyword)
    }

    fetchData()
  }, [keyword, keywordToUse, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)

    const fetchData = async () => {
      const nextGifs = await getGits({ keyword: keywordToUse, page })
      // setGifs(prevGifs => [...prevGifs, ...nextGifs])
      setGifs(prevGifs => prevGifs.concat(nextGifs))
      setLoadingNextPage(false)
      localStorage.setItem('lastKeyword', keyword)
    }

    fetchData()
  }, [page, keywordToUse])

  return {
    gifs,
    setPage,
    loading,
    loadingNextPage
  }
}

export default useGifs
