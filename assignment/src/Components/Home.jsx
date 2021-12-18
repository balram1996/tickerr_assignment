import React from "react";

//console.log(data)

function Home({ data }) {
  return (
    <>
      {data.map((elem) => {
        [elem[0], elem[1], elem[2]] = elem;
        return (
          <div>
            <h1>{elem[0]}</h1>
          </div>
        );
      })}
    </>
  );
}
export default Home;
