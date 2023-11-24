import './App.css';
import CocktailsPage from './pages/CocktailsPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<CocktailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
