
const STORAGE_KEY = 'reviews'

const fetch = () => {
  const data = localStorage.getItem(STORAGE_KEY)

  if(data === undefined || data === null) {
    return []
  }

  const reviews = JSON.parse(data)

  return reviews
}

const persist = (reviews) => {
  const data = JSON.stringify(reviews)
  localStorage.setItem(STORAGE_KEY, data)
}

export default {
  fetch,
  persist
}


