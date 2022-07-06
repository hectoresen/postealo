import React from 'react';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Button } from 'primereact/button';
import './Register.scss';

const INITIAL_VALUE = {
  username: '',
  password: ''
};

const Register = () => {
  const [registerData, setRegisterData] = useState(INITIAL_VALUE);

  const handleRegisterInput = ev =>{
    const {name, value} = ev.target;
    setRegisterData({...registerData, [name]: value})
  };

  const submitRegisterForm = ev =>{
    ev.preventDefault();
    console.log(registerData);
  };

  return (
    <section className='postealo__register'>
      <form onSubmit={submitRegisterForm}>
        <div className="postealo__register-username">
          <span className="p-input-icon-left">
              <i className="pi pi-user" />
            <InputText name='username' value={registerData.username} onChange={handleRegisterInput} type="text" placeholder="Nombre de usuario" />
          </span>
        </div>
        <div className='postealo__register-password'>
          <span className="p-input-icon-left">
            <i className="pi pi-lock" />
              <InputText name='password' value={registerData.password} onChange={handleRegisterInput} type="password" placeholder="Contraseña" />
          </span>
        </div>
        <div className='postealo__login-btn'>
          <Button label="Registrarme" className="p-button-raised p-button-primary" />
        </div>
      </form>
    </section>
  )
}

export default Register;