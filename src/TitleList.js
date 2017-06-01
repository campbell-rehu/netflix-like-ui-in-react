import React from 'react';

export default class TitleList extends React.Component {
    title() {
        if (this.props.items.length !== 0) {
            return <h1>{this.props.title}</h1>
        }    
    }
    
    render() {
        return (
            <div>
                {this.title()}
                <ul>
                    {this.props.items.map((item) => { return <li key={item.id}>{this.props.tv ? item.name : item.title}</li>})}
                    </ul>
            </div>    
        )
    }
}