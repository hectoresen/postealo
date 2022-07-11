import React from 'react';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import { registerUser } from '../../redux/actions/auth.actions';
import './Register.scss';
import { useEffect } from 'react';

const INITIAL_VALUE = {
  name: '',
  email: '',
  password: ''
};

const Register = ({dispatch, user}) => {
  const [registerData, setRegisterData] = useState(INITIAL_VALUE);
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  useEffect(() =>{
    console.log(user);
    if(user != null){
      setRegistered(true);
    }
  },[user])

  const handleRegisterInput = ev =>{
    const {name, value} = ev.target;
    setRegisterData({...registerData, [name]: value})
  };

  const submitRegisterForm = ev =>{
    ev.preventDefault();
    dispatch(registerUser(registerData));
  };

  const registerOkNav = () => {
    setTimeout(() =>{
      navigate('/home');
    },1000)
  };
  return (
    <>
    {registered &&
    <div className='register-ok'>
      <h4>Registrado correctamente!</h4>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <p>En unos segundos serás redirigido...</p>
      {registerOkNav()}
    </div>}
    {!registered &&
    <section className='postealo__register'>
      <form onSubmit={submitRegisterForm}>
        <div className="postealo__register-username">
          <span className="p-input-icon-left">
              <i className="pi pi-user" />
            <InputText name='name' value={registerData.name} onChange={handleRegisterInput} type="text" placeholder="Nombre de usuario" />
          </span>
        </div>
        <div className="postealo__register-email">
          <span className="p-input-icon-left">
              <i className="pi pi-envelope" />
            <InputText name='email' value={registerData.email} onChange={handleRegisterInput} type="email" placeholder="Correo electrónico" />
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
    }
    </>
  )
};

const mapStateToProps = (state) =>({
  user: state.auth.user
});


export default connect(mapStateToProps)(Register);