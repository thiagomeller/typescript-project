/* 
Exercício 4:
Gerenciamento de Tarefas Pessoais

User Story:
Como um usuário, eu quero poder adicionar tarefas pessoais, marcar tarefas como concluídas e visualizar minha lista de tarefas, para que eu possa organizar meu dia a dia.

Requisitos:
Crie uma classe Tarefa
Com os atributos

descricao (string): Descrição da tarefa.
concluida (boolean): Indica se a tarefa foi concluída (inicialmente false).
Adicione métodos para:

Marcar a tarefa como concluída.
Exibir os detalhes da tarefa (descrição e status).

Crie uma classe GerenciadorTarefas que gerencia uma lista de tarefas
Adicione métodos para:

Adicionar uma nova tarefa.
Marcar uma tarefa como concluída (usando o índice da tarefa na lista).
Exibir todas as tarefas (com status).
Teste o sistema criando algumas tarefas, marcando algumas como concluídas e exibindo a lista de tarefas.
*/

class Task {
    private description: string;
    private done: boolean;

    constructor(description: string) {
        this.description = description;
        this.done = false;
    }

    public markAsDone() {
        if (this.done) {
            console.log('Tarefa já concluída')
        } else {
            this.done = true;
            console.log('Tarefa concluída')
        }
    }

    public showTask() {
        return `${this.description} - Status: ${this.done ? 'Concluída' : 'Em andamento'};`
    }
}

class TaskManager {
    private tasks: Task[] = [];

    public addTask(task: Task) {
        this.tasks.push(task);
    }

    public markTaskAsDone(taskIndex: number) {
        const selectedTask = this.tasks[taskIndex - 1]
        if (selectedTask) {
            selectedTask.markAsDone();
        } else {
            console.log('Tarefa não existe')
        }
    }

    public showAllTasks() {
        if (this.tasks.length > 0) {
            this.tasks.map((task, index) => console.log(`${index + 1} - ${task.showTask()}.`))
        } else {
            console.log('Não há tarefas.')
        }
    }
}