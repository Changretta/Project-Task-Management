import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import { DELETE_PROJECT_TASK } from '../../../actions/types';
import { deleteProjectTask } from '../../../actions/backlogActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";   

class ProjectTask extends Component {

    //creting the function to delete a task and then running it from the onClick event from the button
    onDeleteClick(backlog_id, pt_id){
        this.props.deleteProjectTask(backlog_id , pt_id)
    }

    render() {
        const {project_task} = this.props;
        let priorityString;
        let priorityClass;
        //setting the vars above for defining the priority
        //constructing the columns of tasks acoording tot priority
        

        if(project_task.priority=== 1){
            priorityClass="bg-danger text-light"
            priorityString = "HIGH"
        }
        if(project_task.priority=== 2){
            priorityClass="bg-warning text-light"
            priorityString = "MEDIUM"
        }
        if(project_task.priority=== 3){
            priorityClass="bg-info text-light"
            priorityString = "LOW"
        }
        
        return (
           
            <div className="card mb-1 bg-light">

                <div className={`card-header text-primary ${priorityClass}`}>
                    ID: {project_task.projectSequence} -- Priority: {priorityString}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{project_task.summary}</h5>
                    <p className="card-text text-truncate ">
                        {project_task.acceptanceCriteria}
                    </p>
                    <Link to={`/UpdateProjectTask/${project_task.projectIdentifier}/${project_task.projectSequence}`} className="btn btn-primary">
                        View / Update
                    </Link>

                    <button className="btn btn-danger ml-4" onClick={this.onDeleteClick.bind(this , project_task.projectIdentifier , project_task.projectSequence)}> 
                        Delete
                    </button>
                </div>
            </div>
 
        )
    }
};

ProjectTask.propTypes = {
    deleteProjectTask:PropTypes.func.isRequired
}

export default connect(null , {deleteProjectTask})(ProjectTask);
