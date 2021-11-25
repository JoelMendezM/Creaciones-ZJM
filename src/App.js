import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer welcome="Catalogue cooming soon" id="1 2 3"/>
      </div>
  );
}

export default App;
