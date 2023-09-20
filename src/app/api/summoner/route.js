import { NextResponse } from "next/server";

export async function GET(request) {
  const apiKey = "RGAPI-67b216b0-3b46-442c-be0b-cc88a3000f62";

  const { searchParams } = new URL(request.url);

  const summonerName = searchParams.get("summonerName");

  const res = await fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`, {
    headers: {
      "Content-Type": "application/json",
      "X-Riot-Token": apiKey,
    },
  });

  const summoner = await res.json();

  return NextResponse.json({ summoner });
}
