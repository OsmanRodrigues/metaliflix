import {useState} from 'react';

const useForm =(initialValues)=>{
  const [values, setValues] = useState(initialValues)

  const handleChange = (event) =>{
    const {value, name} = event.target
    setValues({...values, [name]: value})
  }
  
  const clearForm =()=> setValues(initialValues)

  return {values, setValues, handleChange, clearForm}
}

export{useForm}