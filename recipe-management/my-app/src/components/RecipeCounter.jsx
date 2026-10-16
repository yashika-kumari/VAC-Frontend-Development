import { BookOpen, Heart, Layers, Sparkles } from "lucide-react";
import { useRecipes } from "../context/RecipeContext";
import "./RecipeCounter.css";

export default function RecipeCounter() {
  const { recipes, favorites } = useRecipes();

  const categories = recipes.reduce((acc, r) => {
    acc[r.category] = (acc[r.category] || 0) + 1;
    return acc;
  }, {});

  const stats = [
    {
      label: "Total Collection",
      value: recipes.length,
      icon: BookOpen,
      unit: "recipes",
    },
    {
      label: "Saved Favorites",
      value: favorites.length,
      icon: Heart,
      unit: "dishes",
    },
    {
      label: "Cuisines",
      value: Object.keys(categories).length,
      icon: Layers,
      unit: "types",
    },
    {
      label: "Easy Prep",
      value: recipes.filter((r) => r.difficulty === "Easy").length,
      icon: Sparkles,
      unit: "recipes",
    },
  ];

  return (
    <section className="counter-section">
      <div className="counter-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="stat-card">
              <div className="stat-icon-wrap">
                <Icon size={18} strokeWidth={2} />
              </div>
              <div className="stat-content">
                <div className="stat-value-group">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-unit">{stat.unit}</span>
                </div>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
