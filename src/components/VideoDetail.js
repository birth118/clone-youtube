import React from 'react'

const VideoDetail = ({ video }) => {

  if (!video) {
    return <div> Loading...</div>
  }

  return (

    <div>
      <div className="ui segment">
        <div className="ui embed">
          <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
          />

        </div>
        <h4 className="ui header">{video.snippet.title} </h4>
        <p className="ui description">{video.snippet.description} </p>
      </div>

    </div>
  )
}

export default VideoDetail