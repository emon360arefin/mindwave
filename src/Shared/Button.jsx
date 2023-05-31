import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    
    return (
        <button className='px-6 py-2 h-10 md:py-px w-40 md:w-auto rounded bg-[#1E90FF] text-white text-center'>
            {props.children}
        </button>
    );
};

export default Button;