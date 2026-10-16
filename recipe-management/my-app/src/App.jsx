import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecipeProvider } from "./context/RecipeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeDetails />} />
          <Route path="/recipe-details" element={<RecipeDetails />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/add" element={<AddRecipe />} />
        </Routes>
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
