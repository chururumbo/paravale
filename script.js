const messages = [
    "Según me acuerdo me dijiste que habías cambiado de lunas, o te estafaron o te haces la chistosa. YO TE VEO SIEMPRE, OJITO",
    "Creo que aún no has comido, y te estás desfogando conmigo. Te la dejaré pasar por esta vez porque te amo, dale al sí, corazón",
    "Creo que estás apretando con el codo, intenta usar los deditos, cariño",
    "La llama que te dí para que te lleves a pariacoto puede ser un cohetón, OJITO",
    "Si, muy graciosa, muchas risas. Me harás poner emo, VOY A PONER KUDAI EN SPOTIFY SI NO LE DAS AL SÍ",
    "Bueno bonita, ya nos reimos mucho, ahora sí, dale al botón DE COLOR VERDE, EL QUE ESTÁ ARRIBA, ESE QUE APENAS SE VE",
    "QUE SE LE CAIGA EL PELO AL QUE LE DE CLICK A ESTE BOTÓN",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    if (messageIndex < messages.length - 1) {
        messageIndex++;
    }
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}