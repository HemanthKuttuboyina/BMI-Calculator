import React, { useState } from 'react'

export function BasicInput() {
  const [weight,setWeight] = useState('');
  const [height,setHeight] = useState('');
  const [result,SetResult] = useState('');

  const handleBMI = (e) =>{
    e.preventDefault();
    SetResult(weight/(height*height));
  }

  return (
    <>
      <form onSubmit={handleBMI}>
        <label >Enter Your Weight:</label>
        <input type="text" onChange={val=> setWeight(val.target.value)} />
        <br />
        <br />
        <label>Enter Your Height:</label>
        <input type="text" onChange={val => setHeight(val.target.value)}/>
        <br />
        <br />
        <button type="submit" >Calculate</button>
      </form>
      <h1>Your BMI Score:{result}</h1>
    </>
  )
}

export default BasicInput