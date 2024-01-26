const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

/* o código está lidando com a modificação da classe "active" no elemento container com base nos eventos de clique nos botões de registro (registerBtn) e login (loginBtn). Quando o botão de registro é clicado, a classe "active" é adicionada, e quando o botão de login é clicado, a classe "active" é removida. O que faz com que alterne entre diferentes estados ou painéis em uma interface de usuário*/