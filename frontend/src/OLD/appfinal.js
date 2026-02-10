import React, { useState } from "react";
import { Line, Pie, Radar, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  ArcElement
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
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
        { id: 40, texto: "Se opõe, se não concordar", categoria: "D" },
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
        [
        { id: 49, texto: "Falador, Vigoroso", categoria: "I" },
        { id: 50, texto: "Determinado, rápido", categoria: "D" },
        { id: 51, texto: "Tenta manter o equilíbrio", categoria: "S" },
        { id: 52, texto: "Tenta seguir as regras", categoria: "C" },
        ],
        [
        { id: 53, texto: "Quer progredir", categoria: "D" },
        { id: 54, texto: "Satisfeito com as coisas", categoria: "S" },
        { id: 55, texto: "Mostra sentimentos abertamente", categoria: "I" },
        { id: 56, texto: "Modesto, humilde.", categoria: "C" },
        ],
        [
        { id: 57, texto: "Primeiro pensa nos outros", categoria: "S" },
        { id: 58, texto: "Competitivo, gosta de mudanças", categoria: "D" },
        { id: 59, texto: "Positivo, Otimista", categoria: "I" },
        { id: 60, texto: "Pensador lógico, Sistemático.", categoria: "C" },
        ],
        [
        { id: 61, texto: "Controla seu tempo com eficiência", categoria: "C" },
        { id: 62, texto: "Sempre está correndo, se sente pressionado", categoria: "D" },
        { id: 63, texto: "Eventos sociais são importantes", categoria: "I" },
        { id: 64, texto: "Gosta de acabar o que começou", categoria: "S" },
        ],
        [
        { id: 65, texto: "Reservado, cabeça fria", categoria: "C" },
        { id: 66, texto: "Alegre, Despreocupado", categoria: "I" },
        { id: 67, texto: "Gentil, Bondoso", categoria: "S" },
        { id: 68, texto: "Corajoso, Ousado.", categoria: "D" },
        ],
        [
        { id: 69, texto: "Agrada aos outros, sempre concorda com tudo", categoria: "S" },
        { id: 70, texto: "Animado, sempre ri alto", categoria: "I" },
        { id: 71, texto: "Corajoso, Destemido", categoria: "D" },
        { id: 72, texto: "Quieto, Reservado", categoria: "C" },
        ],
        [
        { id: 73, texto: "Resiste às mudanças bruscas", categoria: "S" },
        { id: 74, texto: "Tende a prometer demais", categoria: "I" },
        { id: 75, texto: "Se contrai quando sob pressão", categoria: "C" },
        { id: 76, texto: "Não tem medo de uma boa briga", categoria: "D" },
        ],
        [
        { id: 77, texto: "Gosta de bons momentos com amigos", categoria: "S" },
        { id: 78, texto: "Planeja o futuro, Bem preparado", categoria: "C" },
        { id: 79, texto: "Migra para novas aventuras", categoria: "I" },
        { id: 80, texto: "Espera recompensa pelos alvos atingidos.", categoria: "D" },
        ],
        [
        { id: 81, texto: "Quer mais autoridade", categoria: "D" },
        { id: 82, texto: "Quer mais oportunidade", categoria: "I" },
        { id: 83, texto: "Prefere evitar conflitos", categoria: "S" },
        { id: 84, texto: "Quer direção clara", categoria: "C" },
        ],
        [
        { id: 85, texto: "Encoraja os outros", categoria: "I" },
        { id: 86, texto: "Bom ouvinte", categoria: "S" },
        { id: 87, texto: "Analisa bem", categoria: "C" },
        { id: 88, texto: "Delega bem", categoria: "D" },
        ],
        [
        { id: 89, texto: "Regras existem para serem desafiadas", categoria: "D" },
        { id: 90, texto: "Regras fazem justiça", categoria: "C" },
        { id: 91, texto: "Regras produzem tédio", categoria: "I" },
        { id: 92, texto: "Regras trazem segurança", categoria: "S" },
        ],
        [
        { id: 93, texto: "Confiável, Seguro", categoria: "S" },
        { id: 94, texto: "Criativo, único", categoria: "I" },
        { id: 95, texto: "Sempre busca resultados", categoria: "D" },
        { id: 96, texto: "Preciso, Perfeccionista", categoria: "C" },
        ],
  ];

