import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { useVideos } from '../hooks/useVideos'


// const KEY = 'AIzaSyA7TFmhXkXItcs2dcMMQxt7k48yMfkcZ2c'

const App = () => {


  const [selecedVideo, setSelecedVideo] = useState(null)
  const [videos, search] = useVideos()

  useEffect(() => {
    setSelecedVideo(videos[0])
    return () => {
      // cleanup
    }
  }, [videos])


  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSearchSubmit={search} />
      <h5>Searched {videos.length} video clips</h5>
      <div className="ui grid">
        <div className="ui row">
          <div class="eleven wide column">
            {videos && <VideoDetail video={selecedVideo} />}
          </div>
          <div class="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={setSelecedVideo} />
          </div>
        </div>

      </div>


    </div>

  )

}

export default App