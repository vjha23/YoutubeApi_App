import React from 'react'
import '../css/video.css'

function VideoItem({ video, videoSelect }) {
    return (
        <div className='video_item item' onClick={() => videoSelect(video)}>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className='content'>
                <div className='header'> {video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem
