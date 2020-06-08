import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Result extends Component{
    render()
    {
        let optionOne=this.props.question.optionOne.votes.length;
        let optionTwo=this.props.question.optionTwo.votes.length;
        let total=optionOne+optionTwo;
        let per1=(optionOne/total).toPrecision(2);
        let per2=(optionTwo/total).toPrecision(2);
        return(<div className='container '>
            <div>Results</div>
            <div className='card'>
                 <div className="card-header">
                    <h2>Asked By {this.props.author.name}</h2>
                    </div>
                <div className="card-body">
                    <img className='img-thumbnail' style={{height:'150px',width:'150px'}} src={require(`${this.props.author.avatarURL}`)} alt={this.props.author.id}></img>
                        <h5 className="card-title">Would you rather</h5>
                        <span style={{fontFamily:'cursive'}}>{this.props.question.optionOne.text}</span>
                        <div className='option-container'>
                            <div style={{width:`${per1*100}%`,height:'100%',backgroundColor:'coral'}}>
                                <p style={{position:'absolute',fontFamily:'cursive',fontSize:'20px',color:'grey'}}>{per1*100}%</p>
                            </div>
                        </div>
                        <span style={{fontFamily:'cursive',fontSize:'25px',textDecorationStyle:'solid'}}>{`${optionOne} out of ${total} Votes`}</span>
                        {this.props.userVote==='optionOne'?(<button style={{marginLeft:'10px'}} className='btn btn-success'>Your Vote</button>):""}
                        <p>or...</p>
                        <span style={{fontFamily:'cursive'}}>{this.props.question.optionTwo.text}</span>
                        <div className='option-container'>
                            <div style={{width:`${per2*100}%`,height:'100%',backgroundColor:'coral'}}>
                                <p style={{position:'absolute',fontFamily:'cursive',fontSize:'20px',color:'grey'}}>{per2*100}%</p>
                            </div>
                        </div>
                        <span style={{fontFamily:'cursive',fontSize:'25px',textDecorationStyle:'solid'}}>{`${optionTwo} out of ${total} Votes`}</span>
                        {this.props.userVote==='optionTwo'?(<button style={{marginLeft:'10px'}} className='btn btn-success'>Your Vote</button>):""}
                        
                    </div>
                    </div>
                    <Link style={{position:"relative",left:'1000px'}} to="/"><button className='btn btn-info'>Back</button></Link>
        </div>)
    }
}
function mapStateToprops({users,questions,authedUser},{question_id})
{
    let question=questions[question_id];
    let userVote=question.optionOne.votes.includes(authedUser)?'optionOne':'optionTwo';
    let author=users[question.author];
    return{
        question,
        userVote,
        author
    }
}
export default connect(mapStateToprops)(Result);
