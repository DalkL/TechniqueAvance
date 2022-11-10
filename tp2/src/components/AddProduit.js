import Button from './Button';
import { useState } from 'react'

const AddProduit = ({onAdd}) => {
    const displayModal = () => {
        document.querySelector('#ajout-modal').showModal();
    }
    const closeModal = () => {
        document.querySelector('#ajout-modal').close();
    }
    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')
    const [categorie, setCategorie] = useState('')
    const [prix, setPrix] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        if(!nom){
            alert('Ajouter un nom')
            return
        }
        if(!description){
            alert('Ajouter une description')
            return
        }
        if(!categorie){
            alert('Ajouter une catégorie')
            return
        }
        if(!prix){
            alert('Ajouter un prix')
            return
        }
        onAdd({ nom, description, categorie, prix})
        setNom('')
        setDescription('')
        setCategorie('')
        setPrix('')
    }
    return(
        <div className="col-6 mx-auto card">
            <Button text='Ajouter un produit' onClick={displayModal}/>
            <dialog className='p-2' id='ajout-modal'>
                <div className='card-header'>
                    <strong>Ajouter un produit</strong>
                </div>
                <div className='card-body'>
                    <form className='form' onSubmit={onSubmit}>
                        <label>Nom:</label>
                        <input type={'text'} value={nom} name='nom' onChange={(e) => setNom(e.target.value)}></input><br></br>

                        <label>Description:</label>
                        <input type={'text'} value={description} name='description' onChange={(e) => setDescription(e.target.value)}></input><br></br>

                        <label>Categorie:</label>
                        <input type={'text'} value={categorie} name='categorie' onChange={(e) => setCategorie(e.target.value)}></input><br></br>

                        <label>Prix:</label>
                        <input type={'text'} value={prix} name='prix' onChange={(e) => setPrix(e.target.value)}></input><br></br>
                        <Button text='Ajouter' colorbg={'green'} />
                    </form>
                    <Button text='Annuler' colorbg={'red'} onClick={closeModal}/>
                </div>
            </dialog>
        </div>
        
    )
}

export default AddProduit;