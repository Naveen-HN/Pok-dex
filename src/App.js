import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import FilterBar from "./components/FilterBar/Filterbar";
import Main from "./components/Main/Main";

function App() {
  const [data, setData] = useState([]);

  let query = {
    query: `query{
      pokemons(first: 151){
        number
        name
        types
      image
      classification
     attacks{
      special {
        name
      }
    }
      height {
        maximum
      }
      weight{
        maximum
      }
      }
    }`,
  };
  let handleFetch = () => {
    let myHeader = new Headers();
    myHeader.append("content-type", "application/json");
    fetch("https://graphql-pokemon2.vercel.app/", {
      headers: myHeader,
      method: "POST",
      body: JSON.stringify(query),
    })
      .then((res) => res.json())
      .then((result) => {
        let newData = result.data.pokemons.map((item) =>
          Object.assign(item, { captured: false })
        );
        setData(newData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleCapturedChange = (e) => {
    let capturedPokemons = data;
    console.log(capturedPokemons);
  };

  const handleToggleClick = (e) => {
    let captured = data.map((item) =>
      item.number === e.target.id ? { ...item, captured: true } : item
    );
    setData(captured);
    console.log(captured);
  };

  return (
    <div>
      <Header />
      <FilterBar data={data} handleCapturedChange={handleCapturedChange} />{" "}
      <Main data={data} handleToggleClick={handleToggleClick} />{" "}
    </div>
  );
}

export default App;
