import React from 'react';
import SideBar from './components/SideBar';

interface UserLayoutProps {
  children: React.ReactNode;
}
const user = {
    name: `james marques`,
    avatarUrl: `furia-seeklogo.svg`
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
        <SideBar user={user}/>

      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default UserLayout;