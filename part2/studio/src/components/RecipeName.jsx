import recipedata from "./recipe.json";

function RecipeName() {
  const RecipeName = recipedata.map{(data)=>(
    <div key = {data.name}>
      <div><h1>{data.name}</h1></div>
    </div>
  )
  return <div>{RecipeName}</div>
  }
}

export default RecipeName;

//import return the name of the recipe as a level 1 header