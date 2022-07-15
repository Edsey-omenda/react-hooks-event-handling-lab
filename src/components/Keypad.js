// Code Keypad Component Here
import React from 'react';

function Keypad(){

    function handleChange(event) {
        console.log("Entering password...");
      }
    
      return (
        <div>
         <input type="password"  onChange={handleChange} name="password" placeholder="Enter password..." />
        </div>
      );
}

export default Keypad;
