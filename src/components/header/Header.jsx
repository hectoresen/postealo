import React from 'react';
import SearchUsers from '../searchUsers/SearchUsers';
import appLogo from '../../assets/postealo.svg';
import './Header.scss';

const Header = () => {
    return (
        <div className='postealo__header'>
            <div className='postealo__header-logo'>
                <img src={appLogo} alt="postealo logo"></img>
            </div>
            <div className='postealo__header-search'>
                <SearchUsers />
            </div>
            <div className='postealo__header-nav'>
                nav
            </div>
        </div>
    )
}

export default Header