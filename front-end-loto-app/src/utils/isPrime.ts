function isPrime(number: number): boolean {
    if (number <= 1) {
        return false; // 0 e 1 não são números primos
    }

    if (number <= 3) {
        return true; // 2 e 3 são números primos
    }

    if (number % 2 === 0 || number % 3 === 0 ) {
        return false; // Números divisíveis por 2 ou 3 não são primos
    }

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false; // Números divisíveis por i ou i + 2 não são primos
        }
    }

    return true; // Se nenhum divisor foi encontrado, o número é primo
}

export default isPrime;