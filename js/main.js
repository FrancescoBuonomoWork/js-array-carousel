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

    const imageDOMelement = `
    <img src="${currentImg}">`
    console.log(imageDOMelement);
    imgContainerDOMElement.innerHTML += imageDOMelement;
}
// const imgTagDOMElement = document.createElement("img");
// console.log(imgTagDOMElement);



