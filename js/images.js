const imageContainer = document.getElementById("imageContainer");
  const totalImages = 86; // Número total de imágenes
  const imagePaths = Array.from({ length: totalImages }, (_, i) => `./img/${i + 1}.jpg`);

  function getRandomPosition() {
    const x = Math.random() * 80 + 10; // Evitar bordes
    const y = Math.random() * 80 + 10;
    return { x, y };
  }

  function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    const randomImage = imagePaths[randomIndex];
    const imgElement = document.createElement("img");
    imgElement.src = randomImage;

    // Posicionar aleatoriamente
    const { x, y } = getRandomPosition();
    imgElement.style.left = `${x}vw`;
    imgElement.style.top = `${y}vh`;

    // Añadir clase para transición
    imgElement.classList.add("visible");

    // Agregar al contenedor
    imageContainer.appendChild(imgElement);

    // Remover después de 5 segundos
    setTimeout(() => {
      imgElement.classList.remove("visible");
      setTimeout(() => imgElement.remove(), 1500); // Remover después de la transición
    }, 5000);
  }

  // Mostrar imágenes cada cierto tiempo
  setInterval(showRandomImage, 3000); // Cambiar cada 3 segundos