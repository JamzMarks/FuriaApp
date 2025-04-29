// src/pages/games/[game].tsx
'use client'
import { useMemo } from "react";
import GameLineup from "./components/lineups";
import { useParams } from "next/navigation";
import { Games } from "@/types/games.d";

const lineupsByGame = {
  cs: [
    { name: "KSCERATO", role: "Rifler", photoUrl: "/players/kscerato.jpg" },
    { name: "yuurih", role: "Entry", photoUrl: "/players/yuurih.jpg" },
    { name: "FalleN", role: "AWPer / IGL", photoUrl: "/players/fallen.jpg" },
    { name: "chelo", role: "Support", photoUrl: "/players/chelo.jpg" },
    { name: "arT", role: "In-Game Leader", photoUrl: "/players/art.jpg" },
  ],
  valorant: [
    { name: "qck", role: "Duelist", photoUrl: "/players/qck.jpg" },
    { name: "mazin", role: "Controller", photoUrl: "/players/mazin.jpg" },
    { name: "xand", role: "Flex", photoUrl: "/players/xand.jpg" },
    { name: "Khalil", role: "Sentinel", photoUrl: "/players/khalil.jpg" },
    { name: "mwzera", role: "Initiator", photoUrl: "/players/mwzera.jpg" },
  ],
  rocketl: [
    { name: 'Player1', role: 'Offense', photoUrl: '/players/player1.jpg' },
  ],
};

export default function GamePage() {
    const params = useParams<{games: string}>();
    const gameParam = params.games?.toLowerCase();
    
    const lineup = useMemo(() => {
        if (!gameParam || !(gameParam in Games)) return null;
        return lineupsByGame[gameParam as keyof typeof Games];
    }, [gameParam]);

    if (!lineup) {
        return <div className="text-white p-4">Jogo não encontrado.</div>;
    }
  
  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">{Games[gameParam as keyof typeof Games]}</h1>
      <GameLineup lineup={lineup} />
    </div>
  );
}
