// Exercício 1 - Tipagem e Arrays
let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

// Exercício 2 - Função Tipada
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Ana"));

// Exercício 3 - Classe e Instância
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}

    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());
