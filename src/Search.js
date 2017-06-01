import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    
    handleSearch(event) {
        this.setState({ searchTerm: event.target.value });
    }

    handleSubmit(event) {
        if (event.key === 'Enter' && this.state.searchTerm !== '') {
            this.props.searchTerm(this.state.searchTerm);
        }    
    }

    render() {
        return (
            <div id="search" className="Search">
                <input id="search"
                    type="search"
                    name="title"
                    onChange={this.handleSearch.bind(this)}
                    onKeyUp={this.handleSubmit.bind(this)}
                    placeholder="Search for a title" />
            </div>
        );
    }
}