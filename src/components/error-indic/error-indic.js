import React from 'react';
import './error-indic.css';
import icon from './death-star.png';



const ErrorIndic = () => {
    return(
        <div className='error-indic'>
            <img src={icon} alt="error icon"/>
            <span className='boom'>
                BOOM
            </span>
            <span>
                something has gone terribly wrong 
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    )
}

export default ErrorIndic;