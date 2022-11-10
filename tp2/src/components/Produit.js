import {FaTimes} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'

const Produit = ({produit,deleteProduit,editProduit}) => {
    return(
        <main>
            <div className="card">
                <div className="card-header d-flex">
                    <h3>{produit.nom}</h3>
                    <div className='svg'>
                        <AiFillEdit
                        style={{color:'white',cursor:'pointer',transform:'translateY(7px) translateX(-17px) scale(1.4)'}}
                        onClick={() => editProduit(produit.id)}
                        />
                        <FaTimes 
                        style={{color:'white',cursor:'pointer',transform:'translateY(7px) scale(1.4)'}}
                        onClick={() => deleteProduit(produit.id)}
                        />
                    </div>
                </div>
                <div className="card-body">
                    <small>
                        {produit.categorie}
                    </small>
                    <p>
                        {produit.description}
                    </p>
                    <strong>
                        {produit.prix} $
                    </strong>
                </div>
            </div>
        </main>
    )
}

export default Produit;