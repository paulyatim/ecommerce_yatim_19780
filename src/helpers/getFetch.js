const productos = [
    {id: 1, category: "donuts", name: "Glazed Donut", stock: 20, image:"images/glazed.png", price:1.99},
    {id: 2, category: "donuts", name: "Chocolate Glazed Donut", stock: 20, image:"images/chocolate-glazed.png", price:1.99},
    {id: 3, category: "donuts", name: "Strawberry Iced Donut", stock: 20, image:"images/strawberry-iced.png"},
    {id: 4, category: "donuts", name: "Strawberry Iced Donut with Sprinkles", stock: 20, image:"images/strawberry-iced-sprinkles.png", price:1.99},
    {id: 5, category: "donuts", name: "Cinnamon Glazed Donut", stock: 20, image:"images/cinnamon-glazed.png", price:1.99},
    {id: 6, category: "donuts", name: "Chocolate Iced Donut with Sprinkles", stock: 20, image:"images/chocolate-iced-sprinkles.png", price:1.99},
    {id: 7, category: "donuts", name: "Chocolate Iced Donut", stock: 20, image:"images/chocolate-iced.png", price:1.99},
    {id: 8, category: "donuts", name: "Cinnamon Sugar Donut", stock: 20, image:"images/cinnamon-sugar.png", price:1.99},
    {id: 9, category: "donuts", name: "Cake Batter Donut", stock: 20, image:"images/cake-batter.png", price:1.99},
    {id: 10, category: "donuts", name: "Maple Iced Donut", stock: 20, image:"images/maple-iced.png", price:1.99},
    {id: 11, category: "donuts", name: "Sour Cream Donut", stock: 20, image:"images/sour-cream.png", price:1.99},
    {id: 12, category: "donuts", name: "Chocolate Cake Donut", stock: 20, image:"images/chocolate-cake.png", price:2.49},
    {id: 13, category: "donuts", name: "Blueberry Cake Donut", stock: 20, image:"images/blueberry-cake.png", price:2.49},
    {id: 14, category: "donuts", name: "Double Dark Chocolate Donut", stock: 20, image:"images/double-dark-chocolate.png", price:1.99},
    {id: 15, category: "donuts", name: "Chocolate Filled Donut", stock: 20, image:"images/chocolate-filled.png", price:1.99},
    {id: 16, category: "donuts", name: "Chocolate Filled Iced Donut", stock: 20, image:"images/chocolate-filled-iced.png", price:1.99},
    {id: 17, category: "donuts", name: "Chocolate Iced Raspberry Filled Donut", stock: 20, image:"images/chocolate-iced-raspberry-filled.png", price:1.99},
    {id: 18, category: "donuts", name: "Cinnamon Apple Filled Donut", stock: 20, image:"images/cinnamon-apple-filled.png", price:1.99},
    {id: 19, category: "donuts", name: "Cream Filled Donut", stock: 20, image:"images/cream-filled.png", price:1.99},
    {id: 20, category: "donuts", name: "Lemon Filled Donut", stock: 20, image:"images/lemon-filled.png", price:1.99},
    {id: 21, category: "donuts", name: "Raspberry Filled Donut", stock: 20, image:"images/raspberry-filled.png", price:1.99},
    {id: 22, category: "donuts", name: "Reese's Donut", stock: 20, image:"images/reeses.png", price:2.99},
    {id: 23, category: "donuts", name: "Cookies n' Cream Donut", stock: 20, image:"images/cookies-n-cream.png", price:2.99},
    {id: 24, category: "donuts", name: "Dulce de Leche Donut", stock: 20, image:"images/dulce-de-leche.png", price:1.49},
    {id: 25, category: "donuts", name: "Cinnamon Bun Donut", stock: 20, image:"images/cinnamon-bun.png", price:2.99},
    {id: 26, category: "donuts", name: "Pumpkin Spice Donut", stock: 20, image:"images/pumpkin-spice.png", price:2.99}
];

export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
});
