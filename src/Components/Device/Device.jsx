import React, { useState } from 'react';
import './Device.css'
const Device = () => {
    const [steps,setSteps]=useState(0);
    const RunDe=()=>{
        // if (steps>100) {
        //    newSteps= steps+5;
        // }
        const newSteps=steps+1;
        // console.log(setSteps)
        setSteps(newSteps)
    }
    const Daraw=()=>{
        if (steps===0) {
            return
        }
        const newDAra=steps-1;
        setSteps(newDAra)
    }
    return (
        <div className='container'>
            <h1>Steps:{steps}</h1>
            <button className='button' onClick={RunDe}>De..Dour</button>
            <button className='button' onClick={Daraw}>Daraw.</button>
        </div>
    );
};

export default Device;