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
            apiKey: '21bcec6fc9c9ab14d65341df7842343f',
            urlStart: 'https://api.themoviedb.org/3',
            topTV: [],
            topMovie: []
        };
    }

    componentDidMount() {
        var topTVUrl = `${this.state.urlStart}/discover/tv?api_key=${this.state.apiKey}&sort_by=popularity.desc&page=1`
        var topMovieUrl = `${this.state.urlStart}/discover/movie?api_key=${this.state.apiKey}&sort_by=popularity.desc&page=1`
        this.fetch(topTVUrl);
        this.fetch(topMovieUrl);
    }
    fetch(url) {
        fetch(url)
            .then((res) => {
                res.json()
                    .then((data) => {
                        this.setState({ topTV: data.results });
                    })
                    .catch((err) => { console.log(err) });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    handleKeyUp(term) {
        var searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=21bcec6fc9c9ab14d65341df7842343f&query=${term}`;            
        fetch(searchUrl)
            .then((res) => {
                res.json()
                    .then(data => {
                        var foundMovies = data.results;
                        this.setState({ searchedMovies: foundMovies });
                    })
                    .catch((err) => { console.log(err) });
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
                <TitleList title="Search Results" items={this.state.searchedMovies} />
                <TitleList title="Top TV Picks" items={this.state.topTV}/>
                <TitleList title="Trending Movies" items={this.state.topMovie}/>
            </div>        
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));