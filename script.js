const messages = [
    "Un error lo comete cualquiera, lee bien cosita hermosa",
    "Bueno, no hay primera sin segunda, intenta otra vez, miamor",
    "Creo que estás apretando con el codo, intenta usar los deditos, cariño",
    "Quizá no estás con tus lentes, corazón, el botón verde es el de Sí",
    "Osea estás chistosa",
    "Desde que entraste a esta página descargaste un virus, si no le das al Si, tu laptop explota",
    "El capibara que te dí también tiene un cohetón, OJITO",
    "Yo sé que ahora si le darás al Sí, porque si no confías",
    "NO HAY CONFIANZA",
    "YO SÉ DONDE VIVES",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}