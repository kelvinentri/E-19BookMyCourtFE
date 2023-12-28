import React, { useState } from 'react'
import './LoginPage.css'
import SignUp from '../../components/Authorization/SignUp'
import Login from '../../components/Authorization/Login'

function LoginPage() {
  const [boxtype,setBoxType]=useState('signup')
  return (
    <div className='login_container d-flex justify-content-center align-items-center'>
{boxtype==='signup' && <SignUp  toggleBox={setBoxType}/>}
{boxtype==='login' && <Login toggleBox={setBoxType}/>}

{/* <button onClick={()=>setBoxType('login')}>login</button>
<button onClick={()=>setBoxType('signup')}>signup</button> */}
    </div>
  )
}

export default LoginPage