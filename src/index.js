//globals
const URL = "http://localhost:3000/ramens";

//DOM selectors

const ramenMenu = document.getElementById("ramen-menu")
const ramenDetails = document.querySelector("#ramen-details")
const ramenDetailImage = document.querySelector("#detail-image")
const comment = document.querySelector("#comment-display")
const ratingDisplay = document.querySelector("#rating-display")
const newRamenForm = document.getElementById("new-ramen")
const RestaurantName = document.querySelector("#restaurant")


//Event Listeners?




fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(data => renderRamenIMG(data));
renderRamenIMG();

//Event Handlers


//Render ramen img function
function renderRamenIMG(ramenObject) {
remenObject = data.ramenDetailImage

console.log(renderRamenIMG)


}









