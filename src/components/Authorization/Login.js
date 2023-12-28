import React, { useState } from 'react'
import './Authorization.css'
import axios from 'axios'

function Login() {
    const [logCre, setLogCre]=useState({email:'',password:''})  
//       logCre=  {
    //     email:'',
    //     password:''
    //     }

const handleChange=(e)=>{
setLogCre({...logCre,[e.target.name]:e.target.value})
}
const doLogin=()=>{
    console.log(process.env.REACT_APP_BE_URL);
    axios.post(`${process.env.REACT_APP_BE_URL}/auth/login`,logCre).then((res)=>{
if( res.message==='Login successfull'){
    // navigate to home page 
}
    })
    .catch((res)=>{
        debugger
        if(res.response.data.message==='invalid credentials'){
            alert(res.response.data.message)
        }else{
            alert('something went wrong')
        }
    })
}
  return (
    <div className='signup-box d-flex flex-column p-3'>
    <h3 className='text-center'>Login</h3>
    <label htmlFor="" > Email</label>
    <input type="email"  name='email' value={logCre.email} onChange={handleChange}/>
    <label htmlFor=""  > Password</label>
    <input type="password" name='password' value={logCre.password} onChange={handleChange}/>

    <button className='btn btn-primary mt-3' onClick={doLogin}> Signup</button>
        </div>
    
  )
}

export default Login