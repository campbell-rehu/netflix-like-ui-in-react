import React from 'react';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }

    mouseOver() {
        this.setState({ hover: true });
    }

    mouseOut() {
        this.setState({ hover: false });
    }    

    cursor() {
        return this.state.hover ? 'pointer' : '';
    }

    render() {
        return (
            <div className="pure-u-1-2 pure-u-sm-1-4 pure-u-md-1-6 pure-u-lg-1-8" style={{ background: `#000 no-repeat url(${this.props.posterPath}) center` }} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.mouseOver.bind(this)}>
                {this.state.hover ? <p className="item-title">{this.props.title}</p> : ''}
            </div>
        );
    }
}