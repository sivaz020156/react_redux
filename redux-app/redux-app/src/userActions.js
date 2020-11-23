import {GET_USER_LIST_STARTED,GET_USER_LIST_SUCCESS,GET_USER_LIST_FAILURE,DELETE_USER_LIST,ADD_USER_LIST,UPDATE_USER_LIST} from '../src/actionTypes';

export const getUsrlistSuccess = data =>{
  console.log("Step 5 :: Prepare to call the respective Reducer");  
      return{
          type : GET_USER_LIST_SUCCESS,
          payload :{data} 

      }

}

export const getUsrlistFailure = error =>{

  return{
      type : GET_USER_LIST_FAILURE,
      payload : {error}

  }

}

export const deleteUserlist = data =>{

  return{
      type : DELETE_USER_LIST,
      payload : {data}

  }

}

export const addUserlist = data =>{

  return{
      type : ADD_USER_LIST,
      payload : {data}

  }

}
export const updateUserlist = data =>{

  return{
      type : UPDATE_USER_LIST,
      payload : {data}

  }

}

