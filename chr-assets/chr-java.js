<!-- her begynder jeg at tage fat i nogle id'er jeg har lavet, for at kunne anvende dem og give dem kommandoer.-->
    const modal = document.getElementById("myModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");

<!-- Her opretter jeg en funktion, der venter på et klik for enten at åbne eller lukke modal'en.
Man kan lukke modal'en ved at klikke på ikonet, men for en ekstra sikkerhed har jeg også gjort det muligt
at lukke modal'en ved at klikke uden for modalens indhold. -->
    openModalBtn.onclick = function() {
    modal.style.display = "block";
}

    closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
}
}
