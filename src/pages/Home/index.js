import React, { Fragment, useCallback } from 'react'
import { useLocation } from 'wouter'
import SearchForm from 'components/SearchForm'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'
import GifLoader from 'components/Gif/GifLoader'

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, pushLocation] = useLocation()
  const { gifs, loading } = useGifs()

  const handlerSubmit = useCallback(({ keyword }) => {
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])

  return (
    <Fragment>
      <SearchForm onSubmit={handlerSubmit} />
      <div className="App-main">
        <div className="App-results">
          <h3 className='App-title'>Última búsqueda</h3>
          {
            loading
              ? <GifLoader />
              : <ListOfGifs gifs={gifs} />
          }
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </Fragment>
  )
}

export default Home
