import logo from './logo.svg';
import "./App.css"
import Home from "../src/Components/Home";
import data from "./data.json";
import Searchbar from './Components/Search';

let index = 0;
data.map((e)=>{
    e.push(index++)       
});
//console.log(data)

function App() {
  
  return (
    <div className="main_div">
      {/* <Searchbar data1={data}/> */}
      <Home data={data}/>
    </div>
  );
}

export default App;
