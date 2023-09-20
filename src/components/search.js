"use client";

import axios from "axios";
import { useState } from "react";

const Search = () => {
  const [summonerName, setSummonerName] = useState("");
  const [summonerData, setSummonerData] = useState(null);

  const handleSearch = async () => {
    try {
      const apiKey = "TU_API_KEY_AQUI";
      const url = `/api/summoner?summonerName=${summonerName}`;

      const response = await fetch(url, {
        headers: {
          "X-Riot-Token": apiKey,
        },
      });

      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }

      const data = await response.json();
      setSummonerData(data);
    } catch (error) {
      console.error("Error al buscar al invocador:", error);
    }
  };

  console.log(summonerData);

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
          <h2>Nombre: {summonerData.summoner.name}</h2>

          <p>Nivel: {summonerData.summoner.summonerLevel}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
