import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UtensilsCrossed, Heart, Plus, Menu, X, BookOpen } from "lucide-react";
import { useRecipes } from "../context/RecipeContext";
import "./Navbar.css";

export default function Navbar() {
  const { recipes, favorites } = useRecipes();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isRecipeDetailsActive =
    isActive("/recipe-details") ||
    isActive("/recipes") ||
    location.pathname.startsWith("/recipe/");

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <div className="logo-symbol">
            <UtensilsCrossed size={18} strokeWidth={2} />
          </div>
          <div className="logo-text-group">
            <span className="logo-text">Recipe<span className="logo-accent">Vault</span></span>
            <span className="logo-subtext">KITCHEN ARCHIVE</span>
          </div>
        </Link>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <span>Home</span>
          </Link>

          <Link
            to="/recipe-details"
            className={`nav-link ${isRecipeDetailsActive ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <BookOpen size={15} strokeWidth={2} className="nav-icon" />
            <span>Recipe Details</span>
            <span className="nav-count">{recipes.length}</span>
          </Link>

          <Link
            to="/favorites"
            className={`nav-link ${isActive("/favorites") ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            <Heart size={15} strokeWidth={2} className="nav-icon" />
            <span>Favorites</span>
            <span className="nav-count fav">{favorites.length}</span>
          </Link>

          <Link
            to="/add"
            className="add-btn"
            onClick={() => setMenuOpen(false)}
          >
            <Plus size={16} strokeWidth={2.2} />
            <span>Add Recipe</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
