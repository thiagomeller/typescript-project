/* 
# Exercício 5: Sistema de Publicação de Conteúdo

## Contexto:
### Uma plataforma de conteúdo permite a publicação de artigos e vídeos.
- Cada publicação tem um título e um autor.
- Artigos têm um número de palavras.
- Vídeos têm uma duração.
- Ambas devem exibir um resumo de sua estrutura.

### Diagrama UML:
![exercicio_05](https://gist.github.com/user-attachments/assets/3b7bbdd0-db40-41c6-9ce9-6bee3b9cd946)

### Objetivo: Criar as classes e implementar exibirResumo() para cada tipo de publicação.
*/

abstract class Publicacao {
    protected titulo: string;
    protected autor: string;
    protected descricao: string;

    constructor(titulo: string, autor: string, descricao: string) {
        this.autor = autor;
        this.descricao = descricao;
        this.titulo = titulo;
    }

    abstract exibirResumo(): string;
}

class Artigo extends Publicacao {
    private numeroDePalavras: number;

    constructor(titulo: string, autor: string, descricao: string, numeroDePalavras: number) {
        super(titulo, autor, descricao);
        this.numeroDePalavras = numeroDePalavras;
    }

    exibirResumo(): string {
        return `
        #Artigo
        Autor: ${this.autor}; 
        Título: ${this.titulo};
        Descrição: ${this.descricao};
        Nº de palavras: ${this.numeroDePalavras};
        `;
    }
}

class Video extends Publicacao {
    private duracao: number;

    constructor(titulo: string, autor: string, descricao: string, duracao: number) {
        super(titulo, autor, descricao);
        this.duracao = duracao;
    }

    exibirResumo(): string {
        return `
        #Video
        Autor: ${this.autor}; 
        Título: ${this.titulo};
        Descrição: ${this.descricao};
        Duração: ${this.duracao} min;
        `; 
    }
}

const artigo = new Artigo('Artigo1', 'Thiago', 'Artigo top', 1000);

console.log(artigo.exibirResumo());

const video = new Video('Video1', 'Carlos', 'Video bom', 30);

console.log(video.exibirResumo());
