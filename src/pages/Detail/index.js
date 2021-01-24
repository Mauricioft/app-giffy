import React, { Fragment } from 'react'
import Gif from 'components/Gif'
import useGlobalGifs from 'hooks/useGlobalGifs'
import PropTypes from 'prop-types'

const Detail = ({ params }) => {
  const gifs = useGlobalGifs()
  const gif = gifs.find(item => item.id === params.id)
  return (
    <Fragment>
      <h3 className='App-title'>{ gif.title }</h3>
      <Gif
        id={gif.id}
        title={gif.title}
        url={gif.url}
      />
    </Fragment>
  )
}

Detail.propTypes = {
  params: PropTypes.object
}

export default Detail
