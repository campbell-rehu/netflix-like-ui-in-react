import React from 'react';

export default class TitleList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item) => { return <li key={item.id}>{item.title}</li>})}
            </ul>
        )
    }
}