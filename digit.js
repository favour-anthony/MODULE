let {data,cart} = require( "./index");
console.log(data)
 
function displayAProduct(name){
    let exist = data.find(m=>m.name === name)
    if(exist){
       console.log(`product: ${exist.name} was found`)
    }
    return exist;
}
let a = displayAProduct("milk")
console.log(a)

function calculateTotal(){
    return data.reduce((total,products) => total +(products.price * products.quantity),0).toFixed(2)
}
console.log()

function displayAllProducts(){
    
    data.forEach(products =>{
        console.log(`product: ${products.name} \nprice - $${products.price} \nQty - ${products.quantity} `)
        console.log('----------------')
    })
    console.log(`total worth of all products is $${calculateTotal()}`)
    return;
}
displayAllProducts()




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


