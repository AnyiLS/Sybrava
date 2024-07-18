// Cargar las respuestas desde localStorage
const results = JSON.parse(localStorage.getItem("quizResults")) || [];
console.log(results);

// Definir qué preguntas revisar y los SVGs correspondientes
const svgMap = {
  1: "./imagenes/parte1.svg",
  2: "./imagenes/parte2.svg",
  3: "./imagenes/parte3.svg",
  4: "./imagenes/parte4.svg",
  5: "./imagenes/parte5.svg",
  6: "./imagenes/parte6.svg",
  7: "./imagenes/parte7.svg",
  8: "./imagenes/parte8.svg",
  9: "./imagenes/parte9.svg",
};

// Obtener el contenedor de resultados
const resultsContainer = document.getElementById("results-container");

// Iterar sobre el mapa de SVGs y mover los SVGs correspondientes
Object.keys(svgMap).forEach((questionNumber) => {
  const svgId = svgMap[questionNumber];
  const svgElement = document.getElementById(svgId);
  if (results.includes(questionNumber)) {
    if (svgElement) {
      resultsContainer.appendChild(svgElement);
    }
  }
});
