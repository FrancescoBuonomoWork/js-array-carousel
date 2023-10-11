console.log("funziona");
// recupero img-container dal DOM 
const imgContainerDOMElement = document.getElementsByClassName("img-container");
console.log(imgContainerDOMElement);
const arrayImmagini = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp",

]
console.log(arrayImmagini);

for (i = 0; i < arrayImmagini.length; i++) {
    const currentImg = arrayImmagini[i];
    console.log(currentImg);

    const stringaSRC = `
    <img src="${currentImg}" class="img-item" alt=""">`
    console.log(stringaSRC);
    // tentativo di recuperare il primo elemento 
    // console.log(stringaSRC[0]);
    
    imgContainerDOMElement[0].innerHTML += stringaSRC;
    
}
// recupero le img da DOM 
const imgItemDOMElements = document.getElementsByClassName("img-item");
console.log(imgItemDOMElements);

let currentIndex = 0;

let currentSlide = imgItemDOMElements[currentIndex];
currentSlide.classList.add("active");






// recuperiamo le frecce dal DOM 
const frecciaSuDOMElement = document.querySelector(".top-ar");
console.log(frecciaSuDOMElement);
const frecciaGiuDOMElement = document.querySelector(".bot-ar");
console.log(frecciaGiuDOMElement);


// evento freccia in giu 
frecciaGiuDOMElement.addEventListener("click", function (){
    
})


// const imgTagDOMElement = document.createElement("img");
// console.log(imgTagDOMElement);



