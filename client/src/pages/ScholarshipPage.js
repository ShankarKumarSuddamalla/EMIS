import React from 'react'
import { useState } from 'react'
import './bgcss.css'

const ScholarshipPage = () => {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const[res , setRes] = useState(null); 

  const checkeligibility = async(e)=>{ 
    e.preventDefault();
    const response = await fetch("http://localhost:1337/api/getScholarshipData/"+email);
    const data = await response.json();
    if(data.scholarship === true){ 
        setRes('Congratulations! You are eligible for the scholarship and your aggregrate is '+data.aggregate);
    }
    else if(data.aggregate === 0){ 
        setRes('User Does not exist');
    }
    else{ 
        setRes(`Sorry! You are not eligible for the scholarship and your aggregate is  ${data.aggregate}`);
    }

}
  return (
   <div className="page">
      <div className='login-box'>
      <h2>Scholarship Portal</h2>
      <form onSubmit={checkeligibility}>
      <label>Account Name</label>
        <input value={email}
          onChange={(e) => setEmail(e.target.value)} ></input><br/>
          <label>Bank Account Number</label>
        <input value={password}
          onChange={(e) => setPassword(e.target.value)} type="password"></input><br/>
          <input type="submit" value="Check" />
          <br></br>
          {res?(<h3>{res}</h3>):null}
      </form>
      </div>
    </div> 
  )
}

export default ScholarshipPage