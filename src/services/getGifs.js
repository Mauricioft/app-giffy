import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(item => {
      const { id, title, images } = item
      const { url } = images.downsized_medium
      return { id, title, url }
    })
    return gifs
  }
  return []
}

const getGits = async ({ limit = 5, keyword = 'rick', page = 0 } = {}) => {
  const apiURL = `${API_URL}/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`
  const response = await fetch(apiURL)
  const json = await response.json()
  return fromApiResponseToGifs(json)
}

export default getGits
