const recipes = [
  {name:"Grilled Chicken Bowl", calories:520, protein:"45g", carbs:"50g", fat:"12g",
   ingredients:["Chicken breast","Brown rice","Broccoli","Olive oil"],
   steps:["Grill chicken","Cook rice","Steam broccoli","Combine and serve"]},
  {name:"Protein Pancakes", calories:400, protein:"30g", carbs:"45g", fat:"8g",
   ingredients:["Oats","Eggs","Protein powder","Almond milk"],
   steps:["Blend ingredients","Cook both sides","Serve warm"]},
  {name:"Salmon & Quinoa", calories:600, protein:"40g", carbs:"55g", fat:"20g",
   ingredients:["Salmon","Quinoa","Spinach"],
   steps:["Bake salmon","Cook quinoa","Serve together"]},
  {name:"Beef Stir Fry", calories:650, protein:"50g", carbs:"40g", fat:"25g",
   ingredients:["Lean beef","Bell peppers","Soy sauce"],
   steps:["Cook beef","Add vegetables","Stir fry 5 minutes"]},
  {name:"Greek Yogurt Bowl", calories:300, protein:"25g", carbs:"30g", fat:"5g",
   ingredients:["Greek yogurt","Berries","Nuts"],
   steps:["Mix ingredients","Serve chilled"]},
  {name:"Avocado Egg Toast", calories:350, protein:"20g", carbs:"30g", fat:"15g",
   ingredients:["Whole grain bread","Avocado","Egg"],
   steps:["Toast bread","Mash avocado","Add egg on top"]},
  {name:"Turkey Wrap", calories:450, protein:"35g", carbs:"40g", fat:"10g",
   ingredients:["Turkey slices","Whole wheat wrap","Lettuce"],
   steps:["Place ingredients","Roll tightly","Serve"]},
  {name:"Tuna Salad", calories:400, protein:"38g", carbs:"20g", fat:"15g",
   ingredients:["Tuna","Mixed greens","Olive oil"],
   steps:["Mix all ingredients","Serve fresh"]},
  {name:"Sweet Potato & Chicken", calories:550, protein:"42g", carbs:"60g", fat:"10g",
   ingredients:["Chicken breast","Sweet potato"],
   steps:["Bake sweet potato","Grill chicken","Serve together"]},
  {name:"Protein Smoothie", calories:350, protein:"35g", carbs:"40g", fat:"5g",
   ingredients:["Protein powder","Banana","Almond milk"],
   steps:["Blend all ingredients","Serve cold"]},
  {name:"Oatmeal & Peanut Butter", calories:450, protein:"20g", carbs:"55g", fat:"18g",
   ingredients:["Oats","Peanut butter","Milk","Honey"],
   steps:["Cook oats","Add peanut butter","Mix and serve"]},
  {name:"Chicken Caesar Salad", calories:480, protein:"42g", carbs:"20g", fat:"22g",
   ingredients:["Grilled chicken","Romaine","Caesar dressing","Parmesan"],
   steps:["Grill chicken","Toss salad","Add dressing"]},
  {name:"Egg White Omelette", calories:250, protein:"30g", carbs:"5g", fat:"5g",
   ingredients:["Egg whites","Spinach","Mushroom"],
   steps:["Whisk egg whites","Cook in pan","Add veggies"]},
  {name:"Quinoa Veggie Bowl", calories:500, protein:"18g", carbs:"65g", fat:"15g",
   ingredients:["Quinoa","Zucchini","Carrot","Bell pepper"],
   steps:["Cook quinoa","Sauté veggies","Mix together"]},
  {name:"Grilled Shrimp Plate", calories:430, protein:"38g", carbs:"30g", fat:"12g",
   ingredients:["Shrimp","Rice","Asparagus"],
   steps:["Grill shrimp","Cook rice","Serve together"]},
  {name:"Lean Turkey Meatballs", calories:520, protein:"45g", carbs:"35g", fat:"15g",
   ingredients:["Ground turkey","Garlic","Tomato sauce"],
   steps:["Shape meatballs","Bake","Serve with sauce"]},
  {name:"High Protein Pasta", calories:600, protein:"50g", carbs:"70g", fat:"10g",
   ingredients:["Protein pasta","Chicken","Tomato sauce"],
   steps:["Boil pasta","Cook chicken","Mix together"]},
  {name:"Tofu Stir Fry", calories:450, protein:"30g", carbs:"40g", fat:"18g",
   ingredients:["Tofu","Broccoli","Soy sauce"],
   steps:["Cook tofu","Add vegetables","Stir fry"]},
  {name:"Protein Overnight Oats", calories:420, protein:"28g", carbs:"50g", fat:"12g",
   ingredients:["Oats","Protein powder","Chia seeds","Milk"],
   steps:["Mix ingredients","Refrigerate overnight"]},
  {name:"Avocado Chicken Salad", calories:550, protein:"40g", carbs:"20g", fat:"30g",
   ingredients:["Chicken","Avocado","Spinach"],
   steps:["Grill chicken","Mix ingredients","Serve fresh"]},
  {name:"Salmon Avocado Toast", calories:500, protein:"35g", carbs:"35g", fat:"22g",
   ingredients:["Whole grain bread","Salmon","Avocado"],
   steps:["Toast bread","Add toppings"]},
  {name:"Chicken Burrito Bowl", calories:650, protein:"48g", carbs:"70g", fat:"15g",
   ingredients:["Chicken","Brown rice","Beans","Corn"],
   steps:["Cook rice","Grill chicken","Assemble bowl"]},
  {name:"Banana Protein Muffins", calories:350, protein:"22g", carbs:"40g", fat:"10g",
   ingredients:["Banana","Oats","Protein powder"],
   steps:["Mix ingredients","Bake 20 minutes"]},
  {name:"Chia Pudding", calories:300, protein:"15g", carbs:"30g", fat:"12g",
   ingredients:["Chia seeds","Milk","Honey"],
   steps:["Mix ingredients","Refrigerate 4 hours"]},
  {name:"Steak & Veggies", calories:700, protein:"55g", carbs:"25g", fat:"40g",
   ingredients:["Lean steak","Broccoli","Carrots"],
   steps:["Grill steak","Steam veggies"]},
  {name:"Greek Chicken Wrap", calories:480, protein:"38g", carbs:"45g", fat:"12g",
   ingredients:["Chicken","Whole wheat wrap","Tzatziki"],
   steps:["Grill chicken","Wrap ingredients"]},
  {name:"Healthy Pizza", calories:600, protein:"40g", carbs:"65g", fat:"20g",
   ingredients:["Whole wheat crust","Chicken","Mozzarella"],
   steps:["Prepare crust","Add toppings","Bake 15 minutes"]},
  {name:"Brown Rice & Tofu", calories:500, protein:"28g", carbs:"65g", fat:"12g",
   ingredients:["Brown rice","Tofu","Soy sauce"],
   steps:["Cook rice","Cook tofu","Serve together"]},
  {name:"Chicken Fajitas", calories:550, protein:"42g", carbs:"50g", fat:"15g",
   ingredients:["Chicken","Bell peppers","Tortilla"],
   steps:["Cook chicken","Add peppers","Wrap in tortilla"]},
  {name:"Protein Energy Balls", calories:250, protein:"12g", carbs:"20g", fat:"10g",
   ingredients:["Oats","Peanut butter","Protein powder"],
   steps:["Mix ingredients","Roll into balls","Chill before serving"]}
];

function openRecipe(index){
  const r = recipes[index];
  document.getElementById("modal").style.display="flex";
  document.getElementById("recipeDetail").innerHTML=`
    <h2>${r.name}</h2>
    <p><strong>Calories:</strong> ${r.calories} kcal |
    <strong>Protein:</strong> ${r.protein} |
    <strong>Carbs:</strong> ${r.carbs} |
    <strong>Fat:</strong> ${r.fat}</p>
    <h3>Ingredients</h3>
    <ul>${r.ingredients.map(i=>`<li>${i}</li>`).join("")}</ul>
    <h3>Instructions</h3>
    <ol>${r.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
  `;
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

function toggleTheme(){
  document.body.classList.toggle("dark");
}

// Add this JS (replace previous calculate() function and add listeners)


document.addEventListener("DOMContentLoaded", function() {
  const heightUnit = document.getElementById("heightUnit");
  const heightCmWrap = document.getElementById("heightCmWrap");
  const heightFtWrap = document.getElementById("heightFtWrap");
  const calcBtn = document.getElementById("calcBtn");
  const resetBtn = document.getElementById("resetBtn");

  // toggle height inputs when unit changed
  heightUnit.addEventListener("change", function() {
    if (this.value === "ft") {
      heightCmWrap.style.display = "none";
      heightFtWrap.style.display = "flex";
    } else {
      heightCmWrap.style.display = "block";
      heightFtWrap.style.display = "none";
    }
  });

  // Calculate when pressing button
  calcBtn.addEventListener("click", calculate);
  resetBtn.addEventListener("click", function(){
    document.getElementById("weight").value = "";
    document.getElementById("heightCm").value = "";
    document.getElementById("heightFt").value = "";
    document.getElementById("heightIn").value = "";
    document.getElementById("caloriesResult").innerText = "";
    document.getElementById("proteinResult").innerText = "";
    document.getElementById("bmiResult").innerText = "";
  });
});

function calculate() {
  // read weight
  let weightRaw = document.getElementById("weight").value;
  let weightUnit = document.getElementById("weightUnit").value;

  // read height depending on unit
  let heightUnit = document.getElementById("heightUnit").value;

  // validation
  if (!weightRaw || weightRaw <= 0) {
    alert("Please enter a valid weight.");
    return;
  }

  let weight = parseFloat(weightRaw);
  if (isNaN(weight) || weight <= 0) {
    alert("Weight must be a number greater than 0.");
    return;
  }

  // convert weight to kg if needed
  if (weightUnit === "lb") {
    weight = weight * 0.45359237; // lb -> kg
  }

  // height -> cm
  let heightCm = null;
  if (heightUnit === "cm") {
    let h = parseFloat(document.getElementById("heightCm").value);
    if (!h || isNaN(h) || h <= 0) {
      alert("Please enter a valid height in cm.");
      return;
    }
    heightCm = h;
  } else { // ft + in
    let ftRaw = document.getElementById("heightFt").value;
    let inRaw = document.getElementById("heightIn").value;

    // allow empty inches (treat as 0)
    let ft = parseInt(ftRaw, 10);
    let inches = (inRaw === "" ? 0 : parseFloat(inRaw));

    if (isNaN(ft) || ft < 0) {
      alert("Please enter feet as an integer (e.g. 5).");
      return;
    }
    if (isNaN(inches) || inches < 0) {
      alert("Please enter inches as a number (0-11).");
      return;
    }
    // If user entered inches >= 12, convert to feet+inches automatically
    if (inches >= 12) {
      const extraFeet = Math.floor(inches / 12);
      ft += extraFeet;
      inches = inches % 12;
    }

    heightCm = ft * 30.48 + inches * 2.54;
  }

  // Now we have weight in kg and height in cm
  // calories estimate (simple): weight * 30
  const calories = weight * 30;

  // protein estimate: weight * 1.6 g
  const protein = weight * 1.6;

  // additionally compute BMI for extra info
  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);

  // display results
  document.getElementById("caloriesResult").innerText =
    `🔥 Recommended Calories: ${Math.round(calories)} kcal/day`;

  document.getElementById("proteinResult").innerText =
    `💪 Recommended Protein: ${protein.toFixed(1)} g/day`;

  document.getElementById("bmiResult").innerText =
    `📊 BMI: ${bmi.toFixed(1)} (${bmiCategory(bmi)})`;
}

function bmiCategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}
function filterRecipes() {
  const minProtein = parseFloat(document.getElementById("searchProtein").value);
  const maxCalories = parseFloat(document.getElementById("searchCalories").value);

  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    const recipe = recipes[index];

    let recipeProtein = parseFloat(recipe.protein);
    let recipeCalories = recipe.calories;

    let proteinMatch = true;
    let calorieMatch = true;

    if (!isNaN(minProtein)) {
      proteinMatch = recipeProtein >= minProtein;
    }

    if (!isNaN(maxCalories)) {
      calorieMatch = recipeCalories <= maxCalories;
    }

    if (proteinMatch && calorieMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function resetFilter() {
  document.getElementById("searchProtein").value = "";
  document.getElementById("searchCalories").value = "";

  document.querySelectorAll(".card").forEach(card => {
    card.style.display = "block";
  });
}
function showHome() {
  document.getElementById("homePage").style.display = "block";
  document.getElementById("converterPage").style.display = "none";
}

function showConverter() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("converterPage").style.display = "block";
}
function convertWeight() {
  let value = parseFloat(document.getElementById("weightValue").value);
  let type = document.getElementById("weightType").value;
  if (isNaN(value)) return;

  let result;

  if (type === "kg-lb") {
    result = value * 2.20462;
    document.getElementById("weightResult").innerText =
      `${value} kg = ${result.toFixed(2)} lb`;
  } else {
    result = value / 2.20462;
    document.getElementById("weightResult").innerText =
      `${value} lb = ${result.toFixed(2)} kg`;
  }
}

function convertHeight() {
  let value = parseFloat(document.getElementById("heightValue").value);
  let type = document.getElementById("heightType").value;
  if (isNaN(value)) return;

  let result;

  if (type === "cm-ft") {
    result = value / 30.48;
    document.getElementById("heightResult").innerText =
      `${value} cm = ${result.toFixed(2)} ft`;
  } else {
    result = value * 30.48;
    document.getElementById("heightResult").innerText =
      `${value} ft = ${result.toFixed(2)} cm`;
  }
}

function convertGram() {
  let value = parseFloat(document.getElementById("gramValue").value);
  let type = document.getElementById("gramType").value;
  if (isNaN(value)) return;

  let result;

  if (type === "g-oz") {
    result = value * 0.035274;
    document.getElementById("gramResult").innerText =
      `${value} g = ${result.toFixed(2)} oz`;
  } else {
    result = value / 0.035274;
    document.getElementById("gramResult").innerText =
      `${value} oz = ${result.toFixed(2)} g`;
  }
}

function convertMl() {
  let value = parseFloat(document.getElementById("mlValue").value);
  let type = document.getElementById("mlType").value;
  if (isNaN(value)) return;

  let result;

  if (type === "ml-cup") {
    result = value / 240;
    document.getElementById("mlResult").innerText =
      `${value} ml = ${result.toFixed(2)} cups`;
  } else {
    result = value * 240;
    document.getElementById("mlResult").innerText =
      `${value} cups = ${result.toFixed(2)} ml`;
  }
}

function showAbout() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("converterPage").style.display = "none";
  document.getElementById("aboutPage").style.display = "block";
}
function toggleDetails(card) {
  card.classList.toggle("active");
}