<?php

// PRIMEIRA VERIFICAMOS O MÉTODO DE REQUISIÇÃO, SE FOR DIFERENTE DE 'POST'
// TRATAMOS O ERRO
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo "Método não permitido. Utilize POST.";
    exit;
}

// PARÂMETROS PARA CONEXÃO COM O BANCO DE DADOS
$host = "localhost";
$user = "root";
$password = "";
$dbname = "teste_conexao";

// TRY CATCH PARA VALIDAR A CONEXÃO
try {
    // AQUI CRIAMOS A CONEXÃO COM OS PARÂMETROS DO DB
    $conn = new mysqli($host, $user, $password, $dbname);
    
    if ($conn->connect_error) {
        throw new Exception("Falha na conexão: " . $conn->connect_error);
    }

    // Recebe os dados enviados via POST
    $nome      = trim($_POST['nome'] ?? '');
    $sobrenome = trim($_POST['sobrenome'] ?? '');
    $email     = trim($_POST['email'] ?? '');
    $idade     = $_POST['idade'] ?? '';
    $renda     = $_POST['renda'] ?? '';
    $cidade    = trim($_POST['cidade'] ?? '');
    $estado    = trim($_POST['estado'] ?? '');

    // SANITIZAÇÃO DE DADOS VAZIOS ONDE SÃO REQUIRED
    if (empty($nome) || empty($sobrenome) || empty($email) || empty($idade) || empty($renda) || empty($cidade) || empty($estado)) {
        throw new Exception("Por favor, preencha todos os campos.");
    }

    // SANITIZAÇÃO DE EMAIL
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception("Email inválido.");
    }
    
    if ($idade <= 0 || $idade > 120) {
        throw new Exception("Idade deve ser um número válido entre 1 e 120.");
    }

    if ($renda < 0) {
        throw new Exception("Renda não pode ser negativa.");
    }

    // Prepara o comando SQL
    $stmt = $conn->prepare("INSERT INTO clientes (nome, sobrenome, email, idade, renda, cidade, estado) VALUES (?, ?, ?, ?, ?, ?, ?)");
    
    if (!$stmt) {
        throw new Exception("Erro na preparação da consulta: " . $conn->error);
    }

    // Vincula os parâmetros
    $stmt->bind_param("sssidss", $nome, $sobrenome, $email, $idade, $renda, $cidade, $estado);

    // Executa a consulta
    if ($stmt->execute()) {
        $stmt->close();
        $conn->close();
        
        // Redireciona com mensagem de sucesso
        header("Location: " . $_SERVER['HTTP_REFERER'] . "?status=success");
        exit;
    } else {
        throw new Exception("Erro ao inserir dados: " . $stmt->error);
    }

} catch (Exception $e) {
    // Em caso de erro, redireciona com mensagem de erro
    $error_msg = urlencode($e->getMessage());
    header("Location: " . $_SERVER['HTTP_REFERER'] . "?status=error&msg=" . $error_msg);
    exit;
}
?>