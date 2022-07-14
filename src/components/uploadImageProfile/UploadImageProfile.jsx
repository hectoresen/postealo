import React from 'react';
import { useState } from 'react';
import styled from "styled-components";
import './UploadImageProfile.scss';

const UploadImageProfile = () => {
    const [previusImg, setPreviusImg] = useState(null);

    const setNewImg = ev => {
        console.log(ev.target.files);
        if (ev.target.files[0] !== undefined) {
            const reader = new FileReader();
            reader.readAsDataURL(ev.target.files[0]);
            reader.onload = (ev) => {
                ev.preventDefault();
                setPreviusImg(ev.target.result);
            };
        }
    }
    return (
        <div className='profileimageupload'>
                <br />
                <div className="profileimageupload__content">
{/*                     {!previusImg &&
                    <div className='profileimageupload__content-text'>
                        <p>Arrastra tu imagen</p>
                        <i className="pi pi-cloud-upload" style={{'fontSize': '2em'}}></i>
                    </div>} */}
                    <input
                        className="file-upload-input"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(ev) => {
                            setNewImg(ev);
                        }}
                    />
                    <img
                        src={previusImg}
                        alt=''
                    />
                </div>
        </div>
    )
}

export default UploadImageProfile;
