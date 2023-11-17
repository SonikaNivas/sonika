import React,{useState} from 'react'

const Toggle = () => {
    const[isVisible ,setVisible]=useState(false);
    const handleClick=() =>{
        setVisible(!isVisible);
    };
  return (
    <div>
        <button onClick={handleClick}>Show Message</button>;
        {isVisible===true?<p>Hi Everyone</p>:null}
    </div>
  );
};

export default Toggle