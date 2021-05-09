import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Header from './Header';
function Login() {
let history=useHistory();
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [errors, seterror] = useState("")
async function login(){
   let item={email,password}
   console.log(item);
   let result= await fetch('http://127.0.0.1:8000/api/login/',{
    method:"POST",
     headers:{
         "Content-Type":"application/json",
         "Accept":"application/json"
     },
     body:JSON.stringify(item)
});
result=await result.json();
console.warn("result",result.name);
localStorage.setItem("user-info", JSON.stringify(result));
const errormessages=JSON.parse(localStorage.getItem('user-info'));
if(errormessages.email){
    
history.push('/')
}else{
    localStorage.removeItem("user-info");
    seterror(errormessages.error);
}
}
    return(
        <>
        <Header />
    <div style={{display:'flex',flexDirection:'column', width:'80%', margin:'auto'}}>
<h1 style={{textAlign:'center'}}>Login</h1>

<input type="text" className="form-control"  value={email} placeholder="email" onChange={(e)=>setemail(e.target.value)}/>
<br/>
<input type="password" className="form-control"  value={password} placeholder="password" onChange={(e)=>setpassword(e.target.value)} required={true}/>
<br/>
{errors?<span style={{color:'red'}}>{errors}</span>:null}
<button type='submit' onClick={login} className="btn btn-primary">Login</button>
    </div>
    </>
    )
}

export default Login
