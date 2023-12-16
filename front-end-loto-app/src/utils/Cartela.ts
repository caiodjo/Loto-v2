import { Combination } from 'js-combinatorics';
import isPrime from '../utils/isPrime';
import isFibonacci from '../utils/isFibo';

export class Cartela {
    private cartelas: number[][];

    static possibilidades: number[] = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    ];

    static padroes = {
        pares: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        impares: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25],
        primos: [2, 3, 5, 7, 11, 13, 17, 19, 23],
        fibonacci: [1, 2, 3, 5, 8, 13, 21],
        moldura: [1, 2, 3, 4, 5, 6, 10, 11, 15, 16, 20, 21, 22, 23, 24, 25],
        miolo: [7, 8, 9, 12, 13, 14, 17, 18, 19],
    };

    constructor() {
        this.cartelas = [];
        this.cartelas = this.cartelas
            .concat(Cartela.createEvenOddCombinations(6))
            .concat(Cartela.createEvenOddCombinations(7))
            .concat(Cartela.createEvenOddCombinations(8));
    }

    public getCartelas(): number[][] {
        return this.cartelas;
    }

    static filtrarNumero(combinacao: number[][], numero: number): number[][] {
        const cartelasFiltradas = combinacao.filter((cartela) => {
            cartela.forEach((el) => {
                if (el === numero) return true;
                return false;
            });
        });
        return cartelasFiltradas;
    }

    static createEvenOddCombinations(qtdPares: 6 | 7 | 8): number[][] {
        const evenComb: Combination<number> = new Combination(this.padroes.pares, qtdPares);
        const qtdImpares: number = 15 - qtdPares;
        const oddComb: Combination<number> = new Combination(this.padroes.impares, qtdImpares);
        const allPossibilities: number[][] = this.concatenarPossibilidades(
            evenComb.toArray(),
            oddComb.toArray(),
            qtdPares,
        );

        return allPossibilities;
    }

    static concatenarPossibilidades(arr1: number[][], arr2: number[][], qtdPares: 6 | 7 | 8): number[][] {
        const result = [];
        for (let i = 0; i < arr1.length; i++) {
            for (let c = 0; c < arr2.length; c++) {
                let primos: number = 0;
                let fibos: number = 0;
                const concated: number[] = arr1[i].concat(arr2[c]);
                concated.forEach((numero) => {
                    if (isPrime(numero)) primos++;
                    if (isFibonacci(numero)) fibos++;
                });
                if (Cartela.deveSerAdicionado(qtdPares, primos, fibos)) {
                    result.push(concated);
                }
            }
        }
        return result;
    }

    //Se o array satisfazer as condicoes, ele ele é adicionado ao resultado
    static deveSerAdicionado(qtdPares: number, primos: number, fibos: number): boolean {
        switch (qtdPares) {
            case 6:
                return (
                    (primos === 5 && (fibos === 4 || fibos === 5)) ||
                    (primos === 6 && fibos === 5) ||
                    (primos === 7 && (fibos === 3 || fibos === 4 || fibos === 5))
                );
            case 7:
                return (
                    (primos === 4 && (fibos === 2 || fibos === 4 || fibos === 5)) ||
                    (primos === 5 && (fibos === 4 || fibos === 5)) ||
                    (primos === 6 && (fibos === 3 || fibos === 4 || fibos === 5 || fibos === 6)) ||
                    (primos === 7 && fibos === 4)
                );
            case 8:
                return (
                    (primos === 5 && (fibos === 4 || fibos === 5)) ||
                    (primos === 6 && (fibos === 3 || fibos === 5))
                );
            default:
                return false;
        }
    }
}
