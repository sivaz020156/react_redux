
import './App.css';
import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getUserList,deleteUserList,addUserList,updateUserList} from './userAsyncActions';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    id: '',
    employeeName:''  
  }
  handleIdChange = event => {
    this.setState({ id: event.target.value });
   
  }
  handlenameChange = event => {
    this.setState({ employeeName: event.target.value }); 
  }
  componentDidMount(){
    console.log("Step 1:: Call the Backend to load the Data");
    this.props.getUserList();
     
  }
  handleDelete=e=>{
    this.props.deleteUserList(this.state.id);
  }
  handleAdd=e=>{
    this.props.addUserList(this.state.id,this.state.employeeName);
    console.log(this.state.id,"id",this.state.employeeName,"name")
  }
  handleUpdate=e=>{
    this.props.updateUserList(this.state.id,this.state.employeeName);
  }

render(){
  const {userObj} = this.props;
  if(null!=userObj){
    console.log("Step 8 :: Populate the Table using the userObj---->",userObj);  
    console.log("Step 9 :: Data load to table will now happen successfully");
    }
  return( 
      <div>
       <table border="2" className="table-striped">
        <thead>
          <th>Employee_ID</th>
          <th>Employee_NAME</th>
        </thead>
        <tbody>
        {userObj && userObj.map((d, i) => <tr key={i}>
              <td>{d.id}</td>
              <td>{d.employeeName}</td>            
            </tr>)}
        </tbody>
       </table>
       <br></br>
       <div className="form-group">
       ID<input className ="form-control" style={{width :"20%"}} type="text"  name="id" onChange={this.handleIdChange} /><br></br>
       Employee_NAME<input className ="form-control" style={{width :"20%"}} type="text"  name="employeeName" onChange={this.handlenameChange} /><br></br>
       </div>
       <button className="btn-primary" style={{marginRight :"10px"}}  onClick={this.handleDelete}>Delete</button>
       <button className="btn-primary"  style={{marginRight :"10px"}}  onClick={this.handleAdd}>Add</button>
       <button className="btn-primary"  onClick={this.handleUpdate}>Update</button>
      </div>
  )
}
}


const mapStateToProps = (state) => {
  if(null!=state.data){
  console.log("Step 7 :: Now take the value from state and set to userObj -->",state.data); 
  }
  
  return {
       userObj: state.data
       
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  getUserList: () =>dispatch(getUserList()),
   deleteUserList: id =>dispatch(deleteUserList(id)),
   addUserList: (id,employeeName) =>dispatch(addUserList(id,employeeName)),
   updateUserList: (id,employeeName) =>dispatch(updateUserList(id,employeeName))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App)
  

