import React from 'react'
import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'

const GifLoader = ({ speed, viewBox, backgroundColor, foregroundColor, ...arg }) => (
  <ContentLoader
    speed={speed}
    width={400}
    height={460}
    viewBox={viewBox}
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    {...arg}
  >
    <rect x="7" y="330" rx="2" ry="2" width="400" height="14" />
    <rect x="7" y="-3" rx="2" ry="2" width="400" height="316" />
  </ContentLoader>
)

GifLoader.propTypes = {
  speed: PropTypes.number,
  viewBox: PropTypes.string,
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
  arg: PropTypes.object
}

// Especifica los valores por defecto de props:
GifLoader.defaultProps = {
  speed: 1,
  viewBox: '0 0 400 460',
  backgroundColor: '#f3f3f3',
  foregroundColor: '#ecebeb'
}

export default GifLoader
