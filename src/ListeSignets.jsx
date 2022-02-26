import './ListeSignets.scss';
import Signet from './Signet';
import lesSignets from './data/signet.json';

export default function ListeSignets(props) {
    return (
        <section className="ListeSignets">
            <div className="Signets">
                {
                    lesSignets.map(s => <Signet  titre={s.titre} couleur={s.couleur} couleur_texte={s.couleur_texte} sid={s.id} date_modification={s.date_modification}/>)
                    //lesProduits.map(p => <Produit panier={props.panier} setPanier={props.setPanier} key={p.id} nom={p.nom} prix={p.prix} pid={p.id} />)
                }
            </div>
        </section>
    );
}