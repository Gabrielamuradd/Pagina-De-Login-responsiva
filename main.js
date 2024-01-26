// Obtém referência para o elemento de formulário com o ID "formulario_cadastro"
const formularioCadastro = document.getElementById("formulario_cadastro");

// Verifica se o elemento do formulário foi encontrado
if (formularioCadastro) {
  // Adiciona um ouvinte de evento para o envio do formulário
  formularioCadastro.addEventListener("submit", async (e) => {
    // Impede o comportamento padrão de envio do formulário (evita recarregar a página)
    e.preventDefault();

    // Cria um objeto FormData para coletar os dados do formulário
    const dadosFormulario = new FormData(formularioCadastro);

    try {
      // Faz uma requisição POST para uma URL específica com os dados do formulário
      const dados = await fetch("https://webhook.site/4551c387-4dc2-46f4-a615-8a5d3d223ad8", {
        method: "POST",
        body: dadosFormulario,
      });

      // Aguarda a resposta da requisição e a converte para JSON
      const resposta = await dados.json();

      // Exibe uma caixa de diálogo (pop-up) ao usuário usando a biblioteca SweetAlert
      Swal.fire({
        icon: resposta["icon"],  // Ícone da caixa de diálogo (pode ser personalizado)
        text: resposta["msg"],   // Texto da mensagem da caixa de diálogo
        confirmButtonText: "Fechar",  // Texto do botão de confirmação
      });
    } catch (erro) {
      // Captura e exibe no console caso ocorra um erro na requisição
      console.error("Erro na requisição:", erro);
    }
  });
}
