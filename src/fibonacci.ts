// Função para verificar se um número pertence à sequência de Fibonacci
const isFibonacci = (num: number): boolean => {
    if (num < 0) return false; // Números negativos não fazem parte da sequência de Fibonacci

    let a = 0, b = 1;
    if (num === a || num === b) return true;

    while (b <= num) {
        const next = a + b;
        a = b;
        b = next;

        if (b === num) return true;
    }

    return false;
}

// Função para atualizar a interface com o resultado
const checkFibonacci = () => {
    const input = (document.getElementById('numberInput') as HTMLInputElement).value;
    const number = parseInt(input, 10);
    const resultElement = document.getElementById('result');

    if (isNaN(number)) {
        resultElement!.textContent = "Por favor, forneça um número válido.";
        return;
    }

    if (number < 0) {
        isFibonacci(number);
        resultElement!.textContent = `${number} não pertence à sequência de Fibonacci.`;
    } else {
        isFibonacci(number);
        resultElement!.textContent = `${number} pertence à sequência de Fibonacci.`;
    }
}

// Adiciona um ouvinte de evento ao botão
document.getElementById('checkButton')!.addEventListener('click', checkFibonacci);
