=>>> Sistema de Cadastro de Clientes <<<=

Este projeto é uma aplicação web simples desenvolvida como parte dos meus estudos iniciais em desenvolvimento backend com PHP. O objetivo principal é demonstrar a comunicação entre um frontend baseado em HTML, CSS e JavaScript e um backend PHP para inserção segura de dados em um banco de dados MySQL.

🚀 Tecnologias Utilizadas

=>>> Frontend <<<=
    HTML5: Estruturação da página de cadastro.
    CSS3: Estilização da interface, incluindo um design moderno com gradientes, transparência e efeitos de desfoque.
    JavaScript: Validação de formulário no lado do cliente e preenchimento dinâmico do campo "Estado" com uma lista de estados brasileiros.
=>>> Backend <<<=
    PHP: Linguagem de programação para processamento dos dados do formulário, validação e interação com o banco de dados.
=>>> Banco de Dados <<<=
    MySQL: Sistema de gerenciamento de banco de dados relacional para armazenar as informações dos clientes.

✨ Funcionalidades

=>>> Formulário de Cadastro: Interface intuitiva para inserir dados do cliente, como nome, sobrenome, idade, e-mail, renda, cidade e estado.
=>>> Validação de Dados:
    Frontend (JavaScript): Validação básica para garantir que todos os campos obrigatórios sejam preenchidos e que a idade seja um valor positivo.
    Backend (PHP): Validação robusta que verifica se todos os campos estão preenchidos, valida o formato do e-mail e verifica a faixa etária e renda, prevenindo dados inválidos antes da inserção no banco.
    Conexão Segura ao Banco de Dados: Utilização de **Prepared Statements** no PHP para prevenir ataques de injeção SQL, garantindo que os dados sejam inseridos de forma segura no banco de dados.
    Feedback ao Usuário: Exibição de mensagens de sucesso ou erro na interface do usuário após a tentativa de cadastro, com base na resposta do backend.

🛠️ Como Configurar e Rodar o Projeto

Pré-requisitos

Para rodar este projeto, você precisará de um ambiente de desenvolvimento web que suporte PHP e MySQL. Recomendo o uso de:

=>>> XAMPP ou WAMPP (para Windows)
=>>> MAMP (para macOS)
=>>> LAMP (para Linux)

Certifique-se de que o Apache (ou Nginx) e o MySQL estão em execução.

=>>> Passos <<<=

1.  Clone o Repositório:
   
    git clone https://github.com/GustavoBeckerDev/First-project.git
   
2.  Configurar o Banco de Dados:
    Acesse o PHPMyAdmin (geralmente em `http://localhost/phpmyadmin`).
    Crie um novo banco de dados chamado `teste_conexao`.
    Execute o seguinte script SQL para criar a tabela `clientes`:


        CREATE TABLE clientes (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            sobrenome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            idade INT NOT NULL,
            renda DECIMAL(10, 2) NOT NULL,
            cidade VARCHAR(255) NOT NULL,
            estado VARCHAR(2) NOT NULL,
            data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
   
    Observação: O script PHP (`backend.php`) está configurado para `host="localhost"`, `user="root"` e `password=""`. Se a sua configuração do MySQL for diferente, ajuste essas credenciais no arquivo `backend.php`.

3.  Mover para o Servidor Web:
    =>>> Copie a pasta do projeto (`nome-do-seu-repositorio`) para o diretório `htdocs` (no XAMPP/WAMPP) ou `www` (no MAMP) do seu servidor web.

4.  Acessar a Aplicação:
    =>>> Abra seu navegador e acesse: `http://localhost/nome-do-seu-repositorio/index.html` (substitua `nome-do-seu-repositorio` pelo nome da pasta que você copiou).

💡 Aprendizados e Próximos Passos

Este projeto foi fundamental para solidificar meus conhecimentos em:

* Desenvolvimento web full-stack básico.
* Comunicação entre frontend e backend.
* Manipulação de formulários HTML com JavaScript.
* Validação de dados tanto no cliente quanto no servidor.
* Conexão e interação com bancos de dados MySQL usando PHP.
* A importância da segurança com Prepared Statements para prevenir injeção SQL.

Como próximos passos, pretendo:

=>>> Implementar funcionalidades de leitura, atualização e exclusão (CRUD completo).
=>>> Adicionar autenticação e autorização de usuários.
=>>> Melhorar a experiência do usuário com feedback mais visual e animações.
=>>> Explorar frameworks PHP (como Laravel ou Symfony) para desenvolvimento mais robusto.
=>>> Aprofundar em conceitos de arquitetura de software e design patterns.

🤝 Contribuições

Sinta-se à vontade para explorar o código, sugerir melhorias ou reportar problemas. Toda contribuição é bem-vinda!
