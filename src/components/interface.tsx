export interface Category {
   title: string;
   id: string;
   img: string;
   goods: [Good]
}

export interface MenuData {
   getMenu: {
      categories: Category[];
   };
}

export interface Good {
   filling: string;
   id: string;
   img: string;
   name: string;
   price: number;
   discount: number;
   active: boolean;
}

export interface Dishes {
   getCategory: {
      subCat: [Category];
      goods: [Good];
      id: string;
      img: string;
      title: string;
   }
}