import React from 'react'

function VideoDetail({ video }) {
    if (!video) {
        return <h4>Loading...</h4>
    }

    const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className='ui embed'>
                <iframe src={VideoSrc} title='video player' />
            </div>
            <div className='ui segment'>
                <h4 className='ui header'> {video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail
