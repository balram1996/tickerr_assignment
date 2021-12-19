import React, { useEffect } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
const axios = require('axios');

function Home({ data }) {
  const [text, setText] = React.useState("");
  const [addList, setAddList] = React.useState([]);
  const [style,setStyle] = React.useState("none");
  
  const changeClick = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const addWatchList = async (elem) => {

    let val = [...elem];
    await axios
    .post("http://localhost:4000/users" ,val)
    .then((e)=>{
      console.log(e)
      fetchData();
    })
    .catch((err)=>{
      console.log(err)
    })
  };
   
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    await axios
    .get("http://localhost:4000/users")
    .then((e)=>{
      setAddList(e.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  };

  const deleteItem= async(index)=>{
    
    await axios
    .get("http://localhost:4000/users")
    .then((e)=>{
      //console.log(e.data)
      const updatedItem = e.data.filter((curElem) => {
        return curElem[3] !== index;
      });

      //setAddList(updatedItem)
    })
    .catch((err)=>{
      console.log(err)
    })
    //setAddList(updatedItem);

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
            <i className="fas fa-trash-alt" id="trash"></i>
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
              [elem[0], elem[1], elem[2],elem[3]] = elem;
              const mainHeading = elem[0].split("::");
              return (
                <div className="child_div" key={elem[3]} 
                onMouseEnter={()=>{
                    setStyle("block");
                  
                }}
                onMouseLeave={()=>{
                  setStyle("none");
                }}
                >
                  <div className="brandName">
                    <h1>{mainHeading[0]}</h1>
                    <h2>{mainHeading[1]}</h2>
                  </div>
                    <div className="add_btn" style={{display:style}}>
                    <i
                      className="fas fa-plus"
                      onClick={() => addWatchList(elem)}
                    ></i>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="wish_list">
          {addList.length != 0 &&
            addList.map((elem) => {
              return (
               <div>
              <h1>{elem}</h1>
              <button onClick={() => deleteItem(elem[3])}>del</button>
              </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default Home;
