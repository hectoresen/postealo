import React from 'react';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Button } from 'primereact/button';
import './Login.scss';

const INITIAL_VALUE = {
    username: '',
    password: ''
};

const Login = () => {

    const [loginData, setLoginData] = useState(INITIAL_VALUE)

    const handleLoginInput = ev =>{
        const {name, value} = ev.target;
        setLoginData({...loginData, [name]: value});
    };
    const submitLoginForm = ev =>{
        ev.preventDefault();
        console.log(loginData);
    };
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
                    <Button label="Iniciar sesión" className="p-button-raised p-button-primary" />
                </div>
            </form>
                <div className='postealo__login-passremember'>
                    <a href='#'>He olvidado mi contraseña</a>
                </div>
        </section>
    )
}

export default Login;