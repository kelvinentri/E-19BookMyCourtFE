import React, { useEffect, useState } from 'react'
import './Authorization.css' 
import axios from 'axios'

function SignUp() {

// const [signUpData,setSignUpData]=useState({
//     name:'',
//     email:'',
//     number:'',
//     password:'',
//     confirmPassword:'',
// })
// const handleChange=(e)=>{
//     console.log(e);
//     // setSignUpData({name:e.target.value})

// }

const [name, setName]=useState('')
const [email,setEmail]=useState('')
const [pass,setPass]=useState('')
 const handlename =(e)=>{
setName(e.target.value)
 }
 const handleEmail=(e)=>{
setEmail(e.target.value)
 }

 useEffect(()=>{
console.log(name,email);
 },[name,email])

 const doSignUp=()=>{
axios.post('http://localhost:5000/auth/signup',{name,email,pass}).then((res)=>{

})
.catch((err=>{
  console.log(err);
}))

 }
  return (
    <div className='signup-box d-flex flex-column p-3'>
<h3 className='text-center'>Signup</h3>
<label htmlFor=""> Name</label>
<input type="text" name='name'  value={name}  onChange={handlename}/>
<label htmlFor="" > Email</label>
<input type="email"  name='email' value={email} onChange={handleEmail}/>
<label htmlFor=""> Mobile Number</label>
<input type="Number" />
<label htmlFor=""  > Password</label>
<input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
<label htmlFor="">Confirm password</label>
<input type="password" value={pass} />
<button className='btn btn-primary mt-3' onClick={doSignUp}> Signup</button>
    </div>

  
  )
}

export default SignUp