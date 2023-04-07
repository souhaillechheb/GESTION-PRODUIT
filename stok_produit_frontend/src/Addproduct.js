import {  useState } from "react";
function AddProduct( props ) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState()
  const [stock, setStock] = useState(false)

  function handleSubmit(event) {    
    event.preventDefault();
    fetch("http://localhost:5000/Ajoutproduct", {
        method: "POST",
        body: JSON.stringify({ name, description,price,stock }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then(()=> props.getAll())
        .catch((error) => console.error(error));
    }
  
      return (

        <form onSubmit={handleSubmit}>
         <h3 >  Ajouter produit </h3>
         
          <label>
            Nom :
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            description :
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <label>
            price :
            <input
              type="text"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>
          <label>
            stock :
            <input
              type="checkbox"
              value={stock}
              onChange={(event) => setStock(event.target.checked)}
            />
          </label>
          <button type="submit">Enregistrer l'ajout</button>
        </form>
      );
}
export default AddProduct;
