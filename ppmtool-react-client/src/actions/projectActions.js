import axios from 'axios';
import { GET_ERRORS , GET_PROJECTS, GET_PROJECT , DELETE_PROJECT } from "./types";

//import axios to communicate with the backend 
//import the functions that we need 
// createProject for creating a project and adding it on the addProject component
//getting the appropriate errors


export const createProject = (project , history ) => async dispatch =>  {
    try {
        await axios.post("/api/project", project)
        history.push("/dashboard")
        dispatch({
            type:GET_ERRORS,
            payload:{}
        });
    } catch (err) {
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            });
    }

};

// the same here create the funciton with axios as the middleware 
// Get projects action and payload the result data otherwise state

export const getProjects = () => async dispatch => {
    const res = await axios.get("/api/project/all")
    dispatch({
        type: GET_PROJECTS,
        payload:res.data

    });
};
export const getProject = (id , history) => async dispatch => {
    
    try {
        const res = await axios.get(`/api/project/${id}`)
        dispatch({
            type:GET_PROJECT,
            payload:res.data
        });
    } catch (error) {
        history.push('/dashboard');
    } 
};

export const deleteProject = id => async dispatch => {
    if (window.confirm("are you sure ? this will delete the project and all the data related"
    )
) {
    await axios.delete(`/api/project/${id}`)
    dispatch({
        type:DELETE_PROJECT,
        payload:id
    });
}

    

};