import React,{Component} from 'react';
import {connect} from 'react-redux'
import {HandlesaveQuestionAns} from '../actions/questions'
import {Link} from 'react-router-dom'

class Ask extends Component
{
    handleclick=(e)=>{
        e.preventDefault();
        this.props.dispatch(HandlesaveQuestionAns(this.props.authedUser,this.props.question_id,e.target.value));
        console.log(e.target.value);
    }
    render()
    {
        console.log('ask.js->',this.props.authedUser);
        return(
            <div className='container'>
                {/* <h3>Asked By {this.props.question.author}</h3>
                <h5>Would You Rather</h5>
                <button onClick={this.handleclick} value='optionOne' className='btn btn-info'>{this.props.question.optionOne.text}</button>
                <h5>Or</h5>
                <button onClick={this.handleclick} value='optionTwo' className='btn btn-info'>{this.props.question.optionTwo.text}</button> */}
                <div className='card'>
                 <div className="card-header">
                    <h2>Asked By {this.props.question.name}</h2>
                    </div>
                <div className="card-body">
                    <img className='img-thumbnail' style={{height:'150px',width:'150px'}} src={require(`${this.props.author.avatarURL}`)} alt={this.props.author.id}></img>
                        <h5 className="card-title">Would you rather</h5>
                        <button onClick={this.handleclick} value='optionOne' className='btn btn-info'>{this.props.question.optionOne.text}</button>
                        <p>or...</p>
                        <button onClick={this.handleclick} value='optionTwo' className='btn btn-info'>{this.props.question.optionTwo.text}</button>
                        
                    </div>
                    </div>
                    <Link style={{position:"relative",left:'1000px'}} to="/"><button className='btn btn-info'>Back</button></Link>
            </div>
        )
    }
}
function mapStatetoProps({users,questions,authedUser},{question_id})
{
    let question=questions[question_id];
    let author=users[question.author];
    return {
        question,
        authedUser,
        author
    }

}
export default connect(mapStatetoProps)(Ask);