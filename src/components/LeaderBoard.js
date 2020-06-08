import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Nav from './Nav';

class LeaderBoard extends Component
{
    render()
    {
        console.log(this.props.usersArray);
        return(
            <div className='container'>
                <div className='user-top bg-light-gray'>
                    <h3 style={{ textAlign: "center" }} className='info info-sucess'>Hello {this.props.users[this.props.authedUser].name}</h3>
                    <img className='img-thumbnail user-image' style={{ height: '50px', width: '50px' }} src={require(`${this.props.users[this.props.authedUser].avatarURL}`)} alt="can't load"></img>
                </div>
                <Nav></Nav>
                <h1 style={{textAlign:'center'}}>LeaderBoard</h1>
                {this.props.usersArray.map(user => (<div key={user.id}>
                    <div className='user-card container'>
                        <div className='user-name'>
                            <h3>{user.name}</h3>
                            </div>
                        <div className='user-container'>
                            <div className='user-image-1'>
                                <img style={{height:'150px',width:'150px'}} src={require(`${user.avatarURL}`)} alt="can't load"></img>
                            </div>
                            <div className='user-details'>
                                <p>Questions Created:<span>{user.questions.length}</span></p>
                                <p>Question Answered:<span>{Object.keys(user.answers).length}</span></p>
                            </div>
                            <div className='user-score'>
                                <span>
                                {user.questions.length+Object.keys(user.answers).length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>))}
                <Link style={{position:"relative",left:'1000px'}} to="/"><button className='btn btn-info'>Back</button></Link>
            </div>
        )
    }

}
function mapStateToProps({users,authedUser})
{
    let userIds=Object.keys(users);
    let usersArray=userIds.map(id=>users[id]);
    usersArray=usersArray.sort((a,b)=>{
        let q1=b.questions.length+Object.keys(b.answers).length;
        let q2=a.questions.length+Object.keys(a.answers).length;
        return q1-q2;});

    return{
        usersArray,
        userIds,
        authedUser,
        users
    }
}
// function formatUser(user)
export default connect(mapStateToProps)(LeaderBoard);