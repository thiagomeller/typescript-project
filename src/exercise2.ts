/* 
Exercício 2:
Converta um código que gerencia uma lista de 
tarefas (to-do list) usando funções para uma versão orientada a objetos.

let tarefas: string[] = [];

function adicionarTarefa(tarefa: string): void {
    tarefas.push(tarefa);
    console.log(`Tarefa "${tarefa}" adicionada.`);
}

function listarTarefas(): void {
    console.log("Lista de Tarefas:");
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa}`);
    });
}

function removerTarefa(index: number): void {
    if (index >= 0 && index < tarefas.length) {
        const tarefaRemovida = tarefas.splice(index, 1)[0];
        console.log(`Tarefa "${tarefaRemovida}" removida.`);
    } else {
        console.log("Índice inválido.");
    }
}

adicionarTarefa("Estudar TypeScript");
adicionarTarefa("Fazer exercícios de POO");
listarTarefas();
removerTarefa(0);
listarTarefas();
*/

class ToDoList {
  private tasks: string[] = [];

  public addTask(task: string) {
    this.tasks.push(task);
  }

  public removeTask(taskIndex: number) {
    if (taskIndex >= 0 && taskIndex < this.tasks.length) {
      const removedTask = this.tasks.splice(taskIndex, 1)[0];
      console.log(`Tarefa "${removedTask}" removida.`);
    } else {
      console.log("Índice inválido.");
    }
  }

  public listTasks() {
    console.log("Lista de Tarefas:");
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

const myToDoList = new ToDoList();
myToDoList.addTask("Estudar type");
myToDoList.addTask("Estudar POO");
myToDoList.listTasks();
myToDoList.removeTask(0);
myToDoList.listTasks();
