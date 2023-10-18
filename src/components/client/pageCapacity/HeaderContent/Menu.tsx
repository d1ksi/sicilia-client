import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';



const Menu: React.FC = () => {
   return (
      <nav className="mt-10" >
         <ul className="flex justify-between">
            <li className="mr-3 flex flex-row justify-center items-center">
               < HomeIcon />
               <a className='ml-0.5 text-xl menu-text' href="#">Головна</a>
            </li>
            <li className="mx-2 flex flex-row justify-center items-center">
               < InfoIcon />
               <a className='ml-0.5 text-xl menu-text' href="#about">Про нас</a>
            </li>
            <li className="mx-2 flex flex-row justify-center items-center">
               <RestaurantMenuIcon />
               <a className='ml-0.5 text-xl menu-text' href="menu">Меню</a>
            </li>
            <li className="mx-2 flex flex-row justify-center items-center">
               <MapIcon />
               <a className='ml-0.5 text-xl menu-text' href="#map">Де знаходимося</a>
            </li>
            <li className="ml-3 flex flex-row justify-center items-center">
               <LocalPhoneIcon />
               <a className='ml-0.5 text-xl menu-text' href="#footer">Контакти</a>
            </li>
         </ul>
      </nav>
   )
}

export default Menu