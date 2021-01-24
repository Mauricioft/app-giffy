import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('')

  const handlerSubmit = evt => {
    evt.preventDefault()
    if (keyword !== '') {
      onSubmit({ keyword })
    }
  }
  
  const handlerChange = evt => setKeyword(evt.target.value)
  
  return (
    <form onSubmit={handlerSubmit}>
      <button>Buscar</button>
      <input
        type="text"
        value={keyword}
        onChange={handlerChange}
        placeholder='Search a gif here...'
      />
    </form>
  )
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default React.memo(SearchForm)