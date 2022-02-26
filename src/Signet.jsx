import './Signet.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SortIcon from '@mui/icons-material/Sort';


export default function Signet(props) {
    
    return (
        <figure className="Signet">
            <SortIcon fontSize="large"/>
            <img src={"images-signet/" + props.sid + ".jpg"} alt={props.titre} />
            <figcaption style={{backgroundColor: props.couleur,color: props.couleur_texte}} >
                <h3>{props.titre}</h3>
                <p >Modifié le: {props.date_modification}</p>
                <MoreVertIcon fontSize="large" />
            </figcaption> 
            
        </figure>
        

    );
}
