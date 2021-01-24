import React from 'react'
import { Link } from 'wouter'
import PropTypes from 'prop-types'
import './styles.css'

const Category = ({ name, options = [], ...props }) => {
  return <div className={props.className}>
    <h3 className="Category-title">{name}</h3>
    <ul className="Category-list">
      {
        options.map(singleOption => (
          <li key={singleOption}>
            <Link
              className="Category-link"
              to={`/search/${singleOption}`}
            >
              { singleOption }
            </Link>
          </li>
        ))
      }
    </ul>
  </div>
}

Category.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  className: PropTypes.string
}

export default Category
