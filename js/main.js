console.log("funziona");
// recupero img-container dal DOM 
const imgContainerDOMElement = document.getElementsByClassName("img-container");
console.log(imgContainerDOMElement);
const arrayImmagini = [
    "./img/01.webp", // 0
    "./img/02.webp", // 1
    "./img/03.webp", // 2
    "./img/04.webp", // 3
    "./img/05.webp", // 4
]; // arrayImmagini.length - 1
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
frecciaGiuDOMElement.addEventListener("click", function () {
    console.log("click bot")


    // prendere la slide attiva 
    console.log(currentSlide);
    console.log(currentIndex, imgItemDOMElements.length)
    // if (currentIndex >= imgItemDOMElements.length) {
    //     // currentIndex = 0;
    //     currentSlide = currentIndex[0];
    //     console.log(currentSlide);


    // }
    // togliere la classe active alla slide active
    currentSlide.classList.remove("active");

    // Se sono all'indice dell'ultimo elemento, riparto da 0
    // Altrimenti lo incremento di 1
    if (currentIndex === (imgItemDOMElements.length - 1)) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }

    // Applico la classe active al prossimo elemento
    currentSlide = imgItemDOMElements[currentIndex];
    currentSlide.classList.add("active");
    console.log(currentSlide);


    // prendere la slide successva
    //  currentIndex = currentIndex + 1; 
    // togliere aggigungere alla successiva la classe active

    // incrementare il valore di currentIndex

})
frecciaSuDOMElement.addEventListener("click", function () {
    console.log("click top")
    currentSlide.classList.remove("active");
    
    if (currentIndex === 0) {
        currentIndex = imgItemDOMElements.length - 1;
    } else {
    currentIndex -= 1;    
    }


    
    currentSlide = imgItemDOMElements[currentIndex];
    currentSlide.classList.add("active");
    console.log(currentSlide);
})

// const imgTagDOMElement = document.createElement("img");
// console.log(imgTagDOMElement);



