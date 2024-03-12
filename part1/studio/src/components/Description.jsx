import styles from './Description.module.css;
import React from 'react';
let authorLink = ""
let authorName = ""
let authorPhoto = ""


return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Blog name</a> 
       </div>
    </div>
 );
 

 class RecipeDescription extends React.Component{
    rendor(){
        <div> 
   <div>
      <h1>How I started making my own Pho</h1>
      <p>It is savoury and delicious</p>
   </div>
   <RecipeAuthor />
</div>
    }
 }