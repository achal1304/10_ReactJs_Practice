import React, { useState } from 'react'

export default function LoginForm({ checkCorrectUser, errorUser }) {
    const [currentDetails, setcurrentDetails] = useState({ name: '', email: '', password: '' });

    const onSubmitDetaiils = (e) => {
        e.preventDefault();
        checkCorrectUser(currentDetails);
    }


    return (
        <div>
            <form>
                <div className='form-wrapper'>
                    <div className='form-group'>
                        <label id='name'>Name</label>
                        <input type='text' id='name' onChange={(e) => { setcurrentDetails({ ...currentDetails, name: e.target.value }) }} value={currentDetails.name} />

                    </div>
                    <div className='form-group'>
                        <label id='email'>Email</label>
                        <input type='text' id='email' onChange={(e) => { setcurrentDetails({ ...currentDetails, email: e.target.value }) }} value={currentDetails.email} />

                    </div>
                    <div className='form-group'>
                        <label id='password'>Password</label>
                        <input type='text' id='password' onChange={(e) => { setcurrentDetails({ ...currentDetails, password: e.target.value }) }} value={currentDetails.password} />

                    </div>
                    <input type='button' className='submit' id='submit' value='Submit' onClick={onSubmitDetaiils} disabled={currentDetails.name == '' || currentDetails.email == '' || currentDetails.password == ''} />
                    {errorUser != '' ? <label className='error' id='error'>{errorUser}</label> : null}
                </div>
            </form>

        </div>
    )
}
