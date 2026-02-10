import React, { useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartDataLabels
);

const FormularioDISC = () => {
  const [respostas, setRespostas] = useState({});
  const [resultado, setResultado] = useState(null);
  const [analise, setAnalise] = useState("");
  const [erro, setErro] = useState("");

  // Lista de perguntas organizadas em quadros
  const quadros = [
    [
      { id: 1, texto: "Complacente, Agradável.", categoria: "S" },
      { id: 2, texto: "Acredita nos outros.", categoria: "I" },
      { id: 3, texto: "Aventureiro, arrisca fácil.", categoria: "D" },
      { id: 4, texto: "Tolerante, respeitoso.", categoria: "C" },
    ],
    [
      { id: 5, texto: "Resultados é o que mais importa.", categoria: "D" },
      { id: 6, texto: "Precisão é o que mais importa.", categoria: "C" },
      { id: 7, texto: "Divertir-se em tudo o que faz, aproveitar.", categoria: "I" },
      { id: 8, texto: "Fazer juntos é o melhor.", categoria: "S" },
    ],
    [
      { id: 9, texto: "Educação e cultura", categoria: "C" },
      { id: 10, texto: "Recompensa e realização", categoria: "D" },
      { id: 11, texto: "Segurança e Cautela", categoria: "S" },
      { id: 12, texto: "Festas, sociabilizar e galera", categoria: "I" },
    ],
    [
      { id: 13, texto: "Manso, Reservado", categoria: "C" },
      { id: 14, texto: "Visionário, otimista", categoria: "D" },
      { id: 15, texto: "Centro das atenções, Sociável", categoria: "I" },
      { id: 16, texto: "Pacificador, busca trazer paz e harmonia", categoria: "S" },
    ],
    [
      { id: 17, texto: "Tem bom controle de gastos", categoria: "C" },
      { id: 18, texto: "Compra logo, por impulso", categoria: "D" },
      { id: 19, texto: "Espera pra comprar depois, sem pressão!", categoria: "S" },
      { id: 20, texto: "Gasto naquilo que eu quero", categoria: "I" },
    ],
    [
      { id: 21, texto: "Direto, Toma a frente", categoria: "D" },
      { id: 22, texto: "Extrovertido, entusiasmado", categoria: "I" },
      { id: 23, texto: "Consistente, Previsível", categoria: "S" },
      { id: 24, texto: "Cuidadoso, Cauteloso", categoria: "C" },
    ],
    [
      { id: 25, texto: "Encoraja outros", categoria: "I" },
      { id: 26, texto: "Luta pela perfeição", categoria: "C" },
      { id: 27, texto: "Faz parte do time", categoria: "S" },
      { id: 28, texto: "Quer estabelecer alvos", categoria: "D" },
    ],
    [
      { id: 29, texto: "Amigo, Boa companhia.", categoria: "S" },
      { id: 30, texto: "Não gosta de rotina, Único!", categoria: "I" },
      { id: 31, texto: "Gosta de mudar as coisas", categoria: "D" },
      { id: 32, texto: "Gosta das coisas exatas.", categoria: "C" },
    ],
    [
      { id: 33, texto: "Não se entrega fácil.", categoria: "D" },
      { id: 34, texto: "Segue o líder, submisso", categoria: "S" },
      { id: 35, texto: "Empolgado, anima os outros", categoria: "I" },
      { id: 36, texto: "Quer as coisas bem arrumadas.", categoria: "C" },
    ],
    [
      { id: 37, texto: "Se frustra  facilmente", categoria: "C" },
      { id: 38, texto: "Guarda os sentimentos ", categoria: "S" },
      { id: 39, texto: "Conta bem o seu lado da história", categoria: "I" },
      { id: 40, texto: "Se opõe se não concordar", categoria: "D" },
    ],
    [
      { id: 41, texto: "Não gosta de confrontos.", categoria: "S" },
      { id: 42, texto: "Muito detalhista ", categoria: "C" },
      { id: 43, texto: "Sempre muda no ultimo minuto", categoria: "I" },
      { id: 44, texto: "Exigente, Abrupto.", categoria: "D" },
    ],
    [
      { id: 45, texto: "Eu os lidero.", categoria: "D" },
      { id: 46, texto: "Dou continuidade", categoria: "S" },
      { id: 47, texto: "Vou convencê-los", categoria: "I" },
      { id: 48, texto: "Vou atrás dos fatos.", categoria: "C" },
    ],
  ];


  const handleChange = (quadroIndex, opcaoId, tipo) => {
    setRespostas((prev) => ({
      ...prev,
      [`${quadroIndex}-${tipo}`]: opcaoId,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro("");

    const todasPreenchidas = quadros.every((_, index) =>
      respostas.hasOwnProperty(`${index}-mais`) &&
      respostas.hasOwnProperty(`${index}-menos`)
    );

    if (!todasPreenchidas) {
      setErro("Favor preencher todos os campos.");
      return;
    }

    const contagemMais = { D: 0, I: 0, S: 0, C: 0 };
    const contagemMenos = { D: 0, I: 0, S: 0, C: 0 };

    Object.entries(respostas).forEach(([chave, opcaoId]) => {
      const [quadroIndex, tipo] = chave.split("-");
      const quadro = quadros[quadroIndex];
      const opcao = quadro.find((item) => item.id === Number(opcaoId));

      if (opcao) {
        if (tipo === "mais") contagemMais[opcao.categoria] += 1;
        if (tipo === "menos") contagemMenos[opcao.categoria] += 1;
      }
    });

    const sintese = {
      D: contagemMais.D - contagemMenos.D,
      I: contagemMais.I - contagemMenos.I,
      S: contagemMais.S - contagemMenos.S,
      C: contagemMais.C - contagemMenos.C,
    };

    setResultado({ contagemMais, contagemMenos, sintese });

    let analiseTexto = "";
    if (sintese.D > 0) analiseTexto += sintese.D >= 14 ? "Alto D, " : "D, ";
    if (sintese.I > -1) analiseTexto += sintese.I >= 7 ? "Alto I, " : "I, ";
    if (sintese.S > -1) analiseTexto += sintese.S >= 10 ? "Alto S, " : "S, ";
    if (sintese.C > -3) analiseTexto += sintese.C >= 5 ? "Alto C " : "C ";

    // Removendo a última vírgula, se houver
    analiseTexto = analiseTexto.replace(/, $/, "");
    setAnalise(`Análise prévia DISC: ${analiseTexto.trim()}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Teste DISC</h1>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      <form onSubmit={handleSubmit}>
        {quadros.map((quadro, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h3>Quadro {index + 1}</h3>
            <table border="1" cellPadding="10" style={{ 
                margin: "auto", 
                width: "70%", 
                borderCollapse: "collapse",
                tableLayout: "fixed"
            }}>
              <thead>
                <tr>
                  <th style={{ width: "60%" }}>Opção</th>
                  <th style={{ width: "20%" }}>Mais se parece comigo</th>
                  <th style={{ width: "20%" }}>Menos se parece comigo</th>
                </tr>
              </thead>
              <tbody>
                {quadro.map((pergunta) => (
                  <tr key={pergunta.id}>
                    <td>{pergunta.texto}</td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        name={`mais-${index}`}
                        value={pergunta.id}
                        onChange={() => handleChange(index, pergunta.id, "mais")}
                      />
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <input
                        type="radio"
                        name={`menos-${index}`}
                        value={pergunta.id}
                        onChange={() => handleChange(index, pergunta.id, "menos")}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <br />
        <button type="submit">Enviar resposta</button>
      </form>

      {resultado && (
        <>
          <h2>{analise}</h2>
          <h2>Resultados em Tabela</h2>
          <table
            border="1"
            cellPadding="10"
            style={{
              margin: "auto",
              width: "40%",
              borderCollapse: "collapse",
              textAlign: "center",
            }}
          >
            <thead>
              <tr>
                <th></th>
                <th>D</th>
                <th>I</th>
                <th>S</th>
                <th>C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>O que mais parece</td>
                <td>{resultado.contagemMais.D}</td>
                <td>{resultado.contagemMais.I}</td>
                <td>{resultado.contagemMais.S}</td>
                <td>{resultado.contagemMais.C}</td>
              </tr>
              <tr>
                <td>O que menos parece</td>
                <td>{resultado.contagemMenos.D}</td>
                <td>{resultado.contagemMenos.I}</td>
                <td>{resultado.contagemMenos.S}</td>
                <td>{resultado.contagemMenos.C}</td>
              </tr>
              <tr>
                <td>Síntese</td>
                <td>{resultado.sintese.D}</td>
                <td>{resultado.sintese.I}</td>
                <td>{resultado.sintese.S}</td>
                <td>{resultado.sintese.C}</td>
              </tr>
            </tbody>
          </table>

<h2>Gráfico Síntese</h2>
<div style={{ width: "50%", margin: "auto" }}>
  <Line 
    data={{
      labels: ["D", "I", "S", "C"],
      datasets: [{
        label: "Síntese",
        data: [resultado.sintese.D, resultado.sintese.I, resultado.sintese.S, resultado.sintese.C],
        borderColor: "purple",
        backgroundColor: "purple",
        borderWidth: 2,
        pointBackgroundColor: "red",
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: false,
        tension: 0.4,
      }]
    }}
    options={{
      responsive: true,
      plugins: {
        legend: { display: true },
        tooltip: { enabled: true },
        datalabels: {
          display: true,
          color: "black",
          font: {
            weight: "bold",
            size: 14
          },
          anchor: "end",
          align: "top",
          formatter: (value) => value // Exibe o valor acima do ponto
        }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }}
  />
</div>

          <h2>Gráfico Pizza</h2>
          <div style={{ width: "40%", margin: "auto" }}>
            <Pie data={{
                labels: ["D", "I", "S", "C"],
                datasets: [{
                  data: [resultado.sintese.D, resultado.sintese.I, resultado.sintese.S, resultado.sintese.C],
                  backgroundColor: ["red", "blue", "green", "yellow"],
                }]
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FormularioDISC;
