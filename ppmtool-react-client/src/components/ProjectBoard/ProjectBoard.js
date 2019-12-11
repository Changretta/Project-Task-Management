import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Backlog from './Backlog';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../../actions/backlogActions"
// import { DH_NOT_SUITABLE_GENERATOR } from 'constants';


    //set constructor to handle errors
    //set the Link to the addProjecttask component
    //set the id in the constructor
    //use the id in the projectAddTask  as a param
    //import the addProjectTask to app.js

    //destructure the values in the render part
 class ProjectBoard extends Component {


    constructor() {
        super();
        this.state = {
            errors:{}
        };
    }

    componentDidMount(){
        const  {id} =this.props.match.params
        this.props.getBacklog(id)

    }
     
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }


    render(){
            const {id} = this.props.match.params;
            const {project_tasks} = this.props.backlog
            const {errors } =this.state;
            let BoardContent;
            
            
            // write the algorithm to prevent navigating the app through the URL bar
            //if anything else is written besides the the name of the components it will pop an error to the user
            //else that there is no project on the board
            const boardAlgorith = (errors , project_tasks) => {
                if(project_tasks.length < 1){
                    if(errors.projectNotFound){
                          return ( <div className="alert alert-danger text-center" role="alert">
                            {errors.projectNotFound}
                            </div>);
                    } else {
                       return (<div className="alert alert-info text-center" role="alert">
                        No project tasks on this board
                        </div>);
                    }
                } else {
                  return  <Backlog project_tasks_prop={project_tasks}/>;

                }
            };

            //destructuring the BoardContent
            BoardContent = boardAlgorith(errors , project_tasks);


        return (
            <div className="container">
        <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />
        {BoardContent}
        </div>

        );
        
    }
}

ProjectBoard.propTypes = {
    backlog:PropTypes.object.isRequired,
    getBacklog:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}


const mapStateToProps = state=>({
    backlog:state.backlog,
    errors:state.errors
    
})

export default connect(mapStateToProps, {getBacklog}) (ProjectBoard);