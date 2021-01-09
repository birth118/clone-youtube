import React from 'react'
import VideoItem from './VideoItem'

export default class VideoList extends React.Component {


  render() {

    //console.log(this.props.videos)
    const videoList = this.props.videos.map((video) => {
      return (
        <div key={video.id.videoId} className="item">
          <VideoItem video={video} onVideoSelect={this.props.onVideoSelect} />
        </div>
      )
    })

    return (
      <div className="ui relaxed divided list">
        {videoList}
      </div>
    )
  }


}
