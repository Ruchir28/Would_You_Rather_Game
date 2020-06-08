import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class ViewQuestion extends Component {
    render() {
        return (
            <div>
                {/* <h2>Asked By {this.props.author.name}</h2>
            <img src={require(`${this.props.author.avatarURL}`)} alt={this.props.author.id}></img>
            <p>{this.props.question.optionOne.text}</p> */}
                <div className="card">
                    <div className="card-header">
                    <h2>Asked By {this.props.author.name}</h2>
                    </div>
                    <div className="card-body">
                    <img className='img-thumbnail' style={{height:'150px',width:'150px'}} src={require(`${this.props.author.avatarURL}`)} alt={this.props.author.id}></img>
                        <h5 className="card-title">Would you rather</h5>
                        <p className="card-text">{this.props.question.optionOne.text}</p>
                        <p>or...</p>
                        <Link to={`question/${this.props.question_id}`} className="btn btn-primary">{this.props.isanswered?"Results":"View Poll"}</Link>
                    </div>
                </div>
                
            </div>

        )
    }


}
function mapStatetoProps({ users, questions, authedUser }, { question_id }) {
    let question = question_id !== null ? questions[question_id] : null;
    let author = users[question.author];
    let isanswered=Object.keys(users[authedUser].answers).includes(question_id);
    return {
        question,
        author,
        isanswered
    }

}
export default connect(mapStatetoProps)(ViewQuestion);