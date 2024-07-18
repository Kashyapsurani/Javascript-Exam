const recipes = [
    {
        name: 'Pizza',
        calories: 540,
        image: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
        description: 'Classic Italian pizza with cheese and toppings.',
        rating: 4.5,
        price: 150,
    },
    {
        name: 'Paneer Tikka Masala',
        calories: 620,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96nYwZITOvJ8ONkkqaujS6WbnpQ2fERh-Bg&s',
        description: 'Indian dish with grilled paneer in a spiced tomato sauce.',
        rating: 4.8,
        price: 200,
    },
    {
        name: 'Salad',
        calories: 350,
        image: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad.jpg',
        description: 'Fresh salad with vegetables and dressing.',
        rating: 4.2,
        price: 40,
    },
    {
        name: 'Burger',
        calories: 700,
        image: 'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_2560%2Cc_limit/Smashburger-recipe-120219.jpg',
        description: 'Classic American burger with beef patty, cheese, lettuce, and tomato.',
        rating: 4.0,
        price: 140,
    },
    {
        name: 'Chocolate Cake',
        calories: 450,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUL9cGJKm-C5WqAfRaFHPIDW2ZKJL6xUoztw&s',
        description: 'Decadent chocolate cake with creamy frosting.',
        rating: 4.7,
        price: 170,
    },
    {
        name: 'Shake',
        calories: 450,
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/03/28/cookies-and-cream-milkshake.jpg.rend.hgtvcom.1280.1280.suffix/1648501387256.jpeg',
        description: 'Creamy cookies and cream milkshake.',
        rating: 4.7,
        price: 170,
    },
    {
        name: 'Ice Cream',
        calories: 450,
        image: 'https://navbharattimes.indiatimes.com/thumb/85861077/most-expensive-ice-cream-in-the-world-in-hindi-85861077.jpg?imgsize=207722&width=1600&height=900&resizemode=75',
        description: 'Exquisite and luxurious ice cream.',
        rating: 4.7,
        price: 170,
    },
    {
        name: 'Fries',
        calories: 450,
        image: 'https://i.pinimg.com/736x/7a/91/9c/7a919c3422cacd4dc679128e77758a45.jpg',
        description: 'Golden crispy fries.',
        rating: 4.7,
        price: 170,
    },
    {
        name: 'Frankie',
        calories: 450,
        image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2014/11/frankie-recipe-4.jpg',
        description: 'Spicy and flavorful Indian street food wrap.',
        rating: 4.7,
        price: 170,
    },
    {
        name: 'Noodles',
        calories: 450,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujx5jb6WvhHb7XcW46Rmel1lts4KHWkuBfw&s',
        description: 'Delicious noodles with assorted vegetables.',
        rating: 4.7,
        price: 170,
    },
    {
        name: 'Choco Lava Cake',
        calories: 450,
        image: 'https://www.bakingo.com/blog/wp-content/uploads/2022/06/best-choco-lava-cake-recipe-ever-1200x900.jpg',
        description: 'Rich chocolate cake with a gooey molten center.',
        rating: 4.7,
        price: 170,
    },
    {
        name: 'Dosa',
        calories: 450,
        image: 'https://content.jdmagicbox.com/comp/surat/b3/0261px261.x261.190731220821.e6b3/catalogue/dr-fancy-dhosa-kathiyawadi-punjabi-surat-0wwao1j3uy.jpg',
        description: 'South Indian crispy crepe made from fermented rice and lentil batter.',
        rating: 4.7,
        price: 170,
    },
    {
        name: 'Khavsa',
        calories: 450,
        image: 'https://i.ytimg.com/vi/ac79Abwg1dA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBG5sBLMAs-oiK8UOJO7HS-2D7UpA',
        description: 'Gujarati street food made from whole wheat flour and jaggery.',
        rating: 4.7,
        price: 170,
    },
];

const form = document.querySelector('form');
const recipeContainer = document.getElementById('recipe-container');

function saveRecipesToLocalStorage(recipes) {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

function loadRecipesFromLocalStorage() {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
    return storedRecipes ? storedRecipes : [];
}

let savedRecipes = loadRecipesFromLocalStorage();

displayRecipes(savedRecipes);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let inputVal = document.querySelector('.input').value.toLowerCase().trim();

    const filteredRecipes = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(inputVal);
    });

    recipeContainer.innerHTML = '';

    displayRecipes(filteredRecipes);
    saveRecipesToLocalStorage(filteredRecipes);
});

// Function to display recipes
function displayRecipes(recipes) {
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe-item');
        recipeElement.innerHTML = `
                    <h3>${recipe.name}</h3>
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <p><strong>Price:</strong> ${recipe.price}</p>
                    <p><strong>Calories:</strong> ${recipe.calories}</p>
                    <p><strong>Description:</strong> ${recipe.description}</p>
                    <p><strong>Rating:</strong> ${recipe.rating}</p>
                    <button onclick="deleteRecipe('${recipe.name}')">Delete</button>
                    <button class="add-to-cart" onclick="addToCart('${recipe.name}', ${recipe.price})">Add to Cart</button>
                `;
        recipeContainer.appendChild(recipeElement);
    });
}

function deleteRecipe(recipeName) {
    savedRecipes = savedRecipes.filter(recipe => recipe.name !== recipeName);
    saveRecipesToLocalStorage(savedRecipes);
    recipeContainer.innerHTML = '';
    displayRecipes(savedRecipes);
}

function addToCart(recipeName, price) {
    alert(`Added ${recipeName} to cart. Price: ${price}`);
}