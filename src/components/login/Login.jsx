import React from 'react';
import { InputText } from 'primereact/inputtext';
import './Login.scss';
import { useState } from 'react';

const INITIAL_VALUE = {
    username: '',
    password: ''
};

const Login = () => {

    const [loginData, setLoginData] = useState(INITIAL_VALUE)

    const handleLoginInput = ev =>{
        const {name, value} = ev.target;
        setLoginData({...loginData, [name]: value});
        console.log(loginData);
    }
    const submitLoginForm = ev =>{
        ev.preventDefault();
        console.log('Submited!');
    }
    return (
        <section className='postealo__login'>
            <form onSubmit={submitLoginForm}>
                <div className='postealo__login-username'>
                    <span className="p-input-icon-left">
                        <i className="pi pi-user" />
                            <InputText name='username' value={loginData.username} onChange={handleLoginInput} type="text" placeholder="Nombre de usuario" />
                    </span>
                </div>
                <div className='postealo__login-password'>
                    <span className="p-input-icon-left">
                        <i className="pi pi-lock" />
                            <InputText name='password' value={loginData.password} onChange={handleLoginInput} type="password" placeholder="Contraseña" />
                    </span>
                </div>
                <div className='postealo__login-btn'>
                    
                </div>
            </form>
        </section>
    )
}

export default Login