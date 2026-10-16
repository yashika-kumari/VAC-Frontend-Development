import { Heart } from "lucide-react";
import { useRecipes } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import "./Favorites.css";

export default function Favorites() {
  const { favorites } = useRecipes();

  return (
    <main className="favorites-page">
      <div className="container">
        <div className="page-header">
          <div className="page-header-icon-box">
            <Heart size={24} strokeWidth={2} fill="var(--crimson)" />
          </div>
          <div>
            <h1 className="page-title">Favorite Recipes</h1>
            <p className="page-subtitle">
              {favorites.length > 0
                ? `${favorites.length} saved ${favorites.length === 1 ? "dish" : "dishes"} in your private kitchen collection`
                : "Your favorites list is currently empty"}
            </p>
          </div>
        </div>

        {favorites.length > 0 ? (
          <div className="recipe-grid">
            {favorites.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon-box">
              <Heart size={26} strokeWidth={1.8} />
            </div>
            <h3>No favorites saved yet</h3>
            <p>
              Click the heart icon on any recipe card to save it here for quick access.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
