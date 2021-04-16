# Opala Studios | Teste Node.js
## Server

Para rodar o servidor no console rodar o comando yarn depois yarn dev para iniciar
Para rodar a pagina web no console rodar o comando yarn depois yarn dev para iniciar


Criar uma API RESTful utilizando o `express` para gerênciar os kits do Super Pads

- Kit
    - id: `string`
    - name: `string`
    - createdAt: `date`
    - updatedAt: `date`
    - isDeleted: `boolean`

- Requisitos
    - Ao criar um novo kit os campos `createdAt` e `updatedAt` devem ser salvos com o horário atual da operação.
    - Ao criar um novo kit o campo `isDeleted` deve ser salvo como `false` por padrão.
    - Ao atualizar um kit o campo `updatedAt` deve ser atualizado com o horário atual da operação.
    - Ao buscar os kits deve ser retornado apenas os kits marcados como `isDeleted: false`.
    - Ao excluir um kit o campo `isDeleted` deve ser marcado como `true`.

- Endpoints
    - POST: `/kits` 
        - Criar um novo kit
    - PUT: `/kits/:id` 
        - Alterar um kit por id
    - GET: `/kits?name=` 
        - Buscar todos os kits ou filtrar kits por nome
    - GET: `kits/:id`
        - Buscar um kit por id
    - DELETE: `kits/:id`
        - Excluir um kit por id

- Banco de Dados
    - Memória ou Sqlite3

### Web

Criar uma aplicação web utilizando o `Next.js` para consumir os `endpoins` da API

- Páginas
    - `/kits`
        - Exibe uma lista com todos os kits cadastrados
            - Para cada item deve ser possível navegar para a página de edição do kit
            - Para cada item deve ser possível exclui-lo da lista
    - `/kits/:id`
        - Exibe os dados do kit em formulário
        - Permite a alteração do formulário
    - `/kits/new`
        - Exibe um formulário para cadastrar um novo kit
    

