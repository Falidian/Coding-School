let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
//To establish the timing, the function setTimeout() is excellent as it is also uses a callback by taking a function as an argument.
//setTimeout() Syntax = setTimeout(()=>{}, 1000) - time is in milliseconds 1000 milliseconds = 1 second.
// let order = (fruit_name, call_production) => {
//     setTimeout(function() {
//         console.log(`${stocks.Fruits[fruit_name]} was selected`)
//     call_production();
//     },2000)
// };
// let production = () => {
//     setTimeout(()=>{
//         console.log("production has started")
//         setTimeout(()=>{
//             console.log("The fruit has been chopped")
//         }, 2000)
//     }, 0000)
// }; order(3, production);

let isShopOpen = false;
let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(isShopOpen) {
            setTimeout(() => {
                resolve(work())
            }, time)
        }
        else {
            reject(console.log("Our shop is closed"))
        }
    })
}
order(2000, () => console.log(`${stocks.Fruits[2]} was selected`))
.then(() => {
    return order(0000, () => console.log("Production has started"))
})
.then(() => {
    return order(2000, () => console.log("Fruit has been chopped"))
})
.then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})
.then(() => {
    return order(1000, () => console.log("Start the machine"))
})
.then(() => {
    return order(2000, ()=> console.log(`Ice cream placed on ${stocks.holder[1]}`))
})
.then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
})
.then (() => {
    return order(2000, () => console.log("Serve Ice Cream"))
})
.catch (() => {
    console.log("Customer left")
})
.finally(() => {
    console.log("end of day")
})