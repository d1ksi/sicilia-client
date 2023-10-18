import Logo from "./HeaderContent/Logo";
import Menu from "./HeaderContent/Menu";

const SiciliaHeader: React.FC = () => {
   return (
      <header className="flex flex-col justify-center items-center">
         <Logo />
         <Menu />
      </header >
   )
}



export default SiciliaHeader;