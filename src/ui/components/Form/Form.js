import React from 'react';
import './Form.css';

function Form() {
    const name = <span>Игорь</span>;


    return (
        <div className='formClass'>
            <input type="text" placeholder='Destination'/>
            <input type="text" placeholder='Check-in'/>
            <input type="text" placeholder='Check-out'/>
            <input type="text" placeholder='Adults'/>
            <input type="text" placeholder='Children'/>
            <button className='formSearch'>SEARCH</button>
        </div>
    );
}

export default Form;
