import React, { useState, useEffect } from 'react'
import Category from 'components/Category'
import getTrendingTerms from 'services/getTrendingTermsService'

const TrendingSearches = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTrendingTerms()
      setTrends(response)
    }
    fetchData()
  }, [])

  return <Category
    name="Tendencias"
    options={trends}
  />
}

export default TrendingSearches
