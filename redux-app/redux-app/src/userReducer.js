
import {GET_USER_LIST_STARTED,GET_USER_LIST_SUCCESS,GET_USER_LIST_FAILURE, DELETE_USER_LIST,ADD_USER_LIST,UPDATE_USER_LIST} from '../src/actionTypes';

const initialState = {
    data : null,
    deldata:null,
    updatedata:null,
    adddata:null,
    error : null
}

export default function appReducer(state = initialState , action){
    switch(action.type){
      case GET_USER_LIST_STARTED : return{

          state

      }
      case GET_USER_LIST_SUCCESS : 
      console.log("Step 6 :: Reducer will now set the data to state and state will get updated");  
      const {data} = action.payload;
      return{

        state,
        data

          }
    case GET_USER_LIST_FAILURE :
      const {error} = action.payload;
        return{

          state,
            error

      }
    case DELETE_USER_LIST :
        const {deldata} = action.payload;
      return{
        state,
          deldata
    }
    case ADD_USER_LIST:
        const {adddata} = action.payload;
      return{
        state,
        adddata
    }
    case UPDATE_USER_LIST :
        const {updatedata} = action.payload;
      return{
        state,
        updatedata
    }



    default:
          return state


      }
      
}
