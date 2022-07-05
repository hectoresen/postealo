import React from 'react';
import { useState } from 'react';
import { Login } from '../../components';
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
                    </div>
                    )}
            </div>
        </section>
    )
}

export default Access