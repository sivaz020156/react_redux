
import {getUsrlistSuccess,deleteUserlist,addUserlist,updateUserlist} from './userActions';
import axios from 'axios';
  export const getUserList = () => async dispatch => {
    console.log("Step 2 :: Call the Backend starts"); 
    axios.get("http://localhost:8080/getEmployee").then((res)=>{
      console.log("Step 3 :: Call the Backend to completed the data ",res.data); 
      console.log("Step 4 :: Dispatch the data to Action");
        dispatch(getUsrlistSuccess(res.data));

    })

  }
  export const deleteUserList = (id) => async dispatch => {
    console.log(id,"uma")
    
    axios.delete(`http://localhost:8080/deleteEmployee/${id}`).then((res)=>{

        console.log(res.data);
        axios.get("http://localhost:8080/getEmployee").then((res)=>{
        dispatch(getUsrlistSuccess(res.data));
        

    })        
      dispatch(deleteUserlist(res.data));
    }).catch((error)=>{
        console.log(error)

    })

  }
  
  export const addUserList = (id,employeeName) => async dispatch => { 
    axios.post("http://localhost:8080/saveEmployee",{
      "id": id,
      "employeeName": employeeName
      
    })
      .then((res)=>{
          console.log(res,"data");
          axios.get("http://localhost:8080/getEmployee").then((res)=>{
          dispatch(getUsrlistSuccess(res.data));
      }) 
        dispatch(addUserlist(res.data));     
    })
      .catch((error)=> {    
          console.log(error)

      })

  }

  export const updateUserList = (id,employeeName) => async dispatch => { 
    axios.put("http://localhost:8080/updateEmployee",{
      "id": id,
      "employeeName": employeeName
      
    })
    .then((res)=>{
      console.log(res,"data");
        console.log(res.data); 
        axios.get("http://localhost:8080/getEmployee").then((res)=>{
        dispatch(getUsrlistSuccess(res.data));
    }) 
    dispatch(updateUserlist(res.data));       
    })
    .catch((error)=> {    
        console.log(error)

    })

  }