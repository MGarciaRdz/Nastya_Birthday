// Referencias a los elementos del DOM
const prevBtn = document.querySelector("#Retroceder");
const nextBtn = document.querySelector("#Adelantar");
const book = document.querySelector("#Libro");

const paper1 = document.querySelector("#P1");
const paper2 = document.querySelector("#P2");
const paper3 = document.querySelector("#P3");
const paper4 = document.querySelector("#P4");
const paper5 = document.querySelector("#P5");

// Oyente de eventos
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Añadir eventos de toque para dispositivos móviles
prevBtn.addEventListener("touchstart", goPrevPage);
nextBtn.addEventListener("touchstart", goNextPage);

// Lógica principal
let currentLocation = 1;
let numberOfPapers = 5;
let maxLocation = numberOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}
function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                closeBook(false);
                break;
            default:
                throw new Error("Estado Desconocido");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                break;
            case 6:
                openBook();
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                break;
            default:
                throw new Error("Estado desconocido");
        }
        currentLocation--;
    }
}



