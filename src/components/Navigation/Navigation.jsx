

import React from 'react'
import {Link , useNavigate} from 'react-router-dom'

import './Navigation.css'


function Navigation() {
    const navigate = useNavigate()
    const handleLogout =()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
  return (
    <>
        <nav className='navigation'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/add-product'>Add Product</Link>
                </li>
            </ul>

            <div className='logout' onClick={handleLogout}>Logout</div>

        </nav>
    </>
  )
}

export default Navigation