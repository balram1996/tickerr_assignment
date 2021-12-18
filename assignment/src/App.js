import logo from './logo.svg';
import "./App.css"
import Home from "../src/Components/Home";
import data from "./data.json";
import Searchbar from './Components/Search';


function App() {
  return (
    <div className="main_div">
      <Searchbar/>
      <Home data={data}/>
    </div>
  );
}

export default App;
