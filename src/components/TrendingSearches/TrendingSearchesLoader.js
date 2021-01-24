import React from 'react'
import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'

const TrendingSearchesLoader = ({ speed, viewBox, backgroundColor, foregroundColor, ...arg }) => (
  <ContentLoader
    speed={speed}
    width={400}
    height={150}
    viewBox={viewBox}
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...arg}
  >
    <circle cx="10" cy="20" r="8" />
    <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
    <circle cx="10" cy="50" r="8" />
    <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
    <circle cx="10" cy="80" r="8" />
    <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
    <circle cx="10" cy="110" r="8" />
    <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
  </ContentLoader>
)

TrendingSearchesLoader.propTypes = {
  speed: PropTypes.number,
  viewBox: PropTypes.string,
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
  arg: PropTypes.object
}

// Especifica los valores por defecto de props:
TrendingSearchesLoader.defaultProps = {
  speed: 1,
  viewBox: '0 0 400 460',
  backgroundColor: '#f3f3f3',
  foregroundColor: '#ecebeb'
}

export default TrendingSearchesLoader
