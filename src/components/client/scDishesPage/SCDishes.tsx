import { useParams } from "react-router-dom";
import { Dishes, Good } from "../../interface";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { get_dishes } from "../../request/dishes";


const SCDishes: React.FC = () => {
   const { subcategoryID } = useParams();
   const [dish, setDish] = useState<Good[]>([]);

   const { loading, error, data } = useQuery<Dishes>(get_dishes, {
      variables: {
         id: subcategoryID
      }
   });

   useEffect(() => {
      if (!loading) {
         setDish(data?.getCategory?.goods || []);
      }
      if (!error) {
         console.log(error);
      }
   }, [data, loading, error]);

   console.log(loading)
   console.log(error)
   console.log(dish)

   return (
      <main>
         {subcategoryID}
      </main>
   )
}

export default SCDishes