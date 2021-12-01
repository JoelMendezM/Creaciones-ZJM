import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer name="Top deportivo"/>
      <ItemDetailContainer />
      </div>
  );
}

export default App;
