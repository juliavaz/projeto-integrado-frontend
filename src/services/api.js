import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
});

export const getDeputados = async () => {
  const deputados = await http.get('deputados');
  return deputados;
};

export const getPartidos = async () => {
  const partidos = await http.get('partidos', {
    params: {
      itens: 50
    }
  });
  return partidos;
};

export const getProposicoes = async () => {
  const proposicoes = await http.get('proposicoes', {
    params: {
      itens: 50,
      ordem: 'desc',
      ordenarPor: 'ano'
    }
  });
  return proposicoes;
};

