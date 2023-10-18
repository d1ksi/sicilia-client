import { gql } from "@apollo/client";

export const get_dishes = gql`query cat($id: ID){
   getCategory(id: $id){
     title
     id
     img
     goods{
       id
       name
       price
       discount
       img
       filling
       active
     }
     subCat{
      id
      img
      title
      categories{
        title
      }
    }
   }
 }`