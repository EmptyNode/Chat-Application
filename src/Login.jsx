import React from 'react'
import "./css/login.css"
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider';
function Login() {
  const [{}, dispatch]= useStateValue()
  const signIn=()=>{
    auth.signInWithPopup(provider).then(result=>{
      dispatch({
        type:"SET_USER",
        user:result.user,
      })
    }).catch(error=>alert(error))
  }
  return (
<div className="login__wrapper">
    <div className="login">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png "/>
        <h2>sign in to whatsapp</h2>
        <button onClick={signIn}>Login with gmail</button>
    </div>
</div>  )
}

export default Login