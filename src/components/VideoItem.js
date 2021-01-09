import './VideoItem.css'
import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {

  const { snippet } = video


  return (
    <div className="video-item item"
      onClick={() => {
        onVideoSelect(video)
      }}>
      <img className="ui image"
        src={snippet.thumbnails.medium.url}
        alt={snippet.description}
      />
      <div className="video-item content">
        <div className="header" >{snippet.title}</div>
        {/* <div className="description">{snippet.description}</div> */}
      </div>
    </div>
  )


}

export default VideoItem