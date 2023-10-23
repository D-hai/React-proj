import React, { useState } from "react";
const AgeCalcc =()=>{
    const [age,setAge]=useState()
    const[dr,setDr]=useState("")

const check =()=>{
    if (age>=18){
        setDr("ELIGIBLE")}
    else{
        setDr("NOT ELIGIBlE") }
}
const b={backgroundColor: 'pink', width: 350,padding:20,margin:'auto',textAlign: 'center',marginTop:180}
return(
    <>
    
    <div style={b}>
    <h1>VOTE and LLR calculator</h1>
    <h2>Enter your age</h2>
    <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
    <br></br><br></br>
    <button onClick={check}>CHECK</button>
    {dr!="" && <p>The result is {dr}</p>}
    </div>
    </>
)}

export default AgeCalcc;