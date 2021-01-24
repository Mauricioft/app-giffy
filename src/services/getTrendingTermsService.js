import { API_KEY, API_URL } from './settings'

const getTrendingTerms = async () => {
  const apiURL = `${API_URL}/v1/trending/searches?api_key=${API_KEY}`
  const response = await fetch(apiURL)
  const { data = [] } = await response.json()
  return data
}

export default getTrendingTerms
