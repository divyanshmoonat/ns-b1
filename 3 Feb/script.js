// console.log("Revision");

/**
 * @author: Divyansh
 * version : 1.0.0
 */

let timeout;
function onKeyUpHandler() {
  console.log("Key pressed");
  // API Call
  clearTimeout(timeout); // Delete the older timeout
  timeout = setTimeout(async () => {
    // Register a new timeout
    const recipesAPI = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=1576e9db9eb84e5d834b5b5554c5252a"
    );
    const recipes = await recipesAPI.json();
    console.log(recipes);
  }, 1000);
}

const inputField = document.getElementById("input");

inputField.addEventListener("keyup", onKeyUpHandler);
