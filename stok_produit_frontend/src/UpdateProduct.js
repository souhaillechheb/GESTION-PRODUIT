import {  useEffect, useState } from "react";
function UpdateProduct( {productModifie} ) {
 
  const [elementModifie, setElementModifie]=useState({
    name:"",
    description:"",
    price:0,
    stock:false
})

useEffect(()=>{
    if (productModifie){
      setElementModifie(productModifie)
    }  
},[productModifie])

  function handleUpdate(){    
        fetch(`http://localhost:5000/Updateproducts/${productModifie.id}`, {
       method: "PUT",
       body: JSON.stringify({...elementModifie}),
  headers: {
    'Accept': 'application/json',
    "Content-Type": "application/json",
  },
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
  }
    return (
        <form onSubmit={handleUpdate}>
         <h3>modifier un produit</h3>
          <label>
            Nom :
            <input
              type="text"
              value={elementModifie.name}
              onChange={(event) => setElementModifie({...elementModifie,name :event.target.value})}
            />
          </label>
          <label> description :
            <input
              type="text"
              value={elementModifie.description}              
              onChange={(event) =>setElementModifie({...elementModifie,description :event.target.value})}
            />
          </label>
          <label>
            price :
            <input
              type="text"
              value={elementModifie.price}
              onChange={(event) =>setElementModifie({...elementModifie,price :event.target.value})}
            />
          </label>
          <label>
            stock :
            <input
              type="checkbox"
              checked={elementModifie.stock}
              value={elementModifie.stock}
              onChange={(event) => setElementModifie({...elementModifie,stock :event.target.checked})}
            />
          </label>
          <button type="submit">Enregistrer la modification </button>
        </form>
      );
}
export default UpdateProduct;