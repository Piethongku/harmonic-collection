var recipeData = {
    "Recipe": [
    {
       "title": "Chocolate Chip Cookies", 
       "servings": 4,
       "ingredients": [
           { "name": "Butter", "quantity": "1 cup" },
           { "name": "Sugar", "quantity": "1 cup" },
           { "name": "Brown Sugar", "quantity": "1 cup" },
           { "name": "Vanilla Extract", "quantity": "1 tsp" },
           { "name": "Eggs", "quantity": "2" },
           { "name": "Baking Soda", "quantity": "1 tsp" },
           { "name": "Salt", "quantity": "1 tsp" },
           { "name": "Flour", "quantity": "3 cups" },
          { "name": "Chocolate Chips", "quantity": "2 cups" }
      ]
    }
  ]
};
  
  
  var CreateElementButton = document.querySelector('.create-element-button')
  var myContainer =  document.querySelector('.container');
  
  console.log(myContainer);
  
  CreateElementButton.addEventListener('click' , function(){
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');

    recipeData.Recipe.forEach(recipe => {

    })
 
    myContainer.appendChild(recipeDiv);
  });