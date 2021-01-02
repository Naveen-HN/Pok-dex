import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./styles.css";

export default function Main() {
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
      .then((result) => setData(result.data.pokemons))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <div className="cards-content">
      {data.map((item, index) => (
        <Cards data={item} key={index} />
      ))}
    </div>
  );
}
