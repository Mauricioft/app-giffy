import React, { Suspense } from 'react'
import TrendingSearchesLoader from './TrendingSearchesLoader'
import useNearScreen from 'hooks/useNearScreen'

const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)

const LazyTrending = () => {
  const { isNearScreen, fromRef } = useNearScreen()

  const hasTrendingSearches = () => (
    <Suspense fallback={<TrendingSearchesLoader />}>
      <TrendingSearches />
    </Suspense>
  )

  return <div ref={fromRef}>
    {
      isNearScreen
        ? hasTrendingSearches()
        : <TrendingSearchesLoader />
    }
  </div>
}

export default LazyTrending
