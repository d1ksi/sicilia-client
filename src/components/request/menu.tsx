import { gql } from "@apollo/client";

export const get_menu = gql`
query allCategories {
  getMenu {
    categories {
      title
      id
      img
      goods {
        name
      }
      subCat {
        id
        title
        categories {
          id
          title
        }
      }
    }
  }
}`