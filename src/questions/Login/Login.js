import React, { useState } from 'react'
import LoginForm from './LoginForm';
import './Login.css'

export default function Login() {
    const AdminDetails = {
        name: 'Achal',
        email: 'achal@gmail.com',
        password: 'Achal123'
    }

    const [activeUser, setactiveUser] = useState({ name: '', password: '', email: '' });
    const [errorUser, seterrorUser] = useState('')

    const checkCorrectUser = (detailsOfUser) => {
        console.log(detailsOfUser)
        console.log(AdminDetails)
        if (detailsOfUser.name == AdminDetails.name && detailsOfUser.email == AdminDetails.email && detailsOfUser.password == AdminDetails.password) {
            setactiveUser(detailsOfUser)
            seterrorUser('')
        }
        else {
            seterrorUser('Please enter correct details')
        }
        console.log(activeUser)
    }
    const logout = () => {
        setactiveUser({ name: '', password: '', email: '' })
    }


    return (
        <div className='login'>
            {errorUser == '' && activeUser.email != '' && activeUser.password != ''
                ? <form>
                    <div className='form-wrapper'>
                        <label className='form-group'>Welcome {activeUser.name}</label>
                        <input className='submit' type='button' value='Logout' onClick={logout} />
                    </div>
                </form>

                : <LoginForm checkCorrectUser={checkCorrectUser} errorUser={errorUser} />}

        </div>
    )
}
