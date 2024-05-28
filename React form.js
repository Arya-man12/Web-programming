import { useState } from 'react'; 
import styles from './styles.css'; 
// import ReactDOM from 'react-dom/client'; 
function Myform(){ 
  const[inputs,setInputs]=useState({}); 
  const [myCar, setMyCar] = useState("Volvo"); 
 
  const handleChange =(event) =>{ 
    const name=event.target.name; 
    const value=event.target.value; 
    setInputs(values =>({...values,[name]:value})); 
    setMyCar(event.target.value) 
  } 
    const handleSubmit = (event) =>{ 
    event.preventDefault(); 
    // alert(inputs); 
    if(inputs.username.length<2){ 
      alert("Write full name"); 
    } 
    if(inputs.age<18){ 
      alert("Minor"); 
    } 
    if(inputs.phoneno.length<10){ 
      alert("Phone number must be of 10 digits"); 
    } 
  } 
return( 
   
  <center> 
  <form onSubmit={handleSubmit}> 
    <label>Name: 
  <input  
        type="text"  
        name="username"  
        value={inputs.username || ""}  
        onChange={handleChange} 
      /> 
      </label> 
      <br></br> 
      <label>age: 
        <input  
          type="number"  
          name="age"  
          value={inputs.age || ""}  
          onChange={handleChange} 
        /> 
        </label> 
        <br></br> 
        <label>phno: 
        <input  
          type="text"  
          name="phoneno"  
          value={inputs.phoneno || ""}  
          onChange={handleChange} 
        /> 
        </label> 
        <input type="submit" /> 
        </form></center> 
         
) 
 
} 
// const 
root=ReactDOM.createRoot(document.getElementbyId('root')); 
// root.render(<Myform/>); 
export default Myform;