import { useNavigate } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { get_dishes } from "../../request/dishes";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Category, Dishes, Good } from "../../interface";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const MenuHeader: React.FC = () => {
   const [subCat, setSubCat] = useState<Category[]>([]);
   const [dish, setDish] = useState<Good[]>([]);
   const url = window.location.href;
   const parts = url.split('/');
   const id = parts[parts.length - 1];
   const checkName = parts[parts.length - 4];
   const idMama = parts[parts.length - 3];
   const urlName = parts[parts.length - 2];

   const { loading, error, data } = useQuery<Dishes>(get_dishes, {
      variables: {
         id: id
      }
   });

   useEffect(() => {
      if (!loading) {
         setSubCat(data?.getCategory?.subCat || []);
         setDish(data?.getCategory?.goods || [])
      }
      if (!error) {
         console.log(error);
      }
   }, [data, loading]);
   const navigate = useNavigate();
   const clickHome = () => {
      navigate("/")
   }
   const clickMenu = () => {
      navigate(`/menu`)
   }
   const clickMenuCat = () => {
      navigate(`/menu/${idMama}`)
   }
   const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {
         right: -2,
         top: 12,
         border: `2px solid ${theme.palette.background.paper}`,
         padding: '0 4px',
      },
   }));

   return (
      <header className="px-4 w-screen flex justify-between items-center">
         <section className="flex">
            <div
               onClick={clickHome}
               className="flex cursor-pointer h-14 rounded-full w-52 mt-6 bg-orange-100 justify-center items-center"
            >
               <HomeIcon className="mr-2" />
               <p className="text-xl italic font-serif ">На головну</p>
            </div>
            {subCat.length > 0 || dish.length > 0 ?
               <div
                  onClick={clickMenu}
                  className="flex cursor-pointer h-14 rounded-full w-32 mt-6 bg-orange-100 justify-center items-center ml-4"
               >
                  <MenuBookIcon className="mr-2" />
                  <p className="text-xl italic font-serif ">Меню</p>
               </div> :
               null
            }
            {urlName === "sc" ? <div
               onClick={clickMenu}
               className="flex cursor-pointer h-14 rounded-full w-32 mt-6 bg-orange-100 justify-center items-center ml-4"
            >
               <MenuBookIcon className="mr-2" />
               <p className="text-xl italic font-serif ">Меню</p>
            </div> : null}
            {checkName === "menuCat" ? <div
               onClick={clickMenuCat}
               className="flex cursor-pointer h-14 rounded-full w-36 mt-6 bg-orange-100 justify-center items-center ml-4"
            >
               <ArrowBackIosIcon className="mr-1" />
               <p className="text-xl italic font-serif ">До вибру</p>
            </div> : null}
         </section>
         <section className="flex">
            <div className="flex cursor-pointer h-14 rounded-full w-52 mt-6 bg-orange-100 justify-center items-center">
               <p className="text-xl italic font-serif ">Профіль</p>
               <AccountCircleIcon className="ml-2" />
            </div>
            <div className="ml-3 flex cursor-pointer h-14 rounded-full w-20 mt-6 bg-orange-100 justify-center items-center">
               <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="success">
                     <ShoppingCartIcon />
                  </StyledBadge>
               </IconButton>
            </div>
         </section>
      </header>
   )
}

export default MenuHeader