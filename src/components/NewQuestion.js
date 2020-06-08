import React,{Component} from 'react';
import {connect} from 'react-redux'
import {HandleAddQuestion} from '../actions/questions';
import {Link} from 'react-router-dom'
import Nav from './Nav';
class NewQuestion extends Component
{
    state={
        optionOne:'',
        optionTwo:''
    }
    handleChange=(name)=>
    {
        return(value)=>{
         if(name==='optionOne'){this.setState(()=>({optionOne:value}))}
         else{this.setState(()=>({optionTwo:value}))}
        }
    }
    handleSubmit=(e)=>
    {
        e.preventDefault();
        this.props.dispatch(HandleAddQuestion(this.state.optionOne,this.state.optionTwo,this.props.authedUser));
        this.props.history.push('/');
       
    }
    render() {
        return (
            <div className='container'>
                <div className='user-top bg-light-gray'>
                    <h3 style={{ textAlign: "center" }} className='info info-sucess'>Hello {this.props.users[this.props.authedUser].name}</h3>
                    <img className='img-thumbnail user-image' style={{ height: '50px', width: '50px' }} src={require(`${this.props.users[this.props.authedUser].avatarURL}`)} alt="can't load"></img>
                </div>
                <Nav></Nav>
                <h3 className='center'>ADD QUESTION</h3>
            <form className='m-10'>
                <div className="form">
                    <div className="col">
                        <label className='label label-info'>OptionOne</label>
                        <input onChange={(e)=>this.handleChange("optionOne")(e.target.value)} value={this.state.optionOne} type="text" className="form-control" placeholder="Enter Option One" />
                    </div>
                    <div className="col">
                       <label className='label label-info'>OptionTwo</label>
                        <input onChange={(e)=>this.handleChange("optionTwo")(e.target.value)} value={this.state.optionTwo} type="text" className="form-control" placeholder="Enter Option Two" />
                    </div>
                </div>
                <button onClick={this.handleSubmit} disabled={this.state.optionOne==='' || this.state.optionTwo===''} style={{textAlign:"center",margin:'10px'}} className='btn btn-info'>Submit</button>
            </form>
            <Link style={{position:"relative",left:'1000px'}} to="/"><button className='btn btn-info'>Back</button></Link>
            </div>
        )
    }
}
function mapStateToProps({users,authedUser,questions})
{
    return{
        authedUser,
        users
    }
}
export default connect(mapStateToProps)(NewQuestion);