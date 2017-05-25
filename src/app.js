import React from 'react';
import ReactDOM from 'react-dom';

import TitleList from './TitleList';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            searchUrl: ''
        };
    }

    handleChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    handleKeyUp(event) {
        var myInit = {
            method: 'GET',
            headers: new Headers(),
            mode: 'no-cors',
            cache: 'default'
        };

        if (event.key === 'Enter' && this.state.searchTerm !== '') {
            var searchUrl = `http://localhost:8000/search/${this.state.searchTerm}`;
            fetch(searchUrl).then((data) => { console.log(data) }).catch((err) => { console.log(err) });
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