// Mensagem surpresa
document.getElementById('btnAtividade').addEventListener('click', () => {
    const mensagens = [
        "Parabéns! Você descobriu uma dica de sustentabilidade!",
        "Agrinho 2026 incentiva a criatividade e o cuidado com a natureza!",
        "Continue participando das atividades e aprendendo!"
    ];
    const randomIndex = Math.floor(Math.random() * mensagens.length);
    document.getElementById('mensagem').textContent = mensagens[randomIndex];
});

// Envio de formulário (simulado)
document.getElementById('formContato').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Obrigado por entrar em contato.");
    e.target.reset();
});