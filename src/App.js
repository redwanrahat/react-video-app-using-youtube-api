import React, {Component} from 'react'
import youtube from './apis/youtube'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';

class App extends Component {
  state= {videos: [], videoSelected: null}
  componentDidMount(){
    this.onSearchSubmit('why you should develop in react')
  }
  onSearchSubmit = async term =>{
      const response = await youtube.get("/search", {
        params: {
          q: term
        }
      })
      this.setState({
        videos: response.data.items,
        videoSelected: response.data.items[0]
      })
      console.log(this.state.videos)
  }
  onVideoSelect = (video) =>{
    this.setState({
      videoSelected: video})
  }
  render(){
    return(
      <div className="ui container">
        <SearchBar search = {this.onSearchSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail 
                video={this.state.videoSelected}
              />
            </div>
            <div className="six wide column">
              <VideoList 
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
