import { Link } from "react-router-dom";
import { Heart, Clock, Users, ArrowUpRight, Trash2 } from "lucide-react";
import { useRecipes } from "../context/RecipeContext";
import "./RecipeCard.css";

export default function RecipeCard({ recipe }) {
  const { toggleFavorite, deleteRecipe } = useRecipes();

  const difficultyColor = {
    Easy: "diff-easy",
    Medium: "diff-medium",
    Hard: "diff-hard",
  };

  return (
    <article className="recipe-card">
      <div className="card-image-wrap">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="card-image"
          loading="lazy"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80";
          }}
        />
        <div className="card-overlay">
          <span className={`difficulty-badge ${difficultyColor[recipe.difficulty]}`}>
            {recipe.difficulty}
          </span>
          <button
            className={`fav-btn ${recipe.isFavorite ? "fav-active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(recipe.id);
            }}
            aria-label={recipe.isFavorite ? "Remove from favorites" : "Save to favorites"}
          >
            <Heart
              size={16}
              strokeWidth={2}
              className="fav-icon"
              fill={recipe.isFavorite ? "var(--crimson)" : "none"}
            />
          </button>
        </div>
        <div className="category-tag">{recipe.category}</div>
      </div>

      <div className="card-body">
        <h3 className="card-title">
          <Link to={`/recipe/${recipe.id}`} className="card-title-link">
            {recipe.title}
          </Link>
        </h3>
        <p className="card-description">{recipe.description}</p>

        <div className="card-meta">
          <span className="meta-item">
            <Clock size={13} strokeWidth={2} className="meta-icon" />
            <span>{recipe.cookTime}</span>
          </span>
          <span className="meta-divider">•</span>
          <span className="meta-item">
            <Users size={13} strokeWidth={2} className="meta-icon" />
            <span>{recipe.servings} servings</span>
          </span>
        </div>

        <div className="card-actions">
          <Link to={`/recipe/${recipe.id}`} className="btn-view">
            <span>View Recipe</span>
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>
          <button
            className="btn-delete"
            onClick={() => deleteRecipe(recipe.id)}
            aria-label="Delete recipe"
            title="Delete recipe"
          >
            <Trash2 size={15} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </article>
  );
}
