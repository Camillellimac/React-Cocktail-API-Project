import './App.css';
import CocktailDetailsPage from './pages/CocktailDetailsPage';
import CocktailRandomPage from './pages/CocktailRandomPage';
import CocktailsCat from './pages/CocktailsCat';
import CocktailsIngredientsPage from './pages/CocktailsIngredientsPage';
import CocktailsPage from './pages/CocktailsPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/drinks" element = {<CocktailsPage />} />
        <Route path="/random" element = {<CocktailRandomPage />} />
        <Route path="/categories" element = {<CocktailsCat />} />
        <Route path='/ingredients' element = {<CocktailsIngredientsPage />} />
        <Route path="/drinks/:id" element = {<CocktailDetailsPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
