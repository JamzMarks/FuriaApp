interface NavItemProps {
    icon: React.ReactNode;
    label: string;
  }
  
  export default function NavItem({ icon, label }: NavItemProps){
    return (
      <div className="flex items-center space-x-4 cursor-pointer hover:text-purple-400 transition-colors">
        {icon}
        <span>{label}</span>
      </div>
    );
  };