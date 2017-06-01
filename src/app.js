import React from 'react';
import ReactDOM from 'react-dom';

import TitleList from './TitleList';
import Search from './search';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchedMovies: [],
            searchUrl: '',
            apiKey: '21bcec6fc9c9ab14d65341df7842343f'
        };
    }

    handleKeyUp(term) {
        var searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=21bcec6fc9c9ab14d65341df7842343f&query=${term}`;            
        fetch(searchUrl)
            .then((res) => {
                res.json()
                    .then(data => {
                        var foundMovies = data.results;
                        this.setState({ searchedMovies: foundMovies });
                    });
            })
            .catch((err) => {
                console.log(err)
            });
        this.setState({ searchUrl: searchUrl });
    }

    render() {
        return (
            <div>
                <header>
                    <Search searchTerm={this.handleKeyUp.bind(this)}/>
                </header>
                <TitleList title="Search Results" url={this.state.searchUrl} />
                <TitleList title="Top TV Picks" url={'discover/tv?sort_by=popularity.desc&page=1'} />
                <TitleList title="Trending Movies" url={'discover/movie?sort_by=popularity.desc&page=1'} />
            </div>        
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));