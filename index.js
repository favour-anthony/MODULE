let data = [
    {
    name:"milk",
    price:20,
    quantity:4,
   },
   {
    name:"milo",
    price:25,
    quantity:2,
   },
   {
    name:"ovaltine",
    price:15,
    quantity:7
   }
   
]

let cart = [
    {
        name:"peak milk",
        price:200,
        quantity:3
    },
    {
        name:"sachet tomatoes",
        price:400,
        quantity:3
    },
    {
        name:"diapers",
        price:1000,
        quantity:5
    }
];

console.log(cart)
function addtocart(productName){
    let exist = cart.find(m => m.name === productName)
    if(exist){
        exist.quantity +=quantity; 
    }
    else{
        cart.push(productName)
        console.log('new product added to cart')
        return;
    }    
}
addtocart({name:'soap',price:500,quantity:10})
console.log(cart)

function removefromcart(productName){
    let product = cart.findIndex(i=> i.name === productName);
    if (product >= 0) {
        cart.splice(product, 1)
        console.log(`Removed an item from the cart.`)
        return;
    }
}
removefromcart('sachet tomatoes')
console.log(cart)

function calculateTotal(){ 
   return cart.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
}
calculateTotal();

function listcart(){
    if (cart.length > 0) {
        console.log("Items in cart:");
        cart.forEach(product => {
            console.log(`= "${product.name}" at #${product.price} x ${product.quantity}`);
        });
    } else {
        console.log("Your cart is empty.");
    }
}
listcart()
console.log(`the total cost of each product in cart : ${calculateTotal(cart)}`)


module.exports = {data, cart}
