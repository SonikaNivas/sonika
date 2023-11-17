import { useState } from 'react'

const CricketCounts = ()=> {
    const[ count, setCount]= useState(0);
    const[ counts, setCounts]= useState(0);
  return (
    <div>
        <p>Runs: {count} &emsp; Wickets: {counts}</p>

        <button  style={{backgroundColor:"cyan"} }  onClick={()=>setCount(count+1)}>RUNS:1</button>{'   '}
        <button style={{backgroundColor:"cyan"} } onClick={()=>setCount(count+2)}>RUNS:2</button> &emsp;
        <button  style={{backgroundColor:"cyan"} } onClick={()=>setCount(count+4)}>RUNS:4</button> &emsp;
        <button style={{backgroundColor:"cyan"} } onClick={()=>setCount(count+6)}>RUNS:6</button> &emsp;
        <button style={{backgroundColor:""} } onClick={()=>setCounts(counts+1)}>WICKET</button> &emsp;
        <button style={{backgroundColor:"red"} } onClick={()=>setCount(0)}>Reset</button> &emsp;
    </div>
  );
};

export default CricketCounts;