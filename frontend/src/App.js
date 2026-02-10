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
        { id: 7, texto: "Divertir-se em tudo o que faz, aproveitar é o que importa.", categoria: "I" },
        { id: 8, texto: "Fazer juntos é o que mais importa.", categoria: "S" },
        ],
        [
        { id: 9, texto: "Educação e cultura", categoria: "C" },
        { id: 10, texto: "Recompensa e realização", categoria: "D" },
        { id: 11, texto: "Segurança e Cautela", categoria: "S" },
        { id: 12, texto: "Festas, sociabilização e galera", categoria: "I" },
        ],
        [
        { id: 13, texto: "Manso, reservado", categoria: "C" },
        { id: 14, texto: "Visionário, otimista", categoria: "D" },
        { id: 15, texto: "Sociável, centro das atenções", categoria: "I" },
        { id: 16, texto: "Pacificador, busca trazer paz e harmonia", categoria: "S" },
        ],
        [
        { id: 17, texto: "Tem bom controle de gastos", categoria: "C" },
        { id: 18, texto: "Compra logo, por impulso", categoria: "D" },
        { id: 19, texto: "Espera pra comprar depois, sem pressão!", categoria: "S" },
        { id: 20, texto: "Gasto naquilo que eu quero", categoria: "I" },
        ],
        [
        { id: 21, texto: "Direto, toma a frente", categoria: "D" },
        { id: 22, texto: "Extrovertido, entusiasmado", categoria: "I" },
        { id: 23, texto: "Consistente, Previsível", categoria: "S" },
        { id: 24, texto: "Cuidadoso, Cauteloso", categoria: "C" },
        ],
        [
        { id: 25, texto: "Encoraja aos outros, os motiva", categoria: "I" },
        { id: 26, texto: "Luta pela perfeição", categoria: "C" },
        { id: 27, texto: "Gosta é de fazer parte do time", categoria: "S" },
        { id: 28, texto: "Estabelece os alvos", categoria: "D" },
        ],
        [
        { id: 29, texto: "Gosta de ser amigo, boa companhia", categoria: "S" },
        { id: 30, texto: "Não gosta de rotina, gosta de fazer diferente!", categoria: "I" },
        { id: 31, texto: "Gosta de mudar o que julgar necessário", categoria: "D" },
        { id: 32, texto: "Gosta das coisas exatas", categoria: "C" },
        ],
        [
        { id: 33, texto: "Não se entrega fácil", categoria: "D" },
        { id: 34, texto: "Prefere seguir o líder, submisso", categoria: "S" },
        { id: 35, texto: "Empolgado, anima os outros", categoria: "I" },
        { id: 36, texto: "Quer as coisas bem organizadas", categoria: "C" },
        ],
        [
        { id: 37, texto: "Se frustra facilmente", categoria: "C" },
        { id: 38, texto: "Guarda seus sentimentos ", categoria: "S" },
        { id: 39, texto: "Conta bem o seu lado da história", categoria: "I" },
        { id: 40, texto: "Se opõe, se não concordar", categoria: "D" },
        ],
        [
        { id: 41, texto: "Foge de confrontos e brigas", categoria: "S" },
        { id: 42, texto: "Muito detalhista", categoria: "C" },
        { id: 43, texto: "Sempre muda no último minuto", categoria: "I" },
        { id: 44, texto: "Exigente, responde rapidamente e com dureza", categoria: "D" },
        ],
        [
        { id: 45, texto: "Eu os liderarei", categoria: "D" },
        { id: 46, texto: "Sigo em frente, deixo pra lá", categoria: "S" },
        { id: 47, texto: "Vou convencê-los", categoria: "I" },
        { id: 48, texto: "Vou atrás dos fatos.", categoria: "C" },
        ],
        [
        { id: 49, texto: "Falador, Vigoroso", categoria: "I" },
        { id: 50, texto: "Determinado, rápido", categoria: "D" },
        { id: 51, texto: "Equilibrado, sensato", categoria: "S" },
        { id: 52, texto: "Segue as regras, confiável", categoria: "C" },
        ],
        [
        { id: 53, texto: "Progredir é a prioridade", categoria: "D" },
        { id: 54, texto: "Satisfeito com o que vier", categoria: "S" },
        { id: 55, texto: "Demonstra sentimentos abertamente", categoria: "I" },
        { id: 56, texto: "Modesto, humilde.", categoria: "C" },
        ],
        [
        { id: 57, texto: "Primeiro pensa nos outros", categoria: "S" },
        { id: 58, texto: "Competitivo, gosta de mudanças", categoria: "D" },
        { id: 59, texto: "Positivo, otimista", categoria: "I" },
        { id: 60, texto: "Pensador lógico, sistemático", categoria: "C" },
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
        { id: 70, texto: "Animado, do tipo que ri alto", categoria: "I" },
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

//Verificar se o usuário preencheu a mesma opção para menos e mais nos quadros
/* const handleChange = (quadroIndex, opcaoId, tipo) => {
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
}; */

  const handleChange = (quadroIndex, opcaoId, tipo) => 
    {
    setRespostas((prev) => 
      {
        const respostaMais = prev[`${quadroIndex}-mais`];
        const respostaMenos = prev[`${quadroIndex}-menos`];

        // Impede que o usuário escolha a mesma opção para "mais" e "menos"
         if (tipo === "mais" && respostaMenos === opcaoId) 
          {
            setErro("Não é permitido selecionar a mesma opção como 'Mais' e 'Menos' no mesmo quadro.(1)");
            return prev;
          }
        if (tipo === "menos" && respostaMais === opcaoId) 
          {
            setErro("Não é permitido selecionar a mesma opção como 'Mais' e 'Menos' no mesmo quadro.(1)");
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let erroDetectado = false;
    let novaMensagemErro = ""; // Variável para armazenar o erro

    // Verifica cada um dos 24 quadros
    for (let i = 0; i < 24; i++) {
        const respostaMais = respostas[`${i}-mais`];
        const respostaMenos = respostas[`${i}-menos`];

        // Se as opções 'mais' e 'menos' forem a mesma, exibe erro
        if (respostaMais === respostaMenos) {
            novaMensagemErro = `Erro: Você selecionou a mesma opção para 'mais' e 'menos' no quadro ${i + 1}. Corrija antes de enviar.`;
            erroDetectado = true;
            break;
        }
    }

    // Se houver erro, exibe mensagem e impede o envio
    if (erroDetectado) {
        setErro(novaMensagemErro);
        return; // Interrompe a execução do código
    }

    // SE CHEGOU ATÉ AQUI, ESTÁ TUDO CORRETO! LIMPA ERRO E CONTINUA O PROCESSAMENTO
    setErro(""); // Limpa mensagem de erro

     
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

    let categorias = [
      { label: sintese.D >= 14 ? "Alto D" : "D", valor: sintese.D, limite: 0 },
      { label: sintese.I >= 7 ? "Alto I" : "I", valor: sintese.I, limite: 0 },
      { label: sintese.S >= 10 ? "Alto S" : "S", valor: sintese.S, limite: -1 },
      { label: sintese.C >= 5 ? "Alto C" : "C", valor: sintese.C, limite: -3 }
  ];
  
  // Filtra valores válidos e ordena decrescente, prioriza o traço DISC predominante
  let analiseTexto = categorias
      .filter(c => c.valor > c.limite) // Mantém apenas os valores acima do limite definido
      .sort((a, b) => b.valor - a.valor) // Ordena do maior para o menor
      .map(c => c.label) // Extrai os rótulos já ordenados
      .join(", "); // Junta os valores com ", "
  
  // Atualiza o estado com a análise final
  setAnalise(`Análise prévia DISC: ${analiseTexto}`);
  
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
                                    required
                                />
                            </td>
                            <td style={{ textAlign: "center" }}>
                                <input
                                    type="radio"
                                    name={`menos-${index}`}
                                    value={pergunta.id}
                                    onChange={() => handleChange(index, pergunta.id, "menos")}
                                    required
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ))}

    {/* Exibir mensagem de erro antes do botão de envio */}
    {erro && <p style={{ color: "red", fontWeight: "bold", textAlign: "center", marginTop: "20px" }}>{erro}</p>}
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
                    anchor: "end", //Faz com que o valor fique acima do ponto.
                    align: "top", //Garante que o número fique posicionado no topo.
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
                        anchor: "end", //Faz com que o valor fique acima do ponto.
                        align: "top", //Garante que o número fique posicionado no topo.
                        formatter: (value) => value // Exibe o valor acima do ponto
                        }
                    },
                    scales: {
                        y: { beginAtZero: true }
                    }
                    }}
                />
              </div>

{/*          <h2>DISC Radar</h2>
              <div style={{ width: "50%", margin: "auto" }}>
                <Radar
                  data={{
                    labels: ["D", "I", "S", "C"].filter((_, i) => {
                      const valores = [resultado.sintese.D, resultado.sintese.I, resultado.sintese.S, resultado.sintese.C];
                      return (i === 0 && valores[i] > 0) || 
                            (i === 1 && valores[i] > -1) || 
                            (i === 2 && valores[i] > -1) || 
                            (i === 3 && valores[i] > -3);
                    }),
                    datasets: [{
                      label: "Síntese",
                      data: [resultado.sintese.D, resultado.sintese.I, resultado.sintese.S, resultado.sintese.C].filter((valor, i) => {
                        return (i === 0 && valor > 0) || 
                              (i === 1 && valor > -1) || 
                              (i === 2 && valor > -1) || 
                              (i === 3 && valor > -3);
                      }),
                      borderColor: "purple",
                      backgroundColor: "rgba(128, 0, 128, 0.3)",
                      borderWidth: 2,
                      pointBackgroundColor: "red",
                      pointRadius: 5,
                      pointHoverRadius: 8,
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
                          anchor: "end", // Faz com que o valor fique acima do ponto.
                          align: "top", // Garante que o número fique posicionado no topo.
                          formatter: (value) => value // Exibe o valor acima do ponto
                        }
                    },
                    scales: {
                        y: { beginAtZero: true }
                    }
                  }}
                />
              </div> */}


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
                    borderWidth: 2,
                    formatter: (value) => value // Exibe o valor acima do ponto
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
