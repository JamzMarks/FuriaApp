// src/components/FeedNoticias.tsx

import React from 'react';
import { FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';
import { InstagramCard, TwitchCard, TwitterCard } from './components/card';

type Noticia = {
  id: number;
  plataforma: 'twitter' | 'instagram' | 'twitch';
  timestamp: string;
  conteudo: string;
  imagemUrl?: string;
  isLive?: boolean;
};

export const noticiasMock = [
  {
    id: 1,
    platform: 'twitter',
    timestamp: '2025-04-28T14:20:00Z',
    content: 'A FURIA venceu o último jogo no Major! 🏆🔥',
  },
  {
    id: 2,
    platform: 'instagram',
    timestamp: '2025-04-28T13:00:00Z',
    imageUrl: 'https://placekitten.com/400/300',
    caption: 'Preparados para o desafio de hoje? 😼💥',
  },
  {
    id: 3,
    platform: 'twitch',
    timestamp: '2025-04-28T12:00:00Z',
    isLive: true, 
    streamTitle: 'FURIA no Campeonato Mundial! Vem com a gente!',
    streamUrl: 'https://twitch.tv/furia',
  },
];

const FeedNoticias: React.FC = () => {
  const noticiasOrdenadas = noticiasMock.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className="p-6 space-y-6">
      {noticiasOrdenadas.map((noticia) => {
        switch (noticia.platform) {
          case 'twitter':
            return <TwitterCard key={noticia.id} content={noticia.content} timestamp={noticia.timestamp} />;
          case 'instagram':
            return <InstagramCard key={noticia.id} imageUrl={noticia.imageUrl} caption={noticia.caption} timestamp={noticia.timestamp} />;
          case 'twitch':
            return <TwitchCard key={noticia.id} isLive={noticia.isLive} streamTitle={noticia.streamTitle} streamUrl={noticia.streamUrl} timestamp={noticia.timestamp} />;
          default:
            return null;
        }
      })}
    </div>
  );
};


export default FeedNoticias;
