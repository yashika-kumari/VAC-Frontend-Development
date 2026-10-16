import { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

const initialRecipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    category: "Italian",
    cookTime: "25 min",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&q=80",
    description:
      "A classic Roman pasta dish made with eggs, Pecorino Romano, guanciale, and black pepper. Creamy, rich and utterly satisfying.",
    ingredients: [
      "400g spaghetti",
      "200g guanciale or pancetta",
      "4 large eggs",
      "100g Pecorino Romano",
      "Black pepper",
      "Salt",
    ],
    steps: [
      "Cook spaghetti in salted boiling water until al dente.",
      "Fry guanciale in a pan until crispy.",
      "Whisk eggs with grated Pecorino Romano and black pepper.",
      "Drain pasta, reserve some pasta water.",
      "Toss pasta with guanciale off heat, add egg mixture, stir quickly.",
      "Add pasta water to loosen. Serve immediately.",
    ],
    isFavorite: false,
  },
  {
    id: 2,
    title: "Butter Chicken",
    category: "Indian",
    cookTime: "45 min",
    servings: 6,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&q=80",
    description:
      "Tender chicken pieces in a velvety tomato-butter sauce with aromatic spices. A beloved Indian classic.",
    ingredients: [
      "800g chicken breast",
      "1 cup yogurt",
      "400g crushed tomatoes",
      "100g butter",
      "1 cup heavy cream",
      "Garam masala, cumin, coriander",
      "Garlic & ginger paste",
      "Kashmiri chili",
    ],
    steps: [
      "Marinate chicken in yogurt and spices for 2 hours.",
      "Grill or pan-fry chicken until charred. Set aside.",
      "Sauté onions, garlic and ginger until golden.",
      "Add tomatoes, spices and simmer 20 mins.",
      "Blend sauce until smooth. Return to pan.",
      "Add butter, cream and chicken. Simmer 10 mins. Serve with naan.",
    ],
    isFavorite: true,
  },
  {
    id: 3,
    title: "Avocado Toast",
    category: "Breakfast",
    cookTime: "10 min",
    servings: 2,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=500&q=80",
    description:
      "Creamy smashed avocado on crispy sourdough toast, topped with a poached egg and chili flakes.",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "2 eggs",
      "Lemon juice",
      "Chili flakes",
      "Salt & pepper",
      "Olive oil",
    ],
    steps: [
      "Toast the bread until golden and crispy.",
      "Mash avocado with lemon juice, salt and pepper.",
      "Poach eggs in simmering water with a splash of vinegar.",
      "Spread avocado on toast.",
      "Top with poached egg, chili flakes and a drizzle of olive oil.",
    ],
    isFavorite: false,
  },
  {
    id: 4,
    title: "Chocolate Lava Cake",
    category: "Dessert",
    cookTime: "20 min",
    servings: 4,
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80",
    description:
      "Decadent individual chocolate cakes with a warm, molten center that flows out when you cut into them.",
    ingredients: [
      "200g dark chocolate",
      "150g butter",
      "4 eggs + 4 yolks",
      "100g sugar",
      "60g flour",
      "Cocoa powder for dusting",
    ],
    steps: [
      "Preheat oven to 200°C. Grease ramekins and dust with cocoa.",
      "Melt chocolate and butter together.",
      "Whisk eggs, yolks and sugar until pale.",
      "Fold in chocolate mixture, then flour.",
      "Pour into ramekins. Bake 10-12 mins.",
      "Turn out onto plates and serve immediately with ice cream.",
    ],
    isFavorite: true,
  },
  {
    id: 5,
    title: "Greek Salad",
    category: "Salad",
    cookTime: "15 min",
    servings: 4,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80",
    description:
      "A refreshing Mediterranean salad with crisp vegetables, olives, and creamy feta cheese.",
    ingredients: [
      "3 tomatoes",
      "1 cucumber",
      "1 red onion",
      "200g feta cheese",
      "Kalamata olives",
      "Olive oil",
      "Dried oregano",
      "Salt",
    ],
    steps: [
      "Chop tomatoes, cucumber and onion into chunky pieces.",
      "Arrange in a large bowl with olives.",
      "Place feta on top (traditionally in a block).",
      "Drizzle generously with olive oil.",
      "Season with oregano and salt. Serve immediately.",
    ],
    isFavorite: false,
  },
  {
    id: 6,
    title: "Tacos al Pastor",
    category: "Mexican",
    cookTime: "35 min",
    servings: 4,
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80",
    description:
      "Marinated pork tacos with pineapple, cilantro, and onion — a Mexican street food staple.",
    ingredients: [
      "600g pork shoulder",
      "Achiote paste",
      "Pineapple slices",
      "Corn tortillas",
      "Cilantro",
      "White onion",
      "Lime",
      "Salsa verde",
    ],
    steps: [
      "Marinate pork in achiote, spices and pineapple juice overnight.",
      "Cook pork on a hot skillet or grill until caramelized.",
      "Warm tortillas on a dry pan.",
      "Slice pork thinly onto tortillas.",
      "Top with pineapple, onion, cilantro and salsa. Squeeze lime over.",
    ],
    isFavorite: false,
  },
];

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState(initialRecipes);

  const addRecipe = (newRecipe) => {
    const recipe = {
      ...newRecipe,
      id: Date.now(),
      isFavorite: false,
      image:
        newRecipe.image ||
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80",
    };
    setRecipes((prev) => [recipe, ...prev]);
  };

  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter((r) => r.id !== id));
  };

  const toggleFavorite = (id) => {
    setRecipes((prev) =>
      prev.map((r) => (r.id === id ? { ...r, isFavorite: !r.isFavorite } : r))
    );
  };

  const favorites = recipes.filter((r) => r.isFavorite);

  return (
    <RecipeContext.Provider
      value={{ recipes, favorites, addRecipe, deleteRecipe, toggleFavorite }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  return useContext(RecipeContext);
}
