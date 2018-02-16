import React from 'react';

import './Versions.css';

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dependencies: []
        }
    }

    componentDidMount() {
        setTimeout(()=> {
            fetch(`https://libraries.io/api/${this.props.platform}/${this.props.project}/${this.props.version}/dependencies?api_key=7fe6c8272399e0590f24124c79180aa0`)
            .then(response => {
                if(response.ok) {
                    response.json().then(data => {
                        this.setState({dependencies: data.dependencies});
                    });
                }
            });
        });
        
    }

    render() {
        const dependencies = this.state.dependencies;
        const listItems = dependencies.map(component =>
            <span className="dependencies-link" key={component.name}>
                <a href={`/${component.platform.toLowerCase()}/${component.project_name.toLowerCase()}`}>
                {component.project_name}
                </a>
            </span> 
        );
        
        return (
            <td>
                {listItems}
            </td>
        );
    }
}

export default List;