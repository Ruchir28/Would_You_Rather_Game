import React,{Component} from 'react';
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './Home'
import Question from './Question'
import NewQuestion from './NewQuestion'
import Login from './Login'
import LeaderBoard from './LeaderBoard';
import NotFound from './NotFound';
class App extends Component
{
  componentDidMount()
  {
    this.props.dispatch(handleInitialData());
  }
  render()
  {
    console.log(this.props);
    const {authedUser}=this.props;
    return(
      <div>
        {authedUser===null?(<Login></Login>):
     <BrowserRouter>  
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/question/:id' component={Question}></Route>
        <Route exact path='/add' component={NewQuestion}></Route>
        <Route exact path='/LeaderBoard' component={LeaderBoard}></Route>
        <Route component={NotFound}></Route> 
      </Switch>

      </BrowserRouter>
      }
      </div>
      )
      
  }
}
function mapStatetoProps({authedUser})
{
  return {
    authedUser
  }
}
export default connect(mapStatetoProps)(App);