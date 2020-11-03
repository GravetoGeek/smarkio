# Teste prático BI

Este teste foi dividido em cinco etapas:

Modelagem do banco de dados;

Popular o banco de dados com grande volume de dados;

Desenvolver query's;

Faça uma análise estatística descritiva dos status e das mensagens da table3 exporte os dados analisados em .csv.;

Desenvolver uma aplicação node.js para exibição das informações em um dashboard.


# Modo de instalar:

Confira a existência do MySql-server e do cliente Workbench em seu sistema.

## Passo 01
Crie um usuário e senha com permissão DBA no workbench em: Server > Users and Privileges.
Atenção: Não é possível executar o projeto utilizando a conta ROOT do mysql por questões de segurança, é extritamente necessário a criação de um novo usuário com permissões DBA.

<img src="/imagens/01.png" alt="Criando usuário e senha"/>


Criando usuário e senha:

<img src="/imagens/02.png" alt="Criando login e senha"/>


Atribuindo permissões DBA:

<img src="/imagens/03.png" alt="Atribuindo permissões DBA"/>

Execute o código SQL disponível em "/passo-01", este código é responsável pela criação do banco de dados e todas as entidades necessárias.

<img src="/imagens/04.png" alt="Criar banco de dados"/>

## Passo 02
Execute o código SQL disponível em "/passo-02", este código é responsável pela inserção de dados fictícios em todas as tabelas para a execução do teste prático.

<img src="/imagens/05.png" alt="Inserir dados fictícios no banco de dados"/>

## Passo 03
Execute cada um dos códigos existentes em "/passo-03", cada arquivo SQL possui o código referente à uma query solicitada.

<img src="/imagens/06.png" alt="Consultas solicitadas"/>

## Passo 04
O arquivo AnaliseDescritiva.sql possui 2 querys necessárias para uma posterior análise descritiva aprofundada.

<img src="/imagens/07.png" alt="Análise Descritiva"/>

## Passo 05


# Módulo Banco de dados

Este módulo possui mapeamento objeto-relacional, possui uma API para acesso às entidades status,usuarios,intencoes,mensagens. Desenvolvido em NODE.JS, utiliza bibliotecas como Express, mysql2, Sequelize,Sequelize-automate.

Para executá-lo, abra o prompt de comando ou shell em "teste-smarkio/passo-05/db" e execute o comando:
"node index.js"

Para testar a API, abra http://localhost:8888 e modifique a url para corresponder à tabela desejada.

Exemplo:
### Para listar todas as entradas da tabela:

http://localhost:8888/usuarios

http://localhost:8888/intencoes

http://localhost:8888/status

http://localhost:8888/mensagens


### Para obter uma entrada específica pelo id:

http://localhost:8888/usuario/1

http://localhost:8888/intencao/1

http://localhost:8888/status/1

http://localhost:8888/mensagem/1






# Módulo Dashboard
Este módulo está em desenvolvimento, utilizando-se do framework Vue , utiliza bibliotecas como axios, bootstrap-vue, vue-router.
Para executá-lo, abra um novo prompt de comando ou shell em "teste-smarkio/passo-05/dashboard" e execute o comando:

"npm run serve"

Para visualizar acesse http://localhost:8080



