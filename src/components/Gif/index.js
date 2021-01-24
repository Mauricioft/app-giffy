import React from 'react'
import { Link } from 'wouter'
import PropTypes from 'prop-types'
import './styles.css'

const Git = ({ id, title, url }) => (
  <div className='Gif'>
    <Link
      to={`gif/${id}`}
      className='Gif-link'
    >
      <h4>{title}</h4>
      <img
        loading='lazy'
        src={url}
        title={title}
        alt={title}
      />
    </Link>
  </div>
)

Git.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default React.memo(Git, (prevProps, nextProps) => prevProps.id === nextProps.id)
