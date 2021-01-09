import axios from 'axios'
const KEY = 'AIzaSyA7TFmhXkXItcs2dcMMQxt7k48yMfkcZ2c'

export default axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  headers: {
    'content-type': 'application/json'
  },
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
})
