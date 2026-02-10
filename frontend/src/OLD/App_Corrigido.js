
// Importações necessárias
import React, { useState } from "react";
import { Line, Pie, Radar, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale, BarElement } from "chart.js";

// Registro dos componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  BarElement
);

const App = () => {
  const [resultado, setResultado] = useState(null);

  // Simulação de um resultado para exibir os gráficos
  const resultadoExemplo = {
    sintese: { D: 10, I: -5, S: 8, C: -3 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResultado(resultadoExemplo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Teste DISC</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Enviar Respostas</button>
      </form>

      {resultado && (
        <div>
          <h2>Gráfico Síntese</h2>
          <div style={{ width: "50%", margin: "auto" }}>
            <Line
              data={{
                labels: ["D", "I", "S", "C"],
                datasets: [
                  {
                    label: "Síntese",
                    data: [
                      resultado.sintese.D,
                      resultado.sintese.I,
                      resultado.sintese.S,
                      resultado.sintese.C,
                    ],
                    borderColor: "purple",
                    backgroundColor: "purple",
                    borderWidth: 2,
                    pointBackgroundColor: "red",
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    fill: false,
                    tension: 0.4,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: true },
                  tooltip: { enabled: true },
                },
                scales: {
                  y: { beginAtZero: true },
                },
              }}
            />
          </div>

          <h2>Gráfico Pizza</h2>
          <div style={{ width: "50%", margin: "auto" }}>
            <Pie
              data={{
                labels: ["D", "I", "S", "C"],
                datasets: [
                  {
                    data: [
                      Math.abs(resultado.sintese.D),
                      Math.abs(resultado.sintese.I),
                      Math.abs(resultado.sintese.S),
                      Math.abs(resultado.sintese.C),
                    ],
                    backgroundColor: ["red", "blue", "green", "yellow"],
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: true },
                  tooltip: { enabled: true },
                },
              }}
            />
          </div>

          <h2>Gráfico Radar</h2>
          <div style={{ width: "50%", margin: "auto" }}>
            <Radar
              data={{
                labels: ["D", "I", "S", "C"],
                datasets: [
                  {
                    label: "Síntese",
                    data: [
                      resultado.sintese.D,
                      resultado.sintese.I,
                      resultado.sintese.S,
                      resultado.sintese.C,
                    ],
                    borderColor: "orange",
                    backgroundColor: "rgba(255, 165, 0, 0.2)",
                    borderWidth: 2,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: true },
                  tooltip: { enabled: true },
                },
              }}
            />
          </div>

          <h2>Gráfico de Barras Horizontais</h2>
          <div style={{ width: "50%", margin: "auto" }}>
            <Bar
              data={{
                labels: ["D", "I", "S", "C"],
                datasets: [
                  {
                    label: "Síntese",
                    data: [
                      resultado.sintese.D,
                      resultado.sintese.I,
                      resultado.sintese.S,
                      resultado.sintese.C,
                    ],
                    backgroundColor: ["red", "blue", "green", "yellow"],
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                responsive: true,
                indexAxis: "y",
                plugins: {
                  legend: { display: true },
                  tooltip: { enabled: true },
                },
                scales: {
                  x: { beginAtZero: true },
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
