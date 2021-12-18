import React from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

function Home({ data }) {
  const [text, setText] = React.useState("");
  const [addList, setAddList] = React.useState([]);

  const changeClick = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const addWatchList=()=>{

  };

  return (
    <>
      <div className="search_div">
        <i className="fas fa-search" id="fa-search"></i>
        <input
          className="input_box"
          type="text"
          placeholder="Search by brand or Company name....."
          onInput={changeClick}
        />
        <div className="elem_div">
          {data
            .filter((val) => {
              if (text == "") {
                return val[0];
              } else if (val[0].toLowerCase().includes(text.toLowerCase())) {
                return val[0];
              }
            })
            .map((elem) => {
              [elem[0], elem[1], elem[2]] = elem;
              const mainHeading = elem[0].split("::");
              return (
                <div className="child_div" key={uuidv4()}>
                  <h1>{mainHeading[0]}</h1>
                  <div className="add_btn">
                  <i className="fas fa-plus" onClick={() => addWatchList}></i>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="wish_list">

        </div>
      </div>
    </>
  );
}
export default Home;
