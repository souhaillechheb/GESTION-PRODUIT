import { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";

function Register() {
 const [newRegister, setNewRegister] = useState({
  nom:'',
  prenom:'',
  email:'',
  password:'',
});
const navigate = useNavigate();

function handleAjouter(event){    
    event.preventDefault();
    console.log(newRegister)
  fetch("http://localhost:5000/register", {
    method: 'POST',
    body: JSON.stringify(newRegister), 
     headers: {
     'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())

 .then((data) => {
 if(data.message==="User OK"){
alert("User Added successfully")
navigate("/login");
 console.log(data.message);
 }else{
alert("Email already registered")
 }
 }) 
.catch((error) => console.error(error));

  
}

return(  
    
 <form onSubmit={handleAjouter}>
     <h2>Ajouter Register</h2>
        <label>
            firstname:
            <input  type="text" value={newRegister.nom} onChange={(event) => setNewRegister({ ...newRegister,nom: event.target.value })} required />
        </label><br/>
        <label>
            lastname :  
            <input  type="text" value={newRegister.prenom } onChange={(event) => setNewRegister({...newRegister,prenom: event.target.value})} required />

        </label><br/>
        <label>
           email :
           <input type="email" value={newRegister.email} onChange={(event) => setNewRegister({ ...newRegister,email: event.target.value })} required/>
        </label><br/>
        <label>
           password :
           <input type="password" value={newRegister.password} onChange={(event) =>setNewRegister({ ...newRegister,password: event.target.value})} required/>
        </label><br/>
        <button  type="submit">Valider</button>

    </form>

 




);

}

export default Register;