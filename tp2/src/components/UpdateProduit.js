import { useState } from 'react'
import Button from './Button';
const UpdateProduit = ({modProduit, updateProduit,setForm}) => {
    const [id] = useState(modProduit.id)
    const [nom, setNom] = useState(modProduit.nom)
    const [description, setDescription] = useState(modProduit.description)
    const [categorie, setCategorie] = useState(modProduit.categorie)
    const [prix, setPrix] = useState(modProduit.prix)
    const onSubmit = async(e) => {
        e.preventDefault()
        await updateProduit({id, nom, description, categorie, prix})
        setForm(false)
    }
    const closeModal = () => {
        document.querySelector('#update-modal').close()
        setForm(false)
    }
    return (
        <dialog id="update-modal" type="modal">
            <div>
                <form className='form' onSubmit={onSubmit}>
                    <label>Nom:</label>
                    <input type={'text'} value={nom} name='nom' onChange={(e) => setNom(e.target.value)}></input><br></br>

                    <label>Description:</label>
                    <input type={'text'} value={description} name='description' onChange={(e) => setDescription(e.target.value)}></input><br></br>

                    <label>Categorie:</label>
                    <input type={'text'} value={categorie} name='categorie' onChange={(e) => setCategorie(e.target.value)}></input><br></br>

                    <label>Prix:</label>
                    <input type={'int'} value={prix} name='prix' onChange={(e) => setPrix(e.target.value)}></input><br></br>
                    <Button text='Ajouter' colorbg={'green'} />
                </form>
                <Button text='Annuler' colorbg={'red'} onClick={closeModal}/>
            </div>
        </dialog>
    )
}
export default UpdateProduit
