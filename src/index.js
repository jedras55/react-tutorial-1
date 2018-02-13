import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyB2E5kwwSZTxEv9b8JeyZ24Np-crEcm8v4';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          videos: [],
          selectedVideo: null,
        };

        this.videoSearch('kiwi');
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos}/>
            </div>
        );
    }

    videoSearch(term){
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos : videos,
          selectedVideo: videos[0]
        });
      });
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));