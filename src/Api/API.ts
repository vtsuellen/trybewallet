// Função assíncrona para fazer a requisição à API

async function Api() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();

  // Remove a opção 'USDT'
  delete data.USDT;

  // Obtém as moedas disponíveis
  const currencies = Object.keys(data);

  return currencies;
}

export default Api;
