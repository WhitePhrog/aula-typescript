// Exercícios TypeScript - Conceitos Avançados

// 1. Interfaces e Tipagem Avançada

// Exercício 1
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; // Propriedade opcional
}

const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "2.0 Flex",
    detalhes: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(meuCarro);

// Exercício 2
interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (a, b) => a * b;

console.log(multiplicar(5, 3));
console.log(multiplicar(7, 2));


// 2. Generics

// Exercício 3
function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}

console.log(inverterArray([1, 2, 3, 4, 5]));
console.log(inverterArray(["a", "b", "c", "d"]));

// Exercício 4
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];

    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }

    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}

const repo = new UsuarioRepositorio();
repo.salvar({ nome: "Alice", email: "alice@example.com" });
repo.salvar({ nome: "Bob", email: "bob@example.com" });

console.log(repo.obterTodos());


// 3. Manipulação Avançada de Tipos

// Exercício 5
type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Mensagem do servidor: ${resposta}`);
    } else {
        console.log(resposta ? "Operação bem-sucedida!" : "Falha na operação.");
    }
}

processarResposta("Dados recebidos com sucesso");
processarResposta(true);
processarResposta(false);

// Exercício 6
type Estudante = {
    nome: string;
    curso: string;
};

type Trabalhador = {
    empresa: string;
    cargo: string;
};

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Carlos",
    curso: "Engenharia de Software",
    empresa: "Tech Solutions",
    cargo: "Desenvolvedor Júnior"
};

console.log(estudanteTrabalhador);
