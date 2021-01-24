import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext({})

export const GifsContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState([])

  return <Context.Provider value={{ gifs, setGifs }}>
    { children }
  </Context.Provider>
}

GifsContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
}

export default Context
