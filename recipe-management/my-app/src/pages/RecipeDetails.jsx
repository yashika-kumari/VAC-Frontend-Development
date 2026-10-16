import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Users,
  Heart,
  Trash2,
  List,
  ChefHat,
  Sparkles,
  UtensilsCrossed,
  BookOpen,
  Search,
  X,
} from "lucide-react";
import { useRecipes } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import "./RecipeDetails.css";

const CATEGORIES = ["All", "Italian", "Indian", "Breakfast", "Dessert", "Salad", "Mexican"];

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, toggleFavorite, deleteRecipe } = useRecipes();

  // Search & Filter state for the "All Recipe Details" view
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const difficultyColor = {
    Easy: "diff-easy",
    Medium: "diff-medium",
    Hard: "diff-hard",
  };

  // Case 1: Route is /recipe-details (no specific id provided) -> Display All Recipes
  if (!id) {
    const filteredRecipes = recipes.filter((r) => {
      const matchSearch =
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.category.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === "All" || r.category === activeCategory;
      return matchSearch && matchCategory;
    });

    return (
      <main className="all-recipes-page">
        <div className="container">
          {/* Header */}
          <div className="page-header">
            <div className="page-header-icon-box">
              <BookOpen size={24} strokeWidth={2} />
            </div>
            <div>
              <h1 className="page-title">Recipe Details & Directory</h1>
              <p className="page-subtitle">
                Explore complete ingredients, preparation steps, and culinary details for all{" "}
                <strong>{recipes.length}</strong> recipes.
              </p>
            </div>
          </div>

          {/* Search & Category Filter */}
          <div className="catalog-toolbar">
            <div className="catalog-search-bar">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search recipe details..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="catalog-search-input"
              />
              {search && (
                <button
                  className="search-clear"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            <div className="categories-row">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`cat-btn ${activeCategory === cat ? "cat-active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="catalog-status">
            <span>
              Displaying <strong>{filteredRecipes.length}</strong> {filteredRecipes.length === 1 ? "recipe" : "recipes"}
              {activeCategory !== "All" && <> in <em>{activeCategory}</em></>}
            </span>
          </div>

          {/* Recipe Grid */}
          {filteredRecipes.length > 0 ? (
            <div className="recipe-grid">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon-box">
                <UtensilsCrossed size={26} strokeWidth={1.8} />
              </div>
              <h3>No recipes found</h3>
              <p>Try searching for a different keyword or choose another category filter.</p>
            </div>
          )}
        </div>
      </main>
    );
  }

  // Case 2: Specific recipe id provided (/recipe/:id)
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return (
      <div className="details-page">
        <div className="not-found">
          <div className="empty-icon-box">
            <UtensilsCrossed size={30} strokeWidth={1.8} />
          </div>
          <h2>Recipe Not Found</h2>
          <p>The dish you are looking for does not exist in the vault.</p>
          <button className="btn-back" onClick={() => navigate("/recipe-details")}>
            <ArrowLeft size={16} />
            <span>View All Recipes</span>
          </button>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate("/recipe-details");
  };

  return (
    <main className="details-page">
      {/* Hero Image Section */}
      <div className="details-hero">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="details-hero-img"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80";
          }}
        />
        <div className="details-hero-overlay" />
        <div className="details-hero-content container">
          <button className="btn-back" onClick={() => navigate(-1)}>
            <ArrowLeft size={16} strokeWidth={2} />
            <span>Back</span>
          </button>

          <div className="details-badges">
            <span className={`difficulty-badge ${difficultyColor[recipe.difficulty]}`}>
              {recipe.difficulty}
            </span>
            <span className="category-tag">{recipe.category}</span>
          </div>

          <h1 className="details-title">{recipe.title}</h1>
          <p className="details-description">{recipe.description}</p>

          <div className="details-meta">
            <div className="meta-pill">
              <Clock size={14} strokeWidth={2} />
              <span>{recipe.cookTime}</span>
            </div>
            <div className="meta-pill">
              <Users size={14} strokeWidth={2} />
              <span>{recipe.servings} Servings</span>
            </div>
            <div className="meta-pill">
              <Sparkles size={14} strokeWidth={2} />
              <span>{recipe.difficulty} Prep</span>
            </div>
          </div>

          <div className="details-actions">
            <button
              className={`btn-fav ${recipe.isFavorite ? "btn-fav-active" : ""}`}
              onClick={() => toggleFavorite(recipe.id)}
            >
              <Heart
                size={16}
                strokeWidth={2}
                fill={recipe.isFavorite ? "currentColor" : "none"}
              />
              <span>{recipe.isFavorite ? "Saved to Favorites" : "Save to Favorites"}</span>
            </button>

            <button className="btn-del" onClick={handleDelete} title="Delete recipe">
              <Trash2 size={16} strokeWidth={1.8} />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>

      {/* Culinary Detail Grid */}
      <div className="details-content container">
        <div className="details-grid">
          {/* Ingredients */}
          <section className="ingredients-section">
            <div className="section-title-wrap">
              <List size={20} className="section-icon" />
              <h2>Required Ingredients</h2>
            </div>
            <ul className="ingredient-list">
              {recipe.ingredients.map((item, i) => (
                <li key={i} className="ingredient-item">
                  <span className="ingredient-bullet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Steps */}
          <section className="steps-section">
            <div className="section-title-wrap">
              <ChefHat size={20} className="section-icon" />
              <h2>Preparation Steps</h2>
            </div>
            <ol className="step-list">
              {recipe.steps.map((step, i) => (
                <li key={i} className="step-item">
                  <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}
