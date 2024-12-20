document.getElementById('checkDateButton').addEventListener('click', function (event) {
    event.preventDefault(); // Evitar que el enlace se siga

    const correctDate = '2024-11-27'; // Fecha correcta en formato YYYY-MM-DD
    const enteredDate = document.getElementById('importantDate').value;
    const modal = document.getElementById('myModal');
    const modalHeader = document.getElementById('modalHeader');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.getElementById('closeBtn');

    // Mostrar el modal si la fecha es correcta o incorrecta
    if (enteredDate === correctDate) {
        modalHeader.innerHTML = "¡Fecha Correcta!";
        modalBody.innerHTML = "Antes que nada dejame decirte que eres lo más hermoso que me esta pasando en la vida. &#x1F970;\nTe amo mucho muchote bonita. &#x1F618;&#x1FAF6;";
        modalBody.classList.add("correct");
        modalBody.classList.remove("incorrect");
        modal.style.display = "block"; // Mostrar el modal

        // Cerrar el modal y redirigir a flowers.html al hacer clic en el botón de cerrar
        closeBtn.onclick = function () {
            modal.style.display = "none";
            window.location.href = "flower.html"; // Redirigir a flowers.html
        };
    } else {
        modalHeader.innerHTML = "Fecha Incorrecta";
        modalBody.innerHTML = "Como asi? &#x1F494;, intentalo de nuevo, seguro hay una fecha más importante. &#x1F979;";
        modalBody.classList.add("incorrect");
        modalBody.classList.remove("correct");
        modal.style.display = "block"; // Mostrar el modal

        // Cerrar el modal al hacer clic en el botón de cerrar
        closeBtn.onclick = function () {
            modal.style.display = "none";
        };
    }
});