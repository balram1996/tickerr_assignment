import React, { useEffect } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
const axios = require("axios");

function Home({ data }) {
  const [text, setText] = React.useState("");
  const [addList, setAddList] = React.useState([]);
  const [localData, setLocalData] = React.useState([]);
  const [color, setColor] = React.useState("red");

  const handleMouseOver = (i) => {
    let show = document.getElementById(i);
    show.style.display = "block";
  };

  const handleMouseLeave = (i) => {
    let show = document.getElementById(i);
    show.style.display = "none";
  };
  const changeClick = (e) => {
    const { value } = e.target;
    setText(value);
  };

  useEffect(() => {
    addWatchList();
  }, []);

  const addWatchList = (elem) => {
    let local = JSON.parse(localStorage.getItem("marketData"));
    if (elem!==undefined){
  
      if (local === null) {
        local = [elem];
      } else {
        local.push(elem);
      }
      localStorage.setItem("marketData", JSON.stringify(local));

      local = JSON.parse(localStorage.getItem("marketData"));
    }
    if(local==null){
      local= [];
    }
    setAddList(local);
  };
  

  function check(elem){
    for(let i = 0 ; i<addList.length ; i++){
        if(addList[i][0].toLowerCase()===elem[0].toLowerCase()){
          return {
            status: true,
            id: addList[i][3]
          }
        }
    }
    return false;
  }

  const deleteItem = (index) => {
    const updatedItem = addList.filter((curElem) => {
      return curElem[1] !== index;
    });
    setAddList(updatedItem);
  };

  function profitLoss(d1, d2) {
    let per = (d2 - d1) / 100;
    return per.toPrecision(1) + "%";
  }
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
        <div className="name_div">
          <div className="name">
            <h1>Balram</h1>
          </div>
          <div className="Icons">
            <i className="fas fa-pen" id="pen"></i>
            <i className="fas fa-trash-alt" id="trash1"></i>
          </div>
        </div>
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
              [elem[0], elem[1], elem[2], elem[3]] = elem;
              const mainHeading = elem[0].split("::");
              return (
                <div
                  className="child_div"
                  key={elem[3]}
                  style={
                    (elem[2] - elem[1]) / elem[2] < 0
                      ? { color: "rgb(235, 35, 8)" }
                      : { color: "rgb(0, 195, 255)" }
                  }
                  onMouseOver={() => handleMouseOver(elem[3])}
                  onMouseLeave={() => handleMouseLeave(elem[3])}
                >
                  <div className="brandName">
                    <h1>{mainHeading[0]}</h1>
                    <h2>{mainHeading[1]}</h2>
                  </div>
                  <div className="figureData">
                    <h1>{elem[1]}</h1>
                    <h2>{profitLoss(elem[1], elem[2])}</h2>
                  </div>
                  <div
                    className="add_btn"
                    style={{ display: "none" }}
                    id={elem[3]}
                  >
                   {
                     addList.length===0 ? ( <i
                      className="fas fa-plus"
                      onClick={() => addWatchList(elem)}
                    ></i>) :( 
                      check(elem).status ? (<i className="fas fa-trash-alt" id="trash"></i>):(<i
                        className="fas fa-plus"
                        onClick={() => addWatchList(elem)}
                      ></i>)
                           
                    )
                   }
                  </div>
                </div>
              );
            })}
        </div>
        <hr></hr>
        <div className="wish_list">
          <div className="watch_list_name_div">
            <h1 className="myWatchlist"> My WatchList</h1>
          </div>
          {addList[0] ? 
           addList.map((elem) => {
              const n = elem[0];
              const n_name = n.split("::");
              return (
                <div className="watchList_main_div"
                style={
                  (elem[2] - elem[1]) / elem[2] < 0
                    ? { color: "rgb(235, 35, 8)" }
                    : { color: "rgb(0, 195, 255)" }
                }
                >
                  <div className="watch_list_name_1">
                  <h1>{n_name[0]}</h1>
                  <h2>{n_name[1]}</h2>
                  </div>
                  <i className="fas fa-trash-alt" id="trash" onClick={() => deleteItem(elem[1])}></i>
                </div>
              );
            }):""
          }

        </div>
      </div>
    </>
  );
}
export default Home;
