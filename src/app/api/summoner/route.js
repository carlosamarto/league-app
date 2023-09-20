import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const apiKey = "RGAPI-67b216b0-3b46-442c-be0b-cc88a3000f62";

    const summonerName = request.nextUrl.searchParams.get("summonerName");

    const response = await axios.get(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`, {
      headers: {
        "X-Riot-Token": apiKey,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error al buscar al invocador:", error);
    return NextResponse.json({ error: error.message || "Something went wrong" });
  }
}
