/*
***********Here multiple api are ********************


dummy json:=  `https://dummyjson.com/products`
dummy json cart=`https://dummyjson.com/carts`

fakestore =`https://fakestoreapi.in/api/products`

platzi =`https://api.escuelajs.co/api/v1/products`

*/
let view=document.querySelector(".response-view")
let img=document.querySelector("#ii")
data()
async function data(){
let data=await fetch(`https://dummyjson.com/products/search?q=`)
let response=await data.json()
console.log(response    );

let clutter="";
(response.products).forEach(element => {

     clutter+=`<img  src="${element.images[0]}">` 

});
view.innerHTML=clutter

} 
