import Produit from "./Produit";
import AddProduit from './AddProduit';
import UpdateProduit from "./UpdateProduit";

const Produits = ({produits,addProduit,deleteProduit,editProduit, updateForm, updateProduit, setForm}) => {
    return(
        <div>
            <AddProduit onAdd={addProduit}/>
            <div className="grid mx-auto mt-5">
                {produits.map((produit)=>(
                    <Produit key={produit.id} produit={produit} deleteProduit={deleteProduit} editProduit={editProduit}/>
                    ))}
            </div>
            {updateForm ? <UpdateProduit modProduit={updateForm} deleteProduit={deleteProduit} updateProduit={updateProduit} setForm={setForm}/>:<></>}
        </div>
    )
}

export default Produits;