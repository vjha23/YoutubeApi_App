import React, { Component } from 'react'
import SearchBar from './component/SearchBar'
import youtube from './api/youtube'
import VideoList from './component/VideoList'
import VideoDetail from './component/VideoDetail'

export class ParentYoutube extends Component {
    state = {
        videos: [],
        selectedVideos: null
    }
    componentDidMount() {
        this.onTermSubmit('your name')
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        console.log(response);
        this.setState({
            videos: response.data.items,
            selectedVideos: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideos: video })
    }


    render() {
        return (
            <div>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideos} />
                        </div>
                        <div className='five wide column'>
                            <VideoList videos={this.state.videos} videoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ParentYoutube
