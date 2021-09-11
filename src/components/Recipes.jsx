import { useState} from "react";

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
};

const elvenGauntletRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletRecipe);

function Recipes() {
    const [recipe, setRecipe] = useState({})
    return(
        <div>
            <h3>Current Recipes</h3>
            <button onClick={ () => setRecipe(elvenShieldRecipe)}>
                ELven Shield Recipe
            </button>
            <button onClick={ () => setRecipe(elvenGauntletRecipe)}>
                ELven Gauntlet Recipe
            </button>

            <ul>
                {Object.keys(recipe).map((material) => (
                    <li key={material}>
                        {material}: {recipe[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Recipes;