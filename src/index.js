import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD_D7UQGeefBAfpI9RTteD20P87li6hW9M';



//Create a new component. This component should produce some HTML
//JS special func, constructor 
//constructor is the first and only func called automatically 
//whenever a new instance of class created

//constructor func is reserved to do some setup inside of our class 
//like initializing variables, state, etc
//when we define a method that already define on the parent class (Component)
//we call that parent method on parent class by calling super
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('satriyo')
	}


	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term }, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
			// ES5 this.setState({ videos: videos })
			console.log(videos);
		});		
	}
//render first array video on video detail as selectedVideo state
//passing props videos to VideoList
//passing callback function from app into VideoList, from videolist to video list item
//if video list item click play on video detail
	render() {

		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);


		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}


//Take this component's generated HTML & put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));