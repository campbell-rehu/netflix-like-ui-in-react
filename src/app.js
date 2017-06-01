import React from 'react';
import ReactDOM from 'react-dom';

import TitleList from './TitleList';

class App extends React.Component {
    constructor() {
        super();
        apiKey = '21bcec6fc9c9ab14d65341df7842343f';
        this.state = {
            searchTerm: '',
            searchUrl: ''
        };
    }

    handleChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    handleKeyUp(event) {
        if (event.key === 'Enter' && this.state.searchTerm !== '') {
            var searchUrl = `https://api.themoviedb.org/3/${this.props.searchUrl}&api_key=${this.apiKey}`;
            fetch(searchUrl)
                .then((data) => {
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }

    render() {
        return (
            <div>
                <input
                    type="search"
                    name="title"
                    value={this.state.searchTerm}
                    onKeyUp={this.handleKeyUp.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Search for a title" />
            </div>        
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));