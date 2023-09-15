// Importar o módulo HTTP
const http = require('http');

// Configurar o servidor HTTP para responder à solicitação
const server = http.createServer((req, res) => {
// Configurar o cabeçalho de resposta com o tipo de conteúdo
res.setHeader('Content-Type', 'text/plain');

// Escrever a resposta
res.end('Olá, mundo!\n');
});

// Definir a porta em que o servidor irá escutar
const porta = 3000;

// Iniciar o servidor e ouvir a porta especificada
server.listen(porta, () => {
console.log(`Servidor está rodando em http://localhost:${porta}/`);
});