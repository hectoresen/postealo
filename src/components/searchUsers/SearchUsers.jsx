import React from 'react';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import './SearchUsers.scss';

const SearchUsers = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className='inputSearch'>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                    <InputText value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search" />
            </span>
        </div>
    )
}

export default SearchUsers;