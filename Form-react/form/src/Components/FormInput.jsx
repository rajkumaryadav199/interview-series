import React, { useState } from 'react'

const FormInput = () => {
    const [data, setData]=useState({
        email:"",
        password:"",
        id:""
    })

    const [array, setArray]=useState([])
   

    const handleChange=(e)=>{
       const name=e.target.name;
       const value=e.target.value;

       
       setData({
        ...data, [name]:value
       })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
         const newData={...data}

         setArray([...array, newData])
         setData({
            email:"",
            password:"",
            id:""
         })
     
       }
console.log("value", array)
  return (
    <div>
<form onSubmit={handleSubmit}>
<input type="email" name="email" value={data.email} onChange={handleChange}/>

<input type="password" name="password" value={data.password} onChange={handleChange}/>


      
<input type="submit"  />
</form>
    </div>
  )
}

export default FormInput
