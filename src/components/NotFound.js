import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class NotFound extends Component
{
    render()
    {
        return(
            <div style={{textAlign:"center",backgroundColor:'gray',margin:'auto'}}>
                <h2>404</h2>
                <h4>Looks like u are Lost.Click below to return back to our website</h4>
               <Link to='/'><button className='btn btn-danger'>Click here</button></Link>
            </div>
        )
    }
}
export default NotFound;