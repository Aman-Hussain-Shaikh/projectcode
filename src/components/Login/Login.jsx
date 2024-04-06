
import React, { useState , useEffect } from 'react'
import './Login.css'
import {useNavigate , Link} from 'react-router-dom'

function Login() {
    const [username , setUsername] = useState('')
    const [loginSuccess , setloginSuccess] = useState(false)
    const [password , setPassword] = useState('')
    const [errorMessage , seterrorMessage] = useState("")

    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            navigate('/')
        }
    },[navigate])

    const handleLogin= async()=>{
        try{
            const response = await fetch('https://dummyjson.com/auth/login',{
                method:'POST',
                headers :{'Content-Type' :'application/json'},
                body:JSON.stringify({
                    username ,
                    password,
                })

            })
            if(!response.ok)
            {
                throw new Error('Invalid credentials');
            }
            const data = await response.json();
            localStorage.setItem('token',data.token);
            setloginSuccess(true);
            navigate('/')
        }
        catch(error){
            seterrorMessage(error.message)
        }
    }

  return (
    <>
        <div className='login-container'> 
            <h2>Login</h2>
            {loginSuccess && <p className='success'>Login successfull</p>}
            {errorMessage && <p className='error'>{errorMessage}</p>}

            <form onSubmit={(e)=>{e.preventDefault(); handleLogin();}}>

                    <div className='form-group'>
                <label>Username</label>   
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className='form-control'  required/>
                </div>
                <div className='form-group'>
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' required/>
                </div>
                <button className='btn' type='submit'>Submit</button>
            </form>

            <div className="Register">
                New User ? <Link to='/register'>Regiser here</Link>
            </div>

        </div>

    </>
  )
}

export default Login