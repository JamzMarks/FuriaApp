'use client'
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
import FormLogin from "./components/FormLogin";


const API_URL = 'https://liquipedia.net/valorant/api.php';
const USER_AGENT = 'SeuProjetoNome/1.0 (jamzmarks@gmail.com)';
export default function Home() {  
  
  
  async function buscarPagina(pagina: string) {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          'User-Agent': USER_AGENT,
        },
        params: {
          action: 'parse',
          page: pagina,
          format: 'json',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao buscar página:', error);
    }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="bg-white text-black w-64 relative">
            <Image
              className=""
              width={60}
              height={60}
              src='/furia-seeklogo.svg'
              alt="Furia logo"
            />
            <FormLogin></FormLogin>    
        </div>
    </div>
  );
}
