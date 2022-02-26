import './App.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function App() {
  return (
    <div className="App">
      <Entete/>
      <ListeSignets/>
      <Fab>
        <AddIcon/>
      </Fab>
    </div>
  );
}

export default App;
