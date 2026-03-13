import React from "react";
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"

const MainContent = () => {
    const [ingredients, setIngredients] = React.useState([] );
    const [recipe, setRecipe] = React.useState("");
    const recipeSection = React.useRef(null);
    
    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== "") {
            recipeSection.current.scrollIntoView({behaviour: 'smooth'})
        }
    }, [recipe])
    

    const ingredientsListItems = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })

    const addIngredient = (formData) => {
        const newIngredient = formData.get('ingredient');
        console.log(newIngredient);
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    const getRecipe = async () => {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input 
                    type="text"
                    placeholder="e.g oregano"
                    aria-label="Add Ingredient"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList 
                ref={recipeSection}
                ingredients={ingredients}
                ingredientsListItems={ingredientsListItems}
                getRecipe={getRecipe}
            />}
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}

export default MainContent