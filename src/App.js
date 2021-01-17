import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import FilterBar from "./components/FilterBar/Filterbar";
import Main from "./components/Main/Main";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [capturedFilteredData, setCapData] = useState([]);

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
        setFilteredData(newData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleCapturedChange = (e) => {
    e.preventDefault();
    let capturedPokemons = capturedFilteredData;
    console.log(e.target.value);
    if (e.target.value === "Captured") {
      setFilteredData(
        capturedPokemons.filter((item) => item.captured === true)
      );
    } else if (e.target.value === "Not Captured") {
      setFilteredData(
        capturedPokemons.filter((item) => item.captured === false)
      );
    } else if (e.target.value === "All") {
      setFilteredData(data);
    }
  };

  const handleToggleClick = (e) => {
    let captured = data.map((item) =>
      item.number === e.target.id ? { ...item, captured: !item.captured } : item
    );
    setCapData(captured);
    console.log(captured);
  };

  const handleTypeChange = (e) => {
    console.log(e.target.value);
    let pokemonTypes = data;
    if (e.target.value === "All") {
      setFilteredData(data);
    } else if (
      pokemonTypes.map((item) => item.types.includes(e.target.value))
    ) {
      setFilteredData(
        pokemonTypes.filter((item) => item.types.includes(e.target.value))
      );
    }
  };

  return (
    <div>
      <Header />
      <FilterBar
        handleCapturedChange={handleCapturedChange}
        handleTypeChange={handleTypeChange}
      />{" "}
      <Main data={filteredData} handleToggleClick={handleToggleClick} />{" "}
    </div>
  );
};

export default App;
