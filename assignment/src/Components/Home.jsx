import React from "react";
import "./style.css";
//console.log(data)

function Home({ data }) {
  return (
    <>
      {data.map((elem) => {
        [elem[0], elem[1], elem[2]] = elem;
        return (
          <div>
            
          </div>
        );
      })}
    </>
  );
}
export default Home;
