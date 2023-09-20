"use client";

import axios from "axios";
import { useState } from "react";

const Search = () => {
  const [summonerName, setSummonerName] = useState("");
  const [summonerData, setSummonerData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/summoner?summonerName=${summonerName}`);
      setSummonerData(response.data);
    } catch (error) {
      console.error("Error al buscar al invocador:", error);
    }
  };

  return (
    <div>
      <h1>Buscar Invocador de League of Legends</h1>

      <input
        type="text"
        placeholder="Nombre de Invocador"
        value={summonerName}
        onChange={(e) => setSummonerName(e.target.value)}
      />

      <button onClick={handleSearch}>Buscar</button>

      {summonerData && (
        <div>
          <h2>Nombre: {summonerData.name}</h2>

          <p>Nivel: {summonerData.summonerLevel}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
