'use client'
import { useEffect, useState } from 'react';
import { SiValorant } from "react-icons/si";
const FuriaResults = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('https://liquipedia.net/valorant/api.php?action=parse&page=FURIA&format=json&origin=*', {
      method: 'GET',
      headers: {
        'User-Agent': 'FuriaApp/1.0',
      },
    })
      .then(res => res.json())
      .then(data => {
        const html = data?.parse?.text?.['*'];
        setHtmlContent(html);
      })
      .catch(err => console.error('Erro ao buscar dados:', err));
  }, []);

  return (
    <div className="text-white p-4">
      <h2 className="text-xl font-bold mb-4">Resultados da FURIA</h2>
      {/* {htmlContent ? (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <p>Carregando dados...</p>
      )} */}        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Game
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Campeonato
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Score
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Oponente
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="flex gap-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <SiValorant/> Valorant
                        </th>
                        <td className="px-6 py-4">
                            VCT Americas 2025
                        </td>
                        <td className="px-6 py-4">
                            0 : 2
                        </td>
                        <td className="px-6 py-4">
                            EG
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                     <th scope="row" className="flex gap-2 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <SiValorant/> Valorant
                        </th>
                        <td className="px-6 py-4">
                            VCT Americas 2025
                        </td>
                        <td className="px-6 py-4">
                            0 : 2
                        </td>
                        <td className="px-6 py-4">
                            EG
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  );
};

export default FuriaResults;
