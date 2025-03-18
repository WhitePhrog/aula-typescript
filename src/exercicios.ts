// 1. Exercício de Interfaces
interface Produto {
    id: number;
    nome: string;
    preco: number;
    categoria?: string;
}

const produto: Produto = {
    id: 1,
    nome: "Notebook",
    preco: 3000.00,
    categoria: "Eletrônicos"
};

console.log(produto);


// 2. Exercício com Generics
function multiplicar<T>(valor1: T, valor2: T): T {
    if (typeof valor1 === 'string' && typeof valor2 === 'string') {
        return (parseFloat(valor1) * parseFloat(valor2)) as T;
    }
    return (valor1 as number) * (valor2 as number) as T;
}

console.log(multiplicar(5, 10));
console.log(multiplicar("5", "10"));


// 3. Exercício de Union Types
function formatarEntrada(input: string | number): string {
    if (typeof input === 'number') {
        return `O valor é: ${input.toFixed(2)}`;
    } else {
        return `O texto é: ${input.toUpperCase()}`;
    }
}

console.log(formatarEntrada(123.456));
console.log(formatarEntrada("olá mundo"));


// 4. Exercício com Intersection Types
type Endereco = {
    rua: string;
    cidade: string;
    estado: string;
};

type Usuario = {
    nome: string;
    idade: number;
};

type UsuarioCompleto = Usuario & Endereco;

const usuarioCompleto: UsuarioCompleto = {
    nome: "Carlos",
    idade: 30,
    rua: "Rua Principal",
    cidade: "São Paulo",
    estado: "SP"
};

console.log(usuarioCompleto);


// 5. Exercício com Utility Types
interface Pessoa {
    nome: string;
    idade: number;
    email?: string;
}

const pessoaParcial: Partial<Pessoa> = {
    nome: "Maria"
};

console.log(pessoaParcial);


// 6. Exercício de Type Aliases
type ID = string | number;

function buscarUsuario(id: ID) {
    console.log(`Buscando usuário com ID: ${id}`);
}

buscarUsuario(123);
buscarUsuario("abc123");
