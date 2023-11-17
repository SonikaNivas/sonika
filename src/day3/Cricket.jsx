import React,{ useState } from 'react'

const Cricket = () => {
    const[count,setCount] = useState(0);
    const[cnt,setCounts]=useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <p>Wickets:{cnt}</p>
      <button className="red-button" onClick={() => setCount(count + 1)}>1</button> &emsp; &emsp;
      <button className="red-button" onClick={() => setCount(count + 2)}>2</button>&emsp; &emsp;
      <button className="red-button" onClick={() => setCount(count + 4)}>4</button>&emsp; &emsp;
      <button className="red-button" onClick={() => setCount(count + 6)}>6</button>&emsp; &emsp;
      <button className="red-button" onClick={() => setCounts(cnt + 1)}> Wicket</button>
      
    </div>
  );
};

export default Cricket