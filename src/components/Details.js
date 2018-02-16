import React from 'react';
import moment from 'moment';

import Versions from './Versions';

import './Details.css';


class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            versions: []
        }
    }

    componentDidMount() {
        const platform = this.props.match.params.platform;
        const project = this.props.match.params.project;

        // GET PROJECT INFO
        fetch(`https://libraries.io/api/${platform}/${project}?api_key=7fe6c8272399e0590f24124c79180aa0`)
        .then(response => {
            if(response.ok) {
                response.json().then(data => {
                    this.setState({data: data});
                    this.setState({versions: data.versions});
                });
            }
        });
    }

    render() {
        const platform = this.props.match.params.platform;
        const project = this.props.match.params.project;
        const data = this.state.data;
        const versions = this.state.versions;
        const licenses = this.state.data.normalized_licenses;


        const versionList = versions.map(version =>
            <tr key={version.number}>
                <td>
                    {version.number}
                </td> 
                <td key={version.published_at}>
                    {moment(version.published_at).format('MM/DD/YYYY')}
                </td>
                <Versions platform={platform} project={project} version={version.number}/>
            </tr>
        );

        return (
            <div>
                <h1>
                    {project}
                    <small>
                        {platform}
                    </small>
                    <small>
                        {data.language}
                    </small>
                    <small>
                        <a href={data.homepage}>
                            homepage
                        </a>
                    </small>    
                </h1>
                <div className='project-details'>
                    <span>{versions.length} Versions</span>
                    <br/>
                    <span>{data.description}</span>
                </div>
                <div className='project-versions'>
                    <h3>Versions</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Version Number
                                </td>   
                                <td>
                                    Release Date
                                </td>
                                <td>
                                    Dependencies
                                </td>
                            </tr>         
                            {versionList}
                        </tbody>
                    </table>
                </div>
            </div>
        );

    }
}

export default Details;