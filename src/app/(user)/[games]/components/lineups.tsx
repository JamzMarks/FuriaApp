import React from 'react';

interface Player {
  name: string;
  role: string;
  photoUrl: string;
}

interface GameLineupProps {
  lineup: Player[];
}

const GameLineup: React.FC<GameLineupProps> = ({ lineup }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Lineup Atual</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {lineup.map((player, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
            <img
              src={player.photoUrl}
              alt={player.name}
              className="w-24 h-24 rounded-full object-cover mb-2 border-2 border-fuchsia-500"
            />
            <h3 className="text-lg font-semibold">{player.name}</h3>
            <p className="text-sm text-gray-400">{player.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameLineup;
