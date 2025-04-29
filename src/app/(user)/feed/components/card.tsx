import { FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';

export const TwitterCard = ({ content, timestamp }: { content: string, timestamp: string }) => (
  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded">
    <div className="flex items-center space-x-2 mb-2">
      <FaTwitter className="text-blue-400" />
      <span className="text-xs text-gray-400">{new Date(timestamp).toLocaleString()}</span>
    </div>
    <p>{content}</p>
  </div>
);

export const InstagramCard = ({ imageUrl, caption, timestamp }: { imageUrl: string, caption: string, timestamp: string }) => (
  <div className="bg-pink-500/10 border-l-4 border-pink-500 p-4 rounded">
    <div className="flex items-center space-x-2 mb-2">
      <FaInstagram className="text-pink-400" />
      <span className="text-xs text-gray-400">{new Date(timestamp).toLocaleString()}</span>
    </div>
    <img src={imageUrl} alt="Instagram Post" className="w-full rounded-lg mb-2" />
    <p>{caption}</p>
  </div>
);

export const TwitchCard = ({ isLive, streamTitle, streamUrl, timestamp }: { isLive: boolean, streamTitle: string, streamUrl: string, timestamp: string }) => (
  <div className="bg-purple-500/10 border-l-4 border-purple-500 p-4 rounded">
    <div className="flex items-center space-x-2 mb-2">
      <FaTwitch className="text-purple-400" />
      <span className="text-xs text-gray-400">{new Date(timestamp).toLocaleString()}</span>
    </div>
    <h3 className="font-semibold">{streamTitle}</h3>
    {isLive ? (
      <a href={streamUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-purple-600 text-white py-1 px-3 rounded hover:bg-purple-700">
        Assistir ao Vivo
      </a>
    ) : (
      <span className="text-sm text-gray-400">Fora do ar</span>
    )}
  </div>
);