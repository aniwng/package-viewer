import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    'platform': 'npm',
                    'name': 'mocha'
                },
                {
                    'platform': 'npm',
                    'name': 'grunt'
                },
                {
                    'platform': 'npm',
                    'name': 'underscore'
                }
            ]
        }
    }


    render() {
        const data = this.state.data;
        const listItems = data.map(component =>
        <li key={component.name}>
            <a href={`/${component.platform}/${component.name}`}>
            {component.name}
            </a>
        </li> 
        );
        return (
        <div>
            <h4>Components</h4>
            <ul>
            {listItems}
            </ul>
        </div>
        );
    }
}

export default List;