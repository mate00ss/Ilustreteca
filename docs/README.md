# Ilustreteca

## Descrição
WebApp criado para gerenciamento de bibliotecas

## Pré-requisitos

- git
- node.js

## Instalação

### Método 01 - releases (AINDA PARA SER IMPLEMENTADO, USAR MÉTODO 02)

1. Baixar o pacote da Ilustreteca
    
    > Na página de 'releases' do projeto, todas as versões finalizadas do projeto são mantidas, sempre recomendamos a mais atual, mas o usuário pode optar por baixar uma versão específica do programa.

2. Extrair o pacote
    
    > Usando qualquer ferramenta de compressão, extraia o arquivo baixado.

3. Executar o instalador
    
    > Entre na pasta 'Ilustreteca', e execute o arquivo 'instalar.sh'

    ou

    > Abra o terminal e navegue até a pasta extraída, lá execute o arquivo 'instalar.sh' usando o comando `chmod +x instalar.sh && ./instalar.sh`.

4. Atalho
    
    > Um atalho será criado na pasta do instalador, mova-o para onde quiser.


### Método 02 - git e node.js (Utiliza terminal, Avançado)

1. Clone o repositório
    
    > Clone o repositório localmente usando `git clone https://github.com/matss00/Ilustreteca`.

2. Instalar módulos
    
    > Usando o terminal, navegue para o repositório clonado e use `pnpm install` ou `npm install` para instalar os módulos necessários para a Ilustreteca.

3. Criar arquivo .env
    
    > Ainda no repositório, use `touch .env` e `echo "PORT=3000" > .env` para criar o arquivo com as variáveis de ambiente e inserir a variável PORT nele.

4. Executando o arquivo principal

    > Use `node .` na pasta do repositório para executar o arquivo principal usando node
