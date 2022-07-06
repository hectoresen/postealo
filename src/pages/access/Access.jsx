import React from 'react';
import { useState } from 'react';
import { Login, Register } from '../../components';
import appLogo from '../../assets/postealo.svg';
import './Access.scss';

const Access = () => {
    const [registerActive, setRegisterActive] = useState(false);
    return (
        <section className='postealo__access'>
            <div className='postealo__access__forms'>
                <div className='postealo__access__forms-logo'>
                    <img src={appLogo} alt="postealo logo"></img>
                </div>
                {(!registerActive &&
                    <div className='postealo__access__forms-login'>
                        <Login />
                        <div className='postealo__access__forms-needregister'>
                            <p>¿No tienes cuenta? <a href='#' onClick={() => setRegisterActive(true)}>Regístrate</a></p>
                        </div>
                    </div>
                )}
                {(registerActive &&
                    <div className='postealo__access__forms-register'>
                        <Register />
                        <div className='postealo__access__forms-register-back'>
                            <a href='#' onClick={() =>setRegisterActive(false)}>Ir a inicio de sesión</a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Access