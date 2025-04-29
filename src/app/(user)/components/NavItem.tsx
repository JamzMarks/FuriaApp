import Link from "next/link";

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    link?: string;
  }
  
  export default function NavItem({ icon, label, link }: NavItemProps){
    return (
      <div className="flex items-center space-x-4 cursor-pointer hover:text-purple-400 transition-colors">
        {icon}
        {link && 
          <Link href={link}>
            <span>{label}</span>
          </Link>}
          {!link && 
            <span>{label}</span>
          }
      </div>
    );
  };