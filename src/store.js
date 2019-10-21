import { createStore } from "redux";
// import { settings } from "cluster";

const initialState = {
  recipeName: "",
  recipeCategory: "",
  firstName: "",
  lastName: "",
  ingredients: [],
  instructions: [],
  recipes: []
};

export const ADD_INSTRUCTIONS = "ADD_INSTRUCTIONS";
export const ADD_RECIPE = "ADD_RECIPE";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const LAST_NAME = "LAST_NAME";
export const FIRST_NAME = "FIRST_NAME";
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload };
    case UPDATE_CATEGORY:
      return { ...state, category: payload };
    case FIRST_NAME:
      return { ...state, firstName: payload };
    case LAST_NAME:
      return { ...state, lastName: payload };
    case ADD_INGREDIENT:
      const newIngredients = [...state.ingredients, payload];
      return { ...state, ingredients: newIngredients };
    case ADD_INSTRUCTIONS:
      const newInstructions = [...state.instructions, payload];
      return { ...state, instructions: newInstructions };
    case ADD_RECIPE:
      const {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      } = state;
      const recipe = {
        name,
        category,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      };
      const newRecipes = [...state.recipes, recipe];
      return { ...state, recipes: newRecipes };
    default:
      return state;
  }
}

export default createStore(reducer);
