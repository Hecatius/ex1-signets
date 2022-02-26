import './Entete.scss';
import Avatar from '@mui/material/Avatar'

export default function Entete() {
    return (
        <header className="Entete">
            <nav>
                <p>Signets</p>
                <div> 
                    <p>Jonathan Mores</p>
                    <Avatar alt="Avatar" src="images-signet/sig0001.jpg" />
                </div>
                
                
            </nav>
        </header>
    );
}