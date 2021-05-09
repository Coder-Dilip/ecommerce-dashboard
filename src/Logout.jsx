import React from 'react'
import {useHistory} from 'react-router-dom';

function Logout() {
    let history=useHistory();
    if(localStorage.getItem('user-info')){
    localStorage.removeItem("user-info");
    history.push('/register');
    }else{
        history.push('/')
    }

    return (
        <div>
            
        </div>
    )
}

export default Logout
