import React from 'react'
import Spinner from './Spinner'

const VideoDetail = ({video}) =>{
    if(!video){
        return(
            <Spinner />
        )
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <div>
            <div className="ui embed">
                <iframe allowFullScreen="true" src = {videoSrc} title={video.snippet.title}/>
            </div>
            <div style={{marginTop: "25px"}}>
                <h3 className="ui header">{video.snippet.title}</h3>
                <div className="channel-title">
                    {video.snippet.channelTitle}
                </div>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail