// Sample restaurant data
const restaurants = [
    {
    name: "Bistro Bliss",
    image: "bistro-bliss.jpg",
    description: "Cozy French bistro with delicious cuisine."
    },
    {
    name: "Tasty Tacos",
    image: "tasty-tacos.jpg",
    description: "Authentic Mexican food with a modern twist."
    },
    {
    name: "Sushi Haven",
    image: "sushi-haven.jpg",
    description: "Fresh sushi and Japanese cuisine in a serene atmosphere."
    }
    ];
    
    // Generate restaurant cards
    const restaurantContainer = document.querySelector(".restaurant-container");
    restaurants.forEach((restaurant) => {
    const card = document.createElement("div");
    card.classList.add("restaurant-card");
    card.innerHTML = `
    <img src="${restaurant.image}" alt="${restaurant.name}">
    <h3>${restaurant.name}</h3>
    <p>${restaurant.description}</p>
    `;
    restaurantContainer.appendChild(card);
    });