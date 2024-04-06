
import React,{useState , useEffect} from 'react'

import './Register.css'

import {useNavigate , Link} from 'react-router-dom'

function Register(){

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [email , setEmail] = useState('')
    const [firstName  , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [errorMessage , setErrorMessage] = useState('')
    const [successMessage , setSuccessMessage] = useState('')

    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token)
        {
            navigate('/')
        }
    },[navigate])

    const handleRegister =(e)=>{
        e.preventDefault();

        if(!username || !password || !email || !firstName || !lastName)
        {
            setErrorMessage('All Fields are required')
            return
        }

        try{

            const token = generateJWTToken();
            localStorage.setItem('token',token)

            setSuccessMessage('Registration Successful!');
            navigate('/')

        }
        catch(error){
            setErrorMessage('Registration failed')
        }
    }

    const generateJWTToken = ()=>{
        const payload = {
            username ,
            email,
            firstName,
            lastName
        }
        const token = btoa(JSON.stringify(payload));

        return token;
    }

    return(
        <>
            <div className='register-container'>
                <h2>Regiser </h2>
                {errorMessage && <p className='error'>{errorMessage}</p>}
                {successMessage && <p className='success'>{successMessage}</p>}
                <form onSubmit={handleRegister}>
                    <div className='form-group'>
                        <label>Username : </label>
                        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className='form-control' required />
                    </div>
                    <div className='form-group'>
                        <label>Password : </label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' required />
                    </div>
                    <div className='form-group'>
                        <label>Email : </label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' required />
                    </div>
                    <div className='form-group'>
                        <label>First Name : </label>
                        <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className='form-control' required />
                    </div>
                    <div className='form-group'>
                        <label>Last Name : </label>
                        <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className='form-control' required />
                    </div>

                    <button type='submit' className='btn'>Register</button>

                </form>
                <div className='login-link'>
                    Already registered ? <Link to='/login'>Login Here</Link>
                </div>

            </div>

        </>
    )

}

export default Register;