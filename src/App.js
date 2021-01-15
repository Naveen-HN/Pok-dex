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
    e.preventDefault();
    let capturedPokemons = data;
    console.log(e.target.value);
    if (e.target.value === "Captured") {
      setData(capturedPokemons.filter((item) => item.captured === true));
    } else if (e.target.value === "Not Captured") {
      setData(capturedPokemons.filter((item) => item.captured === false));
    } else if (e.target.value === "all") {
      setData(capturedPokemons);
    }
  };

  const handleToggleClick = (e) => {
    let captured = data.map((item) =>
      item.number === e.target.id ? { ...item, captured: true } : item
    );
    setData(captured);
    console.log(captured);
  };

  const handleTypeChange = (e) => {
    console.log(e.target.value);
    let pokemonTypes = data;
    if (pokemonTypes.map((item) => item.types.includes(e.target.value))) {
      setData(
        pokemonTypes.filter((item) => item.types.includes(e.target.value))
      );
    }
  };

  return (
    <div>
      <Header />
      <FilterBar
        data={data}
        handleCapturedChange={handleCapturedChange}
        handleTypeChange={handleTypeChange}
      />{" "}
      <Main data={data} handleToggleClick={handleToggleClick} />{" "}
    </div>
  );
}

export default App;
