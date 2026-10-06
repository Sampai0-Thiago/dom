//Métodos DOM
const form = document.querySelector('#form-tarefa');
const inputTarefa = document.querySelector('#tarefa');
const contador = document.querySelector('#contador');
const listaTarefas = document.querySelector('#lista-tarefas');

//Resgate de Tarefas do LOCALSTORAGE
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

//Ouvir e agir sobre o clique
form.addEventListener("submit", adicionarTarefa); 

//Funções
function adicionarTarefa(event){
    event.preventDefault()
    const texto = inputTarefa.value.trim();
    if (texto === ""){
        alert("Digite uma tarefa!");
        return;
    }
    const novaTarefa = {
        id: Date.now(),
        texto: texto,
        concluída: false
    };

    tarefas.push(novaTarefa);
    salvarTarefa();
    renderizarTarefas();
    inputTarefa.value = " ";
    inputTarefa.focus();
}

function renderizarTarefas(){
    tarefas.forEach(function (tarefa, indice){
        const linha = document.createElement("tr");

        const colunaNumero = document.createElement("td");
        colunaNumero.textContent = indice + 1;

        const colunaNome = document.createElement("td");
        colunaNome.textContent = tarefa.texto;

        if (tarefa.concluída){
            colunaNome.classList.add(
                "text-deroration-line through",
                "text-muted"
            );
        }

        const colunaStatus = document.createElement("td");

        if (tarefa.concluida){
            colunaStatus.innerHTML = '<span class="badge text-bg-success>Concluída</span>'
        }else{
            colunaStatus.innerHTML = '<span class="badge text-bg-warning>Pendente</span>'
        }

        linha.appendChild(colunaNome);
        linha.appendChild(colunaNome);
        linha.appendChild(colunaStatus);

        listaTarefas.appendChild(linha)

    });
}

function salvarTarefa(){
    localStorage.setItem("tarefas", JSON.stringify(tarefas) );
}