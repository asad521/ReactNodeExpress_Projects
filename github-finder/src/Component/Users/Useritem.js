import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
  const Useritem = ({users:{login, avatar_url, html_url, }}) => {
      //to add staet to this component , add construction with super method
        //state is just object
    // constructor() {
    //     super();
    //     console.log(123)
    //     this.state = {
    //         id :'2',
    //         login:'defunkt',
    //         avatar_url:'https://avatars.githubusercontent.com/u/2?v=4',
    //         html_url: 'https://github.com/defunkt'
    //     }}
    //    state = {
    //         id :'2',
    //         login:'defunkt',
    //         avatar_url:'https://avatars.githubusercontent.com/u/2?v=4',
    //         html_url: 'https://github.com/defunkt'
    //     }
            //destruction from state 
            

    // const { login, avatar_url, html_url} =props.users;
         return (
            
            <div className="card text-center"> 
            
            {/* double {{is inline style}} */}
        
            <img src={avatar_url}  alt="" className="round-img" 
            style={{width:'60px'}}  />
            <h3>{login}</h3>
            
            <div>
                <Link to={`/User/${login}`} className="btn btn-dark btn-sm my-1">
                More</Link></div>
            </div>

        )
    }
  


export default Useritem
