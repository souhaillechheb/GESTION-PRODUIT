import { Children } from "react";
import AddProduct from "./Addproduct";
const token = localStorage.getItem('token');


function ProductPreview(props){
     
    function handleDelete(){
        fetch(`http://localhost:5000/Deleteproduct/`+props.produit.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
      })
      
      .then(()=> props.getAll()) 
      .then((response) => response.json())
      .then(() => {
         alert('Produit supprimé avec succès');})           
      .catch((error) => console.log(error));
      }             
    return( 

                <tr>                
                    <td>{props.produit.name} </td>                
                    <td>{props.produit.description}</td>                            
                    <td>{props.produit.price}</td>                      
                    <td>{props.produit.stock ?"en stock": "pas en stock" }</td> 
                   {token && <td><input type= {"submit"} value={"modifier"} onClick={()=>props.setProductModifie(props.produit)  } /></td>}
                    {token && <td><input type= {"submit"} value={"supprimer"} onClick={handleDelete} /> </td>}
                    
                </tr>
                  
      
    );
}


export default ProductPreview;