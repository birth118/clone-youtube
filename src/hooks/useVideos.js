import { useState, useEffect } from 'react'
import client from '../api/youtube'

export const useVideos = (searchTerm = '') => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    search(searchTerm)
    return () => {
      //cleanup
    }
  }, [searchTerm])

  const search = (term) => {
    client.get('/search', {
      params: { q: term }
    }).then(({ data }) => {
      // console.log(data)
      setVideos(data.items)

    }).catch((err) => { console.log(err); })
  }

  return [videos, search]


}
