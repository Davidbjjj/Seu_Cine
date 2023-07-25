function salvarDados() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Exemplo de exibição dos dados no console
    console.log('nome:', nome);
    console.log('email:', email);
    console.log('senha:', senha);

    // Limpa os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
}