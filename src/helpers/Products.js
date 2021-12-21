const products = [
    {id: "1", category: "regular", name: "Glazed Donut", stock: 20, image:"glazed.png", price:1.99, desc:"Short description of donut"},
    {id: "2", category: "regular", name: "Chocolate Glazed Donut", stock: 20, image:"chocolate-glazed.png", price:1.99, desc:"Short description of donut"},
    {id: "3", category: "regular", name: "Strawberry Iced Donut", stock: 20, image:"strawberry-iced.png", price:1.99, desc:"Short description of donut"},
    {id: "4", category: "regular", name: "Strawberry Iced Donut with Sprinkles", stock: 20, image:"strawberry-iced-sprinkles.png", price:1.99, desc:"Short description of donut"},
    {id: "5", category: "regular", name: "Cinnamon Glazed Donut", stock: 20, image:"cinnamon-glazed.png", price:1.99, desc:"Short description of donut"},
    {id: "6", category: "regular", name: "Chocolate Iced Donut with Sprinkles", stock: 20, image:"chocolate-iced-sprinkles.png", price:1.99, desc:"Short description of donut"},
    {id: "7", category: "regular", name: "Chocolate Iced Donut", stock: 20, image:"chocolate-iced.png", price:1.99, desc:"Short description of donut"},
    {id: "8", category: "regular", name: "Cinnamon Sugar Donut", stock: 20, image:"cinnamon-sugar.png", price:1.99, desc:"Short description of donut"},
    {id: "9", category: "regular", name: "Maple Iced Donut", stock: 20, image:"maple-iced.png", price:1.99, desc:"Short description of donut"},
    {id: "10", category: "filled", name: "Cake Batter Donut", stock: 20, image:"cake-batter.png", price:2.49, desc:"Short description of donut"},
    {id: "11", category: "special", name: "Sour Cream Donut", stock: 20, image:"sour-cream.png", price:2.49, desc:"Short description of donut"},
    {id: "12", category: "special", name: "Chocolate Cake Donut", stock: 20, image:"chocolate-cake.png", price:2.49, desc:"Short description of donut"},
    {id: "13", category: "special", name: "Blueberry Cake Donut", stock: 20, image:"blueberry-cake.png", price:2.49, desc:"Short description of donut"},
    {id: "14", category: "filled", name: "Double Dark Chocolate Donut", stock: 20, image:"double-dark-chocolate.png", price:2.49, desc:"Short description of donut"},
    {id: "15", category: "filled", name: "Chocolate Filled Donut", stock: 20, image:"chocolate-filled.png", price:1.99, desc:"Short description of donut"},
    {id: "16", category: "filled", name: "Chocolate Filled Iced Donut", stock: 20, image:"chocolate-filled-iced.png", price:2.49, desc:"Short description of donut"},
    {id: "17", category: "filled", name: "Chocolate Iced Raspberry Filled Donut", stock: 20, image:"chocolate-iced-raspberry-filled.png", price:2.49, desc:"Short description of donut"},
    {id: "18", category: "filled", name: "Cinnamon Apple Filled Donut", stock: 20, image:"cinnamon-apple-filled.png", price:2.49, desc:"Short description of donut"},
    {id: "19", category: "filled", name: "Cream Filled Donut", stock: 20, image:"cream-filled.png", price:1.99, desc:"Short description of donut"},
    {id: "20", category: "filled", name: "Lemon Filled Donut", stock: 20, image:"lemon-filled.png", price:2.49, desc:"Short description of donut"},
    {id: "21", category: "filled", name: "Raspberry Filled Donut", stock: 20, image:"raspberry-filled.png", price:2.99, desc:"Short description of donut"},
    {id: "22", category: "special", name: "Reese's Donut", stock: 20, image:"reeses.png", price:2.99, desc:"Short description of donut"},
    {id: "23", category: "special", name: "Cookies n' Cream Donut", stock: 20, image:"cookies-n-cream.png", price:2.99, desc:"Short description of donut"},
    {id: "24", category: "filled", name: "Dulce de Leche Donut", stock: 20, image:"dulce-de-leche.png", price:2.49, desc:"Short description of donut"},
    {id: "25", category: "special", name: "Cinnamon Bun Donut", stock: 20, image:"cinnamon-bun.png", price:2.99, desc:"Short description of donut"},
    {id: "26", category: "special", name: "Pumpkin Spice Donut", stock: 20, image:"pumpkin-spice.png", price:2.49, desc:"Short description of donut"}
];

export const Products = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(products)
    }, 2000)
});
