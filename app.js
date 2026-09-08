const tarifa = 0.95; // R$ por kWh

let consumoTempoReal = [];
let labelsTempoReal = [];
let pico = 0;
let energiaDia = 0;

// Atualização simulada a cada 2 segundos
setInterval(() => {
  const potencia = Math.floor(Math.random() * 2000) + 200;
  const agora = new Date().toLocaleTimeString();

  if (consumoTempoReal.length > 20) {
    consumoTempoReal.shift();
    labelsTempoReal.shift();
  }

  consumoTempoReal.push(potencia);
  labelsTempoReal.push(agora);

  pico = Math.max(pico, potencia);
energiaDia += potencia;
}, 2000);

function calcularCusto() {
  const energiaConsumida = energiaDia / 1000; // Convertendo para kWh
  const custo = energiaConsumida * tarifa;
  return custo.toFixed(2);
}
