let operacaoSelecionada = '+';

const botoesOperador = document.querySelectorAll('.btn-operador');
botoesOperador.forEach(botao => {
    botao.addEventListener('click', () => {
        botoesOperador.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');
        operacaoSelecionada = botao.getAttribute('data-op');
    });
});

document.getElementById('btnExecutar').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const divResultado = document.getElementById('resultado');

    if (isNaN(num1) || isNaN(num2)) {
        divResultado.textContent = 'Preencha os dois números!';
        return;
    }

    let resultado = 0;

    switch (operacaoSelecionada) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : 'Erro - divisão por 0';
            break;
    }

    divResultado.textContent = `Resultado: ${resultado}`
});