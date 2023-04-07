import { Children } from "react";
import AddProduct from "./Addproduct";



function ProductPreview(props){
     
    function handleDelete(){
        fetch(`http://localhost:5000/Deleteproduct/`+props.produit.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
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
                    <td><input type= {"submit"} value={"modifier"} onClick={()=>props.setProductModifie(props.produit)  } /></td>
                    <td><input type= {"submit"} value={"supprimer"} onClick={handleDelete} /> </td>
                    
                </tr>
                  
      
    );
}


export default ProductPreview;