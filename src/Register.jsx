import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import Header from './Header';
function Register() {
    const [errors, seterror] = useState("")

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push('/add');
        }
    })
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const history=useHistory();

    async function Signup(){
        let item={name,email,password};

        console.log(item);
       let result= await fetch('http://127.0.0.1:8000/api/register/',{
           method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
       });
       result=await result.json();
       console.warn("result",result);
       let jsonuser=result;
       if(jsonuser.name){
       localStorage.setItem("user-info", JSON.stringify(result));
       history.push('/add')
       }else{
           seterror('all fields mandatory');
       }
    }
    return (
        <>
            <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1 style={{textAlign:'center'}}>Register</h1>

            <input placeholder="name" value={name} onChange={(e)=>{
setname(e.target.value);
            }} type="text" className="form-control"/>
            <br/>

            <input placeholder="email"  value={email} type="email" onChange={(e)=>{
setemail(e.target.value);
            }}className="form-control"/>
            <br/>

            <input placeholder="password" onChange={(e)=>{
setpassword(e.target.value);
            }}  value={password} type="password" className="form-control"/>
            <br/>
{errors?
           <><span style={{color:'red'}}>{errors}</span><br /> <br /></>:null}

            <button onClick={Signup} className="btn btn-primary">Sign Up</button>
           
        </div>
        </>
    )
}

export default Register
