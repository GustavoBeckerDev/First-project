// Lista completa de estados do Brasil
const estados = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' }
  ];
  
  const selectEstado = document.getElementById('estado');
  
  estados.forEach(estado => {
    const option = document.createElement('option');
    option.value = estado.sigla;
    option.textContent = `${estado.sigla} - ${estado.nome}`;
    selectEstado.appendChild(option);
  });
  
  // Validação simples do formulário
  document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let idade = document.getElementById('idade').value;
    let email = document.getElementById('email').value;
    let renda = document.getElementById('renda').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
  
    if (!nome || !sobrenome || !idade || !email || !renda || !cidade || !estado) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    if (parseInt(idade) <= 0) {
      alert("Por favor, insira uma idade válida.");
      return;
    }
  
    // Se a validação passar, envia o formulário
    this.submit();
  });

// Função para mostrar mensagens baseadas na URL
function showMessage() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const msg = urlParams.get('msg');
    
    if (status) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        
        if (status === 'success') {
            messageDiv.className += ' success';
            messageDiv.textContent = 'Dados inseridos com sucesso!';
            
            // Limpa o formulário após sucesso
            document.getElementById('cadastroForm').reset();
        } else if (status === 'error') {
            messageDiv.className += ' error';
            messageDiv.textContent = msg ? decodeURIComponent(msg) : 'Erro ao processar dados.';
        }
        
        // Adiciona a mensagem no topo do formulário
        const container = document.querySelector('.container');
        const form = document.getElementById('cadastroForm');
        container.insertBefore(messageDiv, form);
        
        // Remove a mensagem após 5 segundos
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
            
            // Limpa a URL
            if (window.history.replaceState) {
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        }, 5000);
    }
}

// Chama a função quando a página carrega
document.addEventListener('DOMContentLoaded', showMessage);
  