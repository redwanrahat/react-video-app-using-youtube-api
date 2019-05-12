import React, {Component} from 'react'
import './SearchBar.css'

class SearchBar extends Component {
    state = {
        term: ''
    }
    onFormSubmit = e =>{
        return(
            e.preventDefault(),
            this.props.search(this.state.term)
        )
    }
    render(){      
        return(
            <div className="search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <div className="ui icon input">
                        <input 
                            type="text"
                            value={this.state.term} 
                            placeholder="search videos"
                            onChange = {e => this.setState({term: e.target.value})}
                         />
                        <i class="search icon"></i>
                        </div>
                    </div>
                </form>   
            </div>
        )
    }
}

export default SearchBar