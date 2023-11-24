import './App.css';
import CocktailRandomPage from './pages/CocktailRandomPage';
import CocktailsPage from './pages/CocktailsPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<CocktailsPage />} />
        <Route path="/random" element = {<CocktailRandomPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
