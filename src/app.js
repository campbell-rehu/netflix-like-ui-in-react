import React from 'react';
import ReactDOM from 'react-dom';

import TitleList from './TitleList';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            searchUrl: ''
        };
    }

    handleChange(event) {

    }

    handleKeyUp(event) {
        if (event.key === 'Enter' && this.state.searchTerm !== '') {
            var searchUrl = `search/multi?query=${this.state.searchTerm}+`
        }
    }

    render() {
        return (
            <div>
                <input
                    type="search"
                    name="title"
                    value={this.state.searchTerm}
                    onKeyUp={this.handleKeyUp}
                    onChange={this.handleChange}
                    placeholder="Search for a title" />
                <TitleList></TitleList>
            </div>        
        )
    }
}