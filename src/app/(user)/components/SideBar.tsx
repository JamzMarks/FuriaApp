import { FaGamepad, FaUser, FaTrophy, FaNewspaper, FaHistory, FaShoppingBag} from 'react-icons/fa';
import { SiCounterstrike, SiValorant, SiLeagueoflegends } from 'react-icons/si';

import NavItem from "./NavItem";

interface SidebarProps {
    user: {
      name: string;
      avatarUrl: string;
    };
  }

export default function SideBar({ user }: SidebarProps){
    return (
        <div className="h-screen w-64 bg-black text-white flex flex-col justify-between">
          <div className="overflow-y-auto">
    
            {/* User Profile */}
            <div className="flex flex-col items-center py-8">
              <img 
                src={user.avatarUrl? user.avatarUrl : 'furia-seeklogo.svg'}
                alt="User Avatar"   
                className="w-24 h-24 rounded-full border-4 border-purple-600 mb-4"
              />
              <h2 className="text-lg font-semibold">{user.name}</h2>
            </div>
    
            <nav className="px-6 space-y-8">
    
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-2">Jogos</h3>
                <div className="flex flex-col space-y-3">
                  <NavItem icon={<SiValorant />} label="Valorant" link='/valorant'/>
                  <NavItem icon={<SiCounterstrike />} label="CS2" link='/cs'/>
                  <NavItem icon={<SiLeagueoflegends />} label="League of Legends" link='/lol'/>
                  <NavItem icon={<SiLeagueoflegends />} label="Rocket League" link='/rockel'/>
                </div>
              </div>
    
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-2">Campeonatos</h3>
                <div className="flex flex-col space-y-3">
                  <NavItem icon={<FaTrophy />} label="Campeonatos" />
                </div>
              </div>
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-2">Resultados</h3>
                <div className="flex flex-col space-y-3">
                  <NavItem icon={<FaHistory />} label="Resultados Anteriores" link='results'/>
                </div>
              </div>    
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-2">Notícias</h3>
                <div className="flex flex-col space-y-3">
                  <NavItem icon={<FaNewspaper />} label="Últimas Notícias" link='/feed'/>
                </div>
              </div>
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-2">Shop</h3>
                <div className="flex flex-col space-y-3">
                  <NavItem icon={<FaShoppingBag />} label="Nossa Loja" link='https://www.furia.gg/'/>
                </div>
              </div>
              
    
            </nav>
    
          </div>
    
          <div className="p-6">
            <NavItem icon={<FaUser />} label="Meu Perfil" />
          </div>
        </div>
      );
    };

