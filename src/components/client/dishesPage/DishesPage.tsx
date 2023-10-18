import React from "react";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { get_dishes } from "../../request/dishes";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Category, Dishes, Good } from "../../interface";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const DishesPage: React.FC = () => {
  const [subCat, setSubCat] = useState<Category[]>([]);
  const [dish, setDish] = useState<Good[]>([]);
  const [visibleItems, setVisibleItems] = useState<number>(0);
  const url = window.location.href;
  const parts = url.split("/");
  const id = parts[parts.length - 1];

  const { loading, error, data } = useQuery<Dishes>(get_dishes, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    if (!loading) {
      setSubCat(data?.getCategory?.subCat || []);
      setDish(data?.getCategory?.goods || []);
    }
    if (!error) {
      console.log(error);
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (subCat.length > 0) {
      const interval = setInterval(() => {
        if (visibleItems < subCat.length - 1) {
          setVisibleItems((prev) => prev + 1);
        } else {
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    } else if (dish.length > 0) {
      const interval = setInterval(() => {
        if (visibleItems < dish.length - 1) {
          setVisibleItems((prev) => prev + 1);
        } else {
          clearInterval(interval);
        }
      }, 400);
      return () => clearInterval(interval);
    }
  }, [subCat, dish, visibleItems]);

  return (
    <main>
      <section className="flex flex-wrap justify-center my-12 mx-8 sect">
        {loading ? (
          <div className="flex items-center">
            <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
              <CircularProgress color="inherit" />
            </Stack>
            <p className="ml-2 font-mono text-2xl tracking-wider">LOADING...</p>
          </div>
        ) : subCat.length > 0 ? (
          subCat.map((subCategory, index) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                },
              }}
            >
              <motion.div
                key={subCategory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  index <= visibleItems
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
              >
                {/* {subCategory.goods ?
                        <Paper elevation={3} className="rounded-lg">
                           <Link to={`/menuCat/${id}/sc/${subCategory.id}`} key={subCategory.id}>
                              <motion.div
                                 className="cursor-pointer flex flex-col items-center card  p-5 border-2 rounded-lg m-1 border-yellow-600 h-96"
                              >
                                 <img
                                    className="w-72 h-52"
                                    src={subCategory.img}
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
                                       {subCategory.title.split(' ').map((word, index, array) => (
                                          <React.Fragment key={index}>
                                             {word}
                                             {index === 0 && array.length >= 2 && <br />}
                                          </React.Fragment>
                                       ))}
                                    </p>
                                    <RestaurantIcon className="ml-2 mr-4" />
                                 </motion.div>
                              </motion.div></Link>
                        </Paper> : null} */}
                <Paper elevation={3} className="rounded-lg">
                  <Link
                    to={`/menuCat/${id}/sc/${subCategory.id}`}
                    key={subCategory.id}
                  >
                    <motion.div className="cursor-pointer flex flex-col items-center card  p-5 border-2 rounded-lg m-1 border-yellow-600 h-96">
                      <img
                        className="w-72 h-52"
                        src={subCategory.img}
                        alt="category img"
                      />
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        className="flex items-center justify-center category-text my-8 rounded-full"
                      >
                        <RestaurantMenuIcon className="mr-2 ml-4" />
                        <p className="text-2xl font-medium tracking-wider text-center">
                          {subCategory.title
                            .split(" ")
                            .map((word, index, array) => (
                              <React.Fragment key={index}>
                                {word}
                                {index === 0 && array.length >= 2 && <br />}
                              </React.Fragment>
                            ))}
                        </p>
                        <RestaurantIcon className="ml-2 mr-4" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </Paper>
              </motion.div>
            </Box>
          ))
        ) : (
          dish
            .filter((food) => food.active === true)
            .map((food, index) => (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                  },
                }}
              >
                <motion.div
                  key={food.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    index <= visibleItems
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                >
                  <Paper elevation={3} className="rounded-lg">
                    <motion.div className="cursor-pointer flex flex-col items-center card  p-5 border-2 rounded-lg m-1 border-yellow-600">
                      <img
                        className="w-72 h-52"
                        src={food.img}
                        alt="category img"
                      />
                      <div className="flex items-center justify-center category-text my-4 rounded-full">
                        <p className="text-2xl font-medium tracking-wider text-center mx-3">
                          {food.name}
                        </p>
                      </div>
                      <div className="w-72 h-24">
                        <p className="flex flex-wrap w-72 font-mono text-sm leading-4 h-24">
                          {food.filling}
                        </p>
                      </div>
                      <div className="flex w-full mt-2 bg-yellow-500">
                        {food.discount ? (
                          <p className="font-sans ml-3 my-2 text-lg font-semibold text-red-600">
                            Акційна ціна: {food.discount}
                          </p>
                        ) : (
                          <p className="font-sans ml-3 my-2 text-lg font-semibold">
                            Ціна: {food.price}
                          </p>
                        )}
                        {food.discount ? (
                          <p className="mt-4 ml-1 font-mono font-medium tracking-widest text-red-600">
                            /грн
                          </p>
                        ) : (
                          <p className="mt-4 ml-1 font-mono font-medium tracking-widest">
                            /грн
                          </p>
                        )}
                      </div>
                      <motion.button
                        className="flex mt-4 w-full justify-end mr-8"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <div className="flex rounded-full border-2 border-yellow-600 px-4 py-1">
                          <p className="font-mono font-semibold text-lg">
                            В кошик
                          </p>
                          <AddShoppingCartIcon />
                        </div>
                      </motion.button>
                    </motion.div>
                  </Paper>
                </motion.div>
              </Box>
            ))
        )}
      </section>
    </main>
  );
};

export default DishesPage;
