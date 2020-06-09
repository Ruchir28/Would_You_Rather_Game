import React,{Component} from 'react';
import {connect} from 'react-redux'
import Ask from './Ask'
import Result from './Result'
import NotFound from './NotFound';
class Question extends Component
{
    render()
    {
        console.log('props',this.props)
        if(this.props.question===undefined)
        {
            return(<NotFound/>)
        }
        else{
        return(
            <div>
                {!this.props.isanswered?(<Ask question_id={this.props.match.params.id}></Ask>):(<Result question_id={this.props.match.params.id}></Result>)}
            </div>
        )
        }
    }
}
function mapStateToprops({users,questions,authedUser},{match})
{
    let user=users[authedUser];
    let useranswers=Object.keys(user.answers);
    let isanswered=useranswers.includes(match.params.id);
    let question=questions[match.params.id];
    return{
        question,
        isanswered
    }

}
export default connect(mapStateToprops)(Question)