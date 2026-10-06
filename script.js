//Métodos DOM
const form = document.querySelector('#form-tarefa');
const inputTarefa = document.querySelector('#tarefa');
const contador = document.querySelector('#contador');
const listaTarefas = document.querySelector('#lista-tarefas');

//Resgate de Tarefas do LOCALSTORAGE
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];