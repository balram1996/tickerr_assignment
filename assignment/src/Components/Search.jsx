import React from "react";

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

    // const handleChange = (e)=>{
    //  e.preventDefault();
    //  const value = e.target.value;
    //  console.log(value)
    // }
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search by brand or company name..."
          onInput={chageClick}
        />
      </div>
    </>
  );
}
export default Searchbar;
