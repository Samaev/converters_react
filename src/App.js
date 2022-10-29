import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SearchBar from './components/SearchBar/SearchBar'
import Converters from './components/Converters/Converters'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchBar></SearchBar>
      <Converters></Converters>
      <Footer></Footer>
    </div>
  );
}

export default App;
