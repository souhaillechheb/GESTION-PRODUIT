import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Login() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const navigate = useNavigate();

 function handleSubmit (event) {
     event.preventDefault();
     let data={
     email : email,
     password :password
     }

        fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify(data),
         headers: {
        'Content-Type': 'application/json'
         },
            
        })
        .then((response) => response.json())
        .then((data) => {if(data.message=== "Login successful"){
                                navigate("/Allproducts");
                         }                         
        })
        .catch((error) => alert("login ou mot de passe erroné "));
        

    };
 return (
 <form onSubmit={handleSubmit} >
 <div >
  <label htmlFor="email">Email:</label>
  <input  type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>

 <label htmlFor="password">Password:</label>

 <input  type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required/>

 
 <button type="submit"> se connecter </button>

 </div>

 </form>

 );
}

 export default Login;