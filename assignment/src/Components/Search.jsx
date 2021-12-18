import React from "react";
import "./style.css";

function Searchbar() {
    const [text,setText] = React.useState("");
    const [todolist,setTodolist] = React.useState([]);
    
    const chageClick = (e) => {
        const {value} = e.target;
        setText(value);
    }
    
    const onClickC = () => {
        const pro = {
            title : text
        }
        let list = [...todolist,pro];
        setTodolist(list);
        setText("");

    }

    
  return (
    <>
      <div className="search_div">
      <i class="fas fa-search" id="fa-search"></i>
        <input
          className="input_box"
          type="text"
          placeholder="Search by brand or Company name....."
          onInput={chageClick}
        />
      </div>
    </>
  );
}
export default Searchbar;
