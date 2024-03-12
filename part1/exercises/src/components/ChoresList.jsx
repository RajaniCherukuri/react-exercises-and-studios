import React from 'react';
import classes from "./choresList.module.css";

const choresList = (props) =>{
   const chores = ["Dishes","Laundry","Garden","Star watching"]
   return (
      <div>
         <h3 className = {classes.choresheading}>Chores:</h3>
         <ol>
            {/* 1st method
             <li className = {classes.choresText}>{chores[0]}</li>
            <li className = {classes.choresText}>{chores[1]}</li>
            <li className = {classes.choresText}>{chores[2]}</li>
            <li className = {classes.choresText}>{chores[3]}</li> */}
            {/* 2nd method */}
            {chores.map((chore,index) =>(
            <li key = {index} className = {classes.choresText}>
               {chore}
            </li>
            ))}

         </ol>

      </div>
   );
};

export default choresList;

