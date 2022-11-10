import './App.css';
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import Produits from './components/Produits'

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  const [produits, setProduits] = useState([
//     {
//       id:1,
//       nom: 'PS5',
//       description: 'Wow une PS5 incroyable!',
//       categorie: 'Jeux',
//       prix: 799,
//   },
//   {
//       id:2,
//       nom: 'Switch',
//       description: 'Wow une Switch cool!',
//       categorie: 'Jeux',
//       prix: 399,
//   },
//   {
//       id:3,
//       nom: 'Ballon de basket',
//       description: 'Wow un ballon de basket cool!',
//       categorie: 'Sport',
//       prix: 45,
//   },
//   {
//       id:4,
//       nom: 'Ballon de soccer',
//       description: 'Wow une ballon de soccer superb!',
//       categorie: 'Sport',
//       prix: 35,
//   },
//   {
//     id:5,
//     nom: 'PS5',
//     description: 'Wow une PS5 incroyable!',
//     categorie: 'Jeux',
//     prix: 799,
// },
// {
//     id:6,
//     nom: 'Switch',
//     description: 'Wow une Switch cool!',
//     categorie: 'Jeux',
//     prix: 399,
// },
// {
//     id:7,
//     nom: 'Ballon de basket',
//     description: 'Wow un ballon de basket cool!',
//     categorie: 'Sport',
//     prix: 45,
// },
// {
//     id:8,
//     nom: 'Ballon de soccer',
//     description: 'Wow une ballon de soccer superb!',
//     categorie: 'Sport',
//     prix: 35,
// }
])
useEffect(()=> {
  const getProduits = async () => {
  const produitsFromServer = await fetchProduits()
  setProduits(produitsFromServer)
  }
  getProduits()
}, [])
const fetchProduits = async () => {
  const res = await fetch('http://localhost:5000/produits')
  const data = await res.json()
  //console.log(data)
  return data
  }
 
const [updateForm,setForm] = useState(false)
const deleteProduit = async (id) =>{
  await fetch(`http://localhost:5000/produits/${id}`, {
    method: 'DELETE',
  })
  setProduits(produits.filter((produit)=> produit.id!==id))
}
const addProduit = async (produit) => {
  const res = await fetch('http://localhost:5000/produits',{
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(produit)
  })
  const newProduit = await res.json()
  // const id = Math.floor(Math.random() * 1000) + 1
  // const newProduit = { id, ...produit}
  setProduits([...produits, newProduit])
}
const updateProduit = async (produit) => {
  const res = await fetch(`http://localhost:5000/produits/${produit.id}`,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(produit)
  })
  const newProduit = await res.json()
  console.log(newProduit);
  
  const balls =  produits.map((produit)=>{
    if(produit.id===newProduit.id){
      produit=newProduit
    }
    return produit
  })

  setProduits(balls)
}
const editProduit = async (id) => {
  setForm('')
  for(let produit of produits){
    if (produit.id===id) {
      setForm(produit)
    }
  }
  setTimeout(function(){document.querySelector('#update-modal').showModal(); }, 100)
}
return (
  <div className="container">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Accueil/>}></Route>
        <Route path='/Produits' element={produits?<Produits updateForm={updateForm} produits={produits} addProduit={addProduit} deleteProduit={deleteProduit} editProduit={editProduit} updateProduit={updateProduit} setForm={setForm} />:<></>}></Route>
        </Routes>
    </BrowserRouter>
  </div>
);
}

export default App;
