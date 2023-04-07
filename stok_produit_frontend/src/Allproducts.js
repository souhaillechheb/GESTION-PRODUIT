import { useEffect, useState } from "react";
import ProductPreview from "./ProductPreview";
import AddProduct from "./Addproduct";
import UpdateProduct from "./UpdateProduct";

function Allproducts(props){
const [products,setProducts]=useState([])
const [productModifie,setProductModifie]=useState(null)
const [rechercher, setRechercher] = useState('');
//const token = localStorage.getItem('token');
 function getAll(){
  fetch("http://localhost:5000/get-products",{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              
              
            },
 })          
          .then((response) => response.json())  
          .then((data) =>{
           console.log(data) 
           setProducts(data)
          })
          .catch((error) => console.error(error));
}

    useEffect(() => {
      getAll()        
      }, []);
    return( 
        <div className="divmap"  >
          <input type="text" 
            placeholder="Recherchez par nom" 
            value={rechercher} 
           onChange={(event) => setRechercher(event.target.value)}/> 
            <h3>Liste des produits</h3> 
            
          <table className="divaffichage" border={1}>
            <thead >
                 <tr>
                  <th>name</th>
                  <th>description</th>
                  <th>price</th>
                  <th>stock</th>
                  <th colSpan={"2"}> manipulation </th>
                  </tr>
            </thead>
            <tbody>           
           
              {products.filter((produit)=> produit.name.includes(rechercher)).map(produit=>{ 
                                return(
                 <ProductPreview 
                    getAll={getAll}
                    key={produit.id}
                    produit={produit}  
                    setProductModifie={setProductModifie} 

                   />  
                               
                )
                })
              }
           </tbody>
         </table> 
         {productModifie?<UpdateProduct getAll={getAll} productModifie={productModifie} />:<AddProduct getAll={getAll} />}
        </div>        
    );
}
export default Allproducts;