//Nova versão handleChange, para verificar se o usuário preencheu a mesma opção para menos e mais nos quadros
const handleChange = (quadroIndex, opcaoId, tipo) => {
  setRespostas((prev) => {
      const respostaMais = prev[`${quadroIndex}-mais`];
      const respostaMenos = prev[`${quadroIndex}-menos`];

      // Verifica se a mesma opção foi escolhida para "mais" e "menos"
      if (tipo === "mais" && respostaMenos === opcaoId) {
          setErro("Não é permitido selecionar a mesma opção como 'Mais' e 'Menos' no mesmo quadro.");
          return prev; // Retorna o estado anterior sem atualizar
      }
      if (tipo === "menos" && respostaMais === opcaoId) {
          setErro("Não é permitido selecionar a mesma opção como 'Mais' e 'Menos' no mesmo quadro.");
          return prev;
      }

      // Atualiza o estado e limpa a mensagem de erro
      setErro("");
      return {
          ...prev,
          [`${quadroIndex}-${tipo}`]: opcaoId,
      };
  });
};

{
  const handleChange = (quadroIndex, opcaoId, tipo) => 
    {
    setRespostas((prev) => 
      {
        const respostaMais = prev[`${quadroIndex}-mais`];
        const respostaMenos = prev[`${quadroIndex}-menos`];

        // Impede que o usuário escolha a mesma opção para "mais" e "menos"
        if (tipo === "mais" && respostaMenos === opcaoId) 
          {
            setErro("Não é permitido selecionar a mesma opção como 'Mais' e 'Menos' no mesmo quadro.");
            return prev;
          }
        if (tipo === "menos" && respostaMais === opcaoId) 
          {
            setErro("Não é permitido selecionar a mesma opção como 'Mais' e 'Menos' no mesmo quadro.");
            return prev;
          }

        // Atualiza o estado com a nova resposta e limpa erro
        setErro("");
        return {
            ...prev,
            [`${quadroIndex}-${tipo}`]: opcaoId,
               };
      });
   };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro("");

  
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
    if (sintese.I > 0) analiseTexto += sintese.I >= 7 ? "Alto I, " : "I, ";
    if (sintese.S > -1) analiseTexto += sintese.S >= 10 ? "Alto S, " : "S, ";
    if (sintese.C > -3) analiseTexto += sintese.C >= 5 ? "Alto C " : "C ";
    // Removendo a última vírgula, se houver
    analiseTexto = analiseTexto.replace(/, $/, "");
    setAnalise(`Análise prévia DISC: ${analiseTexto.trim()}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Mapeamento Comportamental DISC - SOTERIA</h1>
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

    {/* Exibir mensagem de erro antes do botão de envio */}
    {erro && <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>{erro}</p>}

    <button type="submit" style={{ display: "block", margin: "20px auto" }}>Enviar Resposta</button>
</form>


      {resultado && (
        <>
        <h2>{analise}</h2>
        <h2>Resultados das suas respostas DISC</h2>
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
                <td>O que mais parece contigo</td>
                <td>{resultado.contagemMais.D}</td>
                <td>{resultado.contagemMais.I}</td>
                <td>{resultado.contagemMais.S}</td>
                <td>{resultado.contagemMais.C}</td>
              </tr>
              <tr>
                <td>O que menos parece contigo</td>
                <td>{resultado.contagemMenos.D}</td>
                <td>{resultado.contagemMenos.I}</td>
                <td>{resultado.contagemMenos.S}</td>
                <td>{resultado.contagemMenos.C}</td>
              </tr>
              <tr>
                <td>Síntese (Resultado)</td>
                <td>{resultado.sintese.D}</td>
                <td>{resultado.sintese.I}</td>
                <td>{resultado.sintese.S}</td>
                <td>{resultado.sintese.C}</td>
              </tr>
            </tbody>
          </table>
        <h2>Gráfico DISC Síntese</h2>
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
          <h2>DISC Radar</h2>
          <div style={{ width: "50%", margin: "auto" }}>
            <Radar
              data={{
                labels: ["D", "I", "S", "C"],
                datasets: [{
                  label: "Síntese",
                  data: [resultado.sintese.D, resultado.sintese.I, resultado.sintese.S, resultado.sintese.C],
                  borderColor: "purple",
                  backgroundColor: "rgba(128, 0, 128, 0.3)",
                  borderWidth: 2,
                  pointBackgroundColor: "red",
                  pointRadius: 5,
                  pointHoverRadius: 8,
                }]
              }}
              //Usar os recursos do gráfico de Síntese no de radar
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

          <h2>Gráfico DISC Barras Horizontais</h2>
          <div style={{ width: "50%", margin: "auto" }}>
            <Bar
              data={{
                labels: ["D", "I", "S", "C"],
                datasets: [{
                  label: "Síntese",
                  data: [resultado.sintese.D, resultado.sintese.I, resultado.sintese.S, resultado.sintese.C],
                  backgroundColor: ["red", "blue", "green", "yellow"],
                }]
              }}
              options={{
                indexAxis: 'y',
                responsive: true,
                plugins: {
                  legend: { display: false },
                  datalabels: {
                    display: true,
                    color: "black",
                    font: { weight: "bold", size: 14 },
                  },
                },
                scales: {
                  x: { beginAtZero: true },
                },
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FormularioDISC;
