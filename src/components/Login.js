import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

class Login extends Component {
    state={
        select:''
    }
    handlechange=(value)=>
    {
        this.setState(()=>({select:value}));
    }
    handleSubmit=(e)=>
    {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(this.state.select));

    }
    render() {
        
        return (
            <div className='container'>
                <p className="h4 mb-4 text-center">Sign in</p>

                <select onChange={(e)=>this.handlechange(e.target.value)} value={this.state.select}  className="browser-default custom-select mb-4" id="select">
                   <option  value="" disabled="" defaultValue>Choose your option</option>
                    {this.props.userids.map(id=>(<option key={id} value={id}>{this.props.users[id].name}</option>))}
                </select>

                <button disabled={this.state.select===''} onClick={this.handleSubmit} className="btn btn-info btn-block my-4" type="submit">Sign in</button>

            </div>
        )
    }
}
function mapStateToProps({users})
{
    let userids=Object.keys(users);
    return{
        users,
        userids
    }
}
export default connect(mapStateToProps)(Login);