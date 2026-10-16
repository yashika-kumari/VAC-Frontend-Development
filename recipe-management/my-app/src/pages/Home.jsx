import { useState } from "react";
import { Search, X, Sparkles, UtensilsCrossed } from "lucide-react";
import { useRecipes } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import RecipeCounter from "../components/RecipeCounter";
import "./Home.css";

const CATEGORIES = ["All", "Italian", "Indian", "Breakfast", "Dessert", "Salad", "Mexican"];

export default function Home() {
  const { recipes } = useRecipes();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filtered = recipes
    .filter((r) => {
      const matchSearch =
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.category.toLowerCase().includes(search.toLowerCase()) ||
        (r.description && r.description.toLowerCase().includes(search.toLowerCase()));
      const matchCategory = activeCategory === "All" || r.category === activeCategory;
      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (sortBy === "az") return a.title.localeCompare(b.title);
      if (sortBy === "time") return parseInt(a.cookTime) - parseInt(b.cookTime);
      if (sortBy === "servings") return b.servings - a.servings;
      return 0;
    });

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <Sparkles size={13} className="hero-eyebrow-icon" />
            <span>KITCHEN ARCHIVE & INSPIRATION</span>
          </div>

          <h1 className="hero-title">
            Discover & Save<br />
            <span className="hero-highlight">Delicious Recipes</span>
          </h1>

          <p className="hero-sub">
            A curated culinary vault designed for passionate home cooks. Explore dishes, save favorites, and master authentic flavor.
          </p>

          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search recipes, ingredients, cuisines..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
              id="recipe-search"
            />
            {search && (
              <button
                className="search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search query"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container">
        <RecipeCounter />

        {/* Filters & Menu Tabs */}
        <div className="menu-header-bar">
          <div className="menu-title-block">
            <h2 className="menu-heading">Explore Recipes</h2>
            <p className="menu-subheading">
              Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? "recipe" : "recipes"}
              {activeCategory !== "All" && <> in <em>{activeCategory}</em></>}
            </p>
          </div>

          <div className="sort-box">
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              id="recipe-sort"
            >
              <option value="default">Sort by: Default</option>
              <option value="az">Alphabetical (A → Z)</option>
              <option value="time">Cook Time (Fastest)</option>
              <option value="servings">Servings (Largest)</option>
            </select>
          </div>
        </div>

        {/* Categories Pills */}
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

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="recipe-grid">
            {filtered.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon-box">
              <UtensilsCrossed size={26} strokeWidth={1.8} />
            </div>
            <h3>No recipes found</h3>
            <p>Try searching for a different keyword or select another category filter.</p>
          </div>
        )}
      </div>
    </main>
  );
}
