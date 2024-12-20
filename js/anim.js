// Sincronizar el poema con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Dicen que la vida está hecha de momentos,", time: 5 },
  { text: "pequeños instantes que nos marcan para siempre,", time: 10 },
  { text: "y aquel día, cuando el ritmo nos unió en un baile,", time: 15 },
  { text: "supe que el destino tenía planes perfectos.", time: 20 },
  
  { text: "Llegaste como un suspiro,", time: 26 },
  { text: "como la brisa que refresca el verano,", time: 31 },
  { text: "y desde entonces, mi mundo cambió,", time: 36 },
  { text: "pues encontré en ti lo que no sabía que buscaba.", time: 42 },
  
  { text: "Eres hermosa, no solo por lo que ven mis ojos,", time: 48 },
  { text: "sino por lo que irradias desde el alma.", time: 54 },
  { text: "Tu sonrisa es un refugio,", time: 59 },
  { text: "tu mirada cálida, un abrazo que no necesita palabras.", time: 64 },
  
  { text: "Cada día a tu lado es un regalo,", time: 71 },
  { text: "un capítulo de nuestra historia por escribir.", time: 76 },
  { text: "Eres el motor que impulsa mis pasos,", time: 81 },
  { text: "la inspiración que me levanta en los días difíciles,", time: 86 },
  
  { text: "la fuerza que me recuerda por qué vale la pena soñar.", time: 92 },
  { text: "Hoy entiendo que no fue casualidad,", time: 98 },
  { text: "fue Dios, con su infinita sabiduría,", time: 104 },
  { text: "quien cruzó nuestros caminos en aquel momento preciso,", time: 110 },
  
  { text: "bendita coincidencia que me regaló a ti.", time: 117 },
  { text: "Contigo, la vida es mejor,", time: 122 },
  { text: "más brillante, más plena, más mía.", time: 127 },
  { text: "Y aunque las palabras puedan quedarse cortas,", time: 133 },
  
  { text: "que siempre quede claro:", time: 138 },
  { text: "te amo más de lo que puedo expresar,", time: 143 },
  { text: "y contigo quiero construir nuestro futuro,", time: 148 },
  { text: "paso a paso, corazón a corazón.", time: 153 },
];

// Animar el poema
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 3 minutos 45 segundos (225,000 ms)
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Desaparición con animación */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 225 segundos
setTimeout(ocultarTitulo, 225000);
