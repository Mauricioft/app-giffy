import React, { Fragment, useRef, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import ListOfGifs from 'components/ListOfGifs/'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import GifLoader from 'components/Gif/GifLoader'
import debounce from 'just-debounce-it'

const SearchResults = ({ params }) => {
  const { keyword } = params
  const externalRef = useRef()
  const { gifs, loading, setPage } = useGifs({ keyword })
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandlerNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 1000
  ), [setPage])

  useEffect(() => {
    if (isNearScreen) debounceHandlerNextPage()
  }, [debounceHandlerNextPage, isNearScreen])

  const hasListOfGifs = () => (
    <Fragment>
      <h3 className='App-title'>{ decodeURI(keyword) }</h3>
      <ListOfGifs gifs={gifs} />
      <div
        id='visor'
        ref={externalRef}
      />
    </Fragment>
  )

  return (
    <Fragment>
      {
        loading
          ? <GifLoader />
          : hasListOfGifs()
      }
    </Fragment>
  )
}

SearchResults.propTypes = {
  params: PropTypes.object
}

export default SearchResults
