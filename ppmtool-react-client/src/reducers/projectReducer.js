import { GET_PROJECT, DELETE_PROJECT,GET_PROJECTS  } from '../actions/types';

//set the initial state
//create a function with the initial state of i created and the action
//switch statement with GET_PROJECT action as trigger and state and action.payload as a result


const initialState = {
    projects: [],
    project: {}

};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PROJECTS:
        return {
            ...state,
            projects:action.payload
        };
        case GET_PROJECT:
        return {
            ...state,
            project:action.payload
        };
        case DELETE_PROJECT:
        return {
            ...state,
            projects: state.projects.filter(project => project.projectIdentifier !== action.payload
                )   
        };
        
    default: 
        return state;
    }
}