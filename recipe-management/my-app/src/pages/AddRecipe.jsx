import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle, FileText, List, ChefHat, CheckCircle2, ArrowLeft } from "lucide-react";
import { useRecipes } from "../context/RecipeContext";
import "./AddRecipe.css";

const CATEGORIES = ["Italian", "Indian", "Breakfast", "Dessert", "Salad", "Mexican", "Other"];
const DIFFICULTIES = ["Easy", "Medium", "Hard"];

export default function AddRecipe() {
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "",
    difficulty: "",
    cookTime: "",
    servings: "",
    image: "",
    description: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.title.trim())       e.title = "Recipe title is required.";
    if (!form.category)           e.category = "Please select a category.";
    if (!form.difficulty)         e.difficulty = "Please select a difficulty level.";
    if (!form.cookTime.trim())    e.cookTime = "Estimated cook time is required.";
    if (!form.servings || form.servings < 1) e.servings = "Enter a valid number of servings.";
    if (!form.description.trim()) e.description = "A brief description is required.";
    if (!form.ingredients.trim()) e.ingredients = "Please enter at least one ingredient.";
    if (!form.steps.trim())       e.steps = "Please enter at least one preparation step.";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    addRecipe({
      ...form,
      servings: parseInt(form.servings),
      ingredients: form.ingredients
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      steps: form.steps
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
    });

    setSubmitted(true);
    setTimeout(() => navigate("/"), 1600);
  };

  if (submitted) {
    return (
      <div className="add-page">
        <div className="success-card">
          <div className="success-icon-wrap">
            <CheckCircle2 size={42} strokeWidth={2} />
          </div>
          <h2>Recipe Published</h2>
          <p>Your culinary creation has been added to the vault.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="add-page">
      <div className="container">
        <div className="page-header">
          <div className="page-header-icon-box">
            <PlusCircle size={24} strokeWidth={2} />
          </div>
          <div>
            <h1 className="page-title">Add New Recipe</h1>
            <p className="page-subtitle">Document and archive your signature dishes in the kitchen vault.</p>
          </div>
        </div>

        <form className="recipe-form" onSubmit={handleSubmit} noValidate>
          {/* Basic Info */}
          <section className="form-section">
            <div className="section-heading-row">
              <FileText size={17} className="section-icon" />
              <h2 className="section-heading">Basic Information</h2>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="title">Recipe Title *</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="e.g. Traditional Tonkotsu Ramen"
                  value={form.title}
                  onChange={handleChange}
                  className={errors.title ? "input-error" : ""}
                />
                {errors.title && <span className="error-msg">{errors.title}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="image">Image URL (Optional)</label>
                <input
                  id="image"
                  name="image"
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={form.image}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className={errors.category ? "input-error" : ""}
                >
                  <option value="">Select a category</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.category && <span className="error-msg">{errors.category}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="difficulty">Difficulty *</label>
                <select
                  id="difficulty"
                  name="difficulty"
                  value={form.difficulty}
                  onChange={handleChange}
                  className={errors.difficulty ? "input-error" : ""}
                >
                  <option value="">Select difficulty</option>
                  {DIFFICULTIES.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                {errors.difficulty && <span className="error-msg">{errors.difficulty}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="cookTime">Cooking Time *</label>
                <input
                  id="cookTime"
                  name="cookTime"
                  type="text"
                  placeholder="e.g. 35 min"
                  value={form.cookTime}
                  onChange={handleChange}
                  className={errors.cookTime ? "input-error" : ""}
                />
                {errors.cookTime && <span className="error-msg">{errors.cookTime}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="servings">Servings *</label>
                <input
                  id="servings"
                  name="servings"
                  type="number"
                  min="1"
                  placeholder="e.g. 4"
                  value={form.servings}
                  onChange={handleChange}
                  className={errors.servings ? "input-error" : ""}
                />
                {errors.servings && <span className="error-msg">{errors.servings}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Overview Description *</label>
              <textarea
                id="description"
                name="description"
                rows={3}
                placeholder="A brief overview of the flavor profile, heritage, or special notes..."
                value={form.description}
                onChange={handleChange}
                className={errors.description ? "input-error" : ""}
              />
              {errors.description && <span className="error-msg">{errors.description}</span>}
            </div>
          </section>

          {/* Ingredients */}
          <section className="form-section">
            <div className="section-heading-row">
              <List size={17} className="section-icon" />
              <h2 className="section-heading">Ingredients</h2>
            </div>
            <div className="form-group">
              <label htmlFor="ingredients">List each ingredient on a new line *</label>
              <textarea
                id="ingredients"
                name="ingredients"
                rows={6}
                placeholder={"400g fresh ramen noodles\n2 soft boiled eggs\n4 slices chashu pork\n1 bunch scallions, finely chopped"}
                value={form.ingredients}
                onChange={handleChange}
                className={errors.ingredients ? "input-error" : ""}
              />
              {errors.ingredients && <span className="error-msg">{errors.ingredients}</span>}
            </div>
          </section>

          {/* Steps */}
          <section className="form-section">
            <div className="section-heading-row">
              <ChefHat size={17} className="section-icon" />
              <h2 className="section-heading">Preparation Steps</h2>
            </div>
            <div className="form-group">
              <label htmlFor="steps">List each step on a new line *</label>
              <textarea
                id="steps"
                name="steps"
                rows={7}
                placeholder={"Prepare and heat the broth over medium flame.\nCook noodles in boiling water for 90 seconds until al dente.\nDivide broth into warmed bowls and gently add the noodles.\nArrange toppings with care and serve immediately."}
                value={form.steps}
                onChange={handleChange}
                className={errors.steps ? "input-error" : ""}
              />
              {errors.steps && <span className="error-msg">{errors.steps}</span>}
            </div>
          </section>

          <div className="form-footer">
            <button
              type="button"
              className="btn-cancel"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Save Recipe to Vault
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
