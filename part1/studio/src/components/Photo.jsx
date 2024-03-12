import styles from './Description.module.css';

export default function RecipePhoto(){
    return(
        <img src="valid URL to recipe photo" alt="recipe photo" className = {styles.imageUpdates} />
    )
}
<div className="App">
   <div>
      <RecipePhoto />
      <div>
         <RecipeDescription />
         <RecipeIngredients />
      </div>
   </div>
 </div>