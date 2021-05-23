import React, { useState } from 'react';
import './form.css';


function Form1(){

const [name,setName]=useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
    password:"",
});

function add(event){
        // console.log(event.target.value);
     const{name,value}=event.target;
      setName((preValue)=>{
        return {
            ...preValue,
            [name]:value,
        }
         }
          )

    }
    const listItem=(e)=>{
        // e.preventDefault();
        alert("form submitted");
        console.log(name)
    }
     
    return (
    <>
    <h1 className="heading" >Fill the Form</h1>
    <form className="form_head" onSubmit={listItem}>
    <input type="text"  placeholder="Enter Name" 
    value={name.fname} 
    name="fname"
    className="input" 
    onChange={add}
    required="required"
    />
    <input type="text"  placeholder="Enter Last Name" 
    value={name.lname} 
    name="lname"
    className="input" 
    onChange={add}
    required="required"
    />
     <input type="email"  placeholder="Enter Email" 
    value={name.email} 
    name="email"
    className="input" 
    onChange={add}
    required="required"
    />
    <input type="number"  placeholder="Enter phone" 
    value={name.phone} 
    name="phone"
    className="input" 
    onChange={add}
    required="required"
    />
    <input type="password"  placeholder="Enter Password" 
    value={name.password} 
    name="password"
    className="input" 
    onChange={add}
    required="required"
    autoComplete="off"
    />

<input type="date" id="birthday" name="birthday" required=""/>
    
  <select name="Sex" id="sex">
  <option value="">Sex</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="TransGender">TransGender</option>

  </select>

  <select name="Nationality" id="Nationality">
  <option value="">Nationality</option>
  <option value="India">India</option>
  <option value="Others">Others</option>

  </select>

    <button className="btn" type="submit" value="submit" >Submit</button>
    </form>
    </>

    )
}



export default Form1;