import React from 'react';

export const StepInterestsForm = ({ formData, toggleInterest }: any) => {
  const games = ['CS:GO', 'Valorant', 'Rocket League', 'LoL'];
  return (
    <div className="text-white">
      <p className="mb-2">Quais jogos você acompanha?</p>
      {games.map((game) => (
        <label key={game} className="block">
          <input type="checkbox" checked={formData.interests.includes(game)} onChange={() => toggleInterest(game)} className="mr-2" />
          {game}
        </label>
      ))}
    </div>
  );
};