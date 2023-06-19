import React, { useState } from 'react'
import './Calculate.css';


function Cal(){
   let [answer,setAnswer]=useState('');

   let handleClick=(p)=>{
    if(answer==="Invalid expression")
    {
      setAnswer(p.target.name)
    }
    else
    {
    setAnswer(answer.concat(p.target.name))
    }
   }

   const clear=()=>{
   setAnswer('');
   }


   const calculate=()=>{
    try{
    setAnswer(eval(answer).toString)
    }
    catch(err){
      setAnswer('Invalid expression')
    }
    
   }
    
   return(
    <div className=' container calci '>
      <div>
      <input type='text'  className='point text-dark border border-dark rounded  m-auto w-100' value={answer}  readOnly/>
      <div className='keypad '>
        <button name='1' onClick={handleClick} className='number'>1</button>
        <button name='2' onClick={handleClick} className='number'>2</button>
        <button name='3' onClick={handleClick} className='number'>3</button>
        <button name='+' onClick={handleClick} className='number'>+</button>
        <button name='4' onClick={handleClick} className='number'>4</button>
        <button name='5' onClick={handleClick} className='number'>5</button>
        <button name='6' onClick={handleClick} className='number'>6</button>
        <button name='-' onClick={handleClick} className='number'>-</button>
        <button name='7' onClick={handleClick} className='number'>7</button>
        <button name='8' onClick={handleClick} className='number'>8</button>
        <button name='9' onClick={handleClick} className='number'>9</button>
        <button name='*' onClick={handleClick} className='number'>*</button>
        <button onClick={clear} id='clear' className='number1'>clr </button>
        <button name='0' onClick={handleClick} className='number'>0</button>
        <button name='.' onClick={handleClick} className='number'> .</button>
        <button name='/' onClick={handleClick} className='number'>/</button>
        
      </div>
      <div className='point  m-auto' id='answer'>
      <button onClick={calculate} className='number1 w-100'>=</button>
      </div>
      </div>
    </div>
   )

}

export default Cal;