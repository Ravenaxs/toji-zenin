// =Citações yhuToji Zenin
const quotes = [
    "“Eu não sou um Jujutsu sorcerer. Eu sou um assassino.”",
    "“A vida não é algo que você deve se preocupar em perder.”",
    "“O poder é a única verdade.”"
];

// Adiciona um evento de clique ao botão "Nova Citação"
document.getElementById('new-quote').addEventListener('click', function() {

    // Gera um índice aleatório baseado no número de citações

    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Atualiza o texto da citação com uma nova citação aleatória
    document.getElementById('quote-text').innerText = quotes[randomIndex];
});
