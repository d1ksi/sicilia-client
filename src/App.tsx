import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/client/PageCapacity';
import MenuPage from './components/client/MenuPage';
import MenuDishesPage from './components/client/MenuDishesPage';
import SCdishesPage from './components/client/SCdishesPage';


function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:dishesID" element={<MenuDishesPage />} />
          <Route path="/menuCat/:catID/sc/:subcategoryID" element={<SCdishesPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
