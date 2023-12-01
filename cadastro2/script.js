// script.js

document.addEventListener('DOMContentLoaded', function () {
  // Adiciona um ouvinte de evento quando o DOM estiver completamente carregado
  const botaoCadastrar = document.getElementById('botaoCadastrar');
  botaoCadastrar.addEventListener('click', cadastrarRoupa);
});

function cadastrarRoupa() {
  // Obter os valores dos campos de entrada
  const marca = document.getElementById('roupa').value;
  const descricao = document.getElementById('descricao').value;

  // Validar se ambos os campos estão preenchidos
  if (!marca.trim() || !descricao.trim()) {
    alert('Por favor, preencha todos os campos antes de cadastrar.');
    return;
  }

  // Criar um novo item de lista
  const novaRoupa = criarElementoLi(`${marca}: ${descricao}`);

  // Adicionar o novo item à lista
  const listaRoupas = document.getElementById('listaRoupas');
  listaRoupas.appendChild(novaRoupa);

  // Limpar os campos do formulário
  document.getElementById('roupa').value = '';
  document.getElementById('descricao').value = '';
}

function criarElementoLi(texto) {
  // Retorna um novo elemento de lista (li) com o texto fornecido
  const novoElementoLi = document.createElement('li');
  novoElementoLi.textContent = texto;
  return novoElementoLi;
}
