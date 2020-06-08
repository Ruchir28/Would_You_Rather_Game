import React,{Component} from 'react';
import {connect} from 'react-redux';
import {removeAuthedUser} from '../actions/authedUser'
import ViewQuestion from './ViewQuestion'
import Nav from './Nav';
class Home extends Component
{
  state={
    unanswered:true
  }
  logout=(e)=>
  {
    e.preventDefault();
    this.props.dispatch(removeAuthedUser());

  }
  handleChange=(val)=>
  {
    this.setState(()=>({unanswered:val}))
  }
  
  render()
  {
    console.log(this.props);
    return(<div className='container'>
      {this.props.authedUser===null?(<div>Loading....</div>):
      (<div>
        <div className='user-top bg-light-gray'>
        <h3 style={{textAlign:"center"}} className='info info-sucess'>Hello {this.props.users[this.props.authedUser].name}</h3>
        <img className='img-thumbnail user-image' style={{height:'50px',width:'50px'}} src={require(`${this.props.users[this.props.authedUser].avatarURL}`)} alt="can't load"></img>
        </div>
        <Nav></Nav>
        <button onClick={this.logout} className='logout-button btn btn-danger'>LogOut</button>
        <br></br>
        <button onClick={(e)=>this.handleChange(false)} className='btn btn-success answered-button'>Answered</button>
        <button onClick={(e)=>this.handleChange(true)} className='btn btn-danger'>Unanswered</button>
        {this.state.unanswered?(<ul>
          <h1>Unanswered</h1>
          {this.props.unanswered.map(item=>(<li key={item}><ViewQuestion question_id={item}></ViewQuestion></li>))}
        </ul>):<ul>
         <h1>Answered</h1>
          {this.props.answered.map(item=>(<li className='mb-5' key={item}><ViewQuestion question_id={item}></ViewQuestion></li>))}
        </ul>}
        
        </div>)}
    </div>)
  }
}
function mapStatetoprops({questions,users,authedUser})
{
  let checkquestions=Object.keys(questions);
  let answered=authedUser===null?[]:Object.keys(users[authedUser].answers).sort((a,b)=>questions[b].timestamp-questions[a].timestamp)
  let unanswered=authedUser===null?[]:checkquestions.filter(id=>!answered.includes(id)).sort((a,b)=>questions[b].timestamp-questions[a].timestamp);
  return {
    answered,
    unanswered,
    authedUser,
    users
  }

}
export default connect(mapStatetoprops)(Home);