import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyAOWfoa08luBSzhmToysNtwMgo3mGBjD54';


// Create new component to produce html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (data) => {
            this.setState({ videos: data,
                selectedVideo: data[0]
            });
        });
    }

    render() {
        // debounce throttles the number of times that videoSearch function is called
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                />
            </div>
        );
    }
}

// Insert components html and display on page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
