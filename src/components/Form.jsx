import React, { useState } from 'react'
import './Form.css';

function Form() {
    const [reviweText,setReviweText]=useState("")
    const handleChange = (e) => {
          setReviewText(e.target.value);
       };
    
      
    }
    const handleSumit=(e)=>{
        e.preventDefault();
        const newReviwe={
            text: reviewText,
        }

    }
  return (
    <div>
        <form onSubmit={handleSumit}>
        <textarea cols="30" rows="12" placeholder='type reviwe here...' value={reviweText} onChange={handleChange}></textarea>
        <span>
         <div className='icon'>
        <p style={{margin:"0"}}>200 lelf </p>
        <p>5/18/2023</p>
            </div>   
        
        <i class="fa-sharp fa-solid fa-trash" ></i>
        <button>x</button>
        </span>
        
        </form>
        

    </div>
  )
}

export default Form