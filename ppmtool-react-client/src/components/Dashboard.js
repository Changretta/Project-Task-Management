import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';
// import AddProject from './Project/AddProject';
import CreateProjectButton from './Project/CreateProjectButton';
import {connect} from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";
// import { projects } from '../index';

class Dashboard extends Component {

    UNSAFE_componentDidMount() {
        this.props.getProjects();
    }


    render() {

        const {projects} = this.props.project;;

        return (
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Projects</h1>
                        <br />
                            <CreateProjectButton />
                        <br />
                        <hr />
                        {projects.map(project => (
                            <ProjectItem key={project.id} project={project}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    
     //   <!-- End of Dashboard Component -->
    
                );            
    }
}



Dashboard.propTypes = {
    project: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
};

//get the project from index.js
const mapStateToProps = state => ({
    project:state.project,

});

export default connect(mapStateToProps, { getProjects })(Dashboard) ;