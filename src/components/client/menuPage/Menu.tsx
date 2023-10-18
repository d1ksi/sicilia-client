import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { get_menu } from "../../request/menu";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Category, MenuData } from "../../interface";



const Menu: React.FC = () => {
   const { data, loading, error } = useQuery<MenuData>(get_menu);
   const [menu, setMenu] = useState<Category[]>([]);
   const [visibleItems, setVisibleItems] = useState<number>(0);


   useEffect(() => {
      if (!loading) {
         setMenu(data?.getMenu?.categories || []);
      }
      if (!error) {
         console.log(error);
      }
   }, [data, loading]);

   useEffect(() => {
      if (menu.length > 0) {
         const interval = setInterval(() => {
            if (visibleItems < menu.length - 1) {
               setVisibleItems((prev) => prev + 1);
            } else {
               clearInterval(interval);
            }
         }, 400);

         return () => clearInterval(interval);
      }
   }, [menu, visibleItems]);

   return (
      <main>
         <section className="flex flex-wrap justify-center my-12 mx-8 sect">
            {menu.map((category, index) => (
               <Box
                  sx={{
                     display: "flex",
                     flexWrap: "wrap",
                     "& > :not(style)": {
                        m: 1,
                     }
                  }}
               >
                  <motion.div
                     key={category.id}
                     initial={{ opacity: 0, y: 20 }}
                     animate={
                        index <= visibleItems
                           ? { opacity: 1, y: 0 }
                           : { opacity: 0, y: 20 }
                     }
                  >
                     <Paper elevation={3} className="rounded-lg">
                        <Link to={`/menu/${category.id}`} key={category.id}>
                           <motion.div
                              className="cursor-pointer flex flex-col items-center card  p-5 border-2 rounded-lg m-1 border-yellow-600"
                           >
                              <img
                                 className="w-72 h-52"
                                 src={category.img}
                                 alt="category img"
                              />
                              <motion.div
                                 whileHover={{ scale: 1.2 }}
                                 whileTap={{ scale: 0.9 }}
                                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                 className="flex items-center justify-center category-text my-8 rounded-full"
                              >
                                 <RestaurantMenuIcon className="mr-2 ml-4" />
                                 <p className="text-2xl font-medium tracking-wider text-center">
                                    {category.title.split(' ').map((word, index, array) => (
                                       <React.Fragment key={index}>
                                          {word}
                                          {index === 0 && array.length >= 2 && <br />}
                                       </React.Fragment>
                                    ))}
                                 </p>
                                 <RestaurantIcon className="ml-2 mr-4" />
                              </motion.div>
                           </motion.div></Link>
                     </Paper>
                  </motion.div>
               </Box>
            ))}
         </section>
      </main>
   );
};

export default Menu;
