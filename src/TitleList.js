import React from 'react';
import Title from './Title';

export default class TitleList extends React.Component {
    title() {
        if (this.props.items.length !== 0) {
            return (
                <div>
                    <hr style={{ width: '90%', 'margin-top': '20px' }} />        
                    <h2 className="section-title">{this.props.title}</h2>
                </div>    
            );
        }    
    }
    
    render() {
        var items = this.props.items;
        var isTV = this.props.tv;
        var out = items.map(item => {
            var posterPath = item.poster_path ? `https://image.tmdb.org/t/p/w150/${item.poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png';
            var title = isTV ? item.name : item.title;
            return (
                <Title key={item.id} posterPath={posterPath} title={title}/>
            )
        });
        return (
            <div>
                {this.title()}
                <div className="pure-g">
                    {out}    
                </div>
            </div>    
        )
    }
}