function generateRecipe() {
  var recipeContainer = document.getElementById("recipeContainer");

  var ingredients = [
    "Sweet Rice Flour",
    "Coconut milk",
    "Scraped Coconut",
    "Coconut sugar",
    "Food Colouring (Not required)",
  ];


  var steps = [
    "Boiling coconut milk with coconut sugar for making filling sauce.",
    "Stir until they all melted and the colour gets darker.",
    "Add scraped coconut to the sauce and stir until it nearly drys.",
    "Remove the scraped coconut and shape them into a small ball.",
    "Leave the filling to cool down.",
    "Mix Flour with colour of choice.",
    "Slowly pour the coconut milk while stiring the flour until it becomes shapeable.",
    "Make dough into discs large enough to wrap around the coconut filling and make sure when wrapping there is no filling showing.",
    "Boil a pot of water and start to add your coconut dough balls once water is bubbling.",
    "When the balls start to float to the top they are ready to remove and place on the plate with the grated coconut.",
    "Rolling all balls around so the cooked dough balls are totally covered in coconut.",
    "Enjoy!",
  ];

  recipeContainer.innerHTML = "";

  var ingredientsHeading = document.createElement("h3");
  ingredientsHeading.textContent = "Ingredients:";
  recipeContainer.appendChild(ingredientsHeading);

  var ingredientsList = document.createElement("ul");
  for (var i = 0; i < ingredients.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = ingredients[i];
    ingredientsList.classList.add("ingredients-list");
    ingredientsList.appendChild(listItem);
  }
  recipeContainer.appendChild(ingredientsList);

  var stepsHeading = document.createElement("h3");
  stepsHeading.textContent = "Steps:";
  recipeContainer.appendChild(stepsHeading);

  var stepsList = document.createElement("ol");
  for (var j = 0; j < steps.length; j++) {
    var listItem = document.createElement("li");
    listItem.textContent = steps[j];
    stepsList.classList.add("steps-list");
    stepsList.appendChild(listItem);
  }
  recipeContainer.appendChild(stepsList);
}


