"ts-node": "^10.9.2", Servidor para rodar aplicação no package.json
Se tivermos node no projeto type, devemos excluir-lo

Você consegue modificar aqui também para rodar a aplicação
    Caso esteja em true colocaremos em false, isso aqui ele true fica exibindo "Warning"
        "verbatimModuleSyntax": false,


#1 - Clonar o repo:

    git clone (link)

2- Abrir o repo no vscode

3 - Habilitar a permissão de scripts no windows (Caso seja a primeira vez no pc)

    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

4 - Instalar as dependências do projeto
    npm install

5 - Rodar o projeto:

    npm start .\src\01-sequential\terreno.ts
