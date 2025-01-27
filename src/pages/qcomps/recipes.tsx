export const recipes = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: new Set(["tomatoes", "cucumber", "onion", "olives", "feta"]),
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: new Set([
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ]),
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: new Set([
      "chickpeas",
      "olive oil",
      "garlic cloves",
      "lemon",
      "tahini",
    ]),
  },
];

export default function RecipeList() {
  const recipesDisplay = recipes.map((recipe) => (
    <RecipeDiv
      key={recipe.id}
      name={recipe.name}
      ingredients={recipe.ingredients}
    />
  ));
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.name}: {Array.from(recipe.ingredients).join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
