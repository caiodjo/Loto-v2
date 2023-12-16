function isFibonacci(number: number): boolean {
    if (number < 0) {
        return false; // Números negativos não são números de Fibonacci
    }

    let a = 0;
    let b = 1;

    while (a < number) {
        const temp = a;
        a = b;
        b = temp + b;
    }

    return a === number;
}
export default isFibonacci;
