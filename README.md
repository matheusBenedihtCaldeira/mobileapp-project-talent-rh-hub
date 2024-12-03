# TalentSpot
Desenvolvedores responsáveis:
- **Matheus Benediht Caldeira**
- **Yasmin Martins Bertoncini**
- **Marcos Gabriel Iurak**

--- 

## Descrição do Projeto

Este projeto é uma aplicação voltada para a **realocação interna e gerenciamento de funcionários** em um ambiente corporativo. A ferramenta permite:

- **Registrar funcionários por departamento.**
- **Realizar avaliações dos funcionários.**
- **Criar e gerenciar novas vagas internas.**

A aplicação foi desenvolvida para facilitar a comunicação entre setores, gerentes e a equipe de RH, promovendo uma gestão eficiente de talentos e recursos.

---

## Tecnologias Utilizadas

### `Frontend`
- **React Native**  
Para uma interface intuitiva e responsiva em dispositivos móveis.

### `Backend`
- **Node.js com Express**  
API robusta para comunicação com o banco de dados e gerenciamento das funcionalidades do sistema.

### `Banco de Dados`
- **PostgreSQL (RDS)**  
Gerenciamento seguro e escalável de dados hospedados na AWS.

### `Infraestrutura`
- **AWS (EC2 e RDS)**  
Servidor em nuvem para garantir alta disponibilidade e desempenho.

---

## Pré-requisitos

- **Node.js** instalado.
- **Python 3.12**
- **Gerenciador de pacotes npm** configurado.
- **Gerenciador de pacotes pip** configurado.
- Conta e instância configurada no AWS para o banco de dados, ou uma instância local PostgreSQL.

---

## Instruções de Instalação

1. Clone este repositório para sua máquina local:
   ```bash
   git clone <https://github.com/matheusBenedihtCaldeira/mobileapp-project-talent-rh-hub.git>
   cd mobileapp-project-talent-rh-hub
2. Instalação das dependências
Abra três terminais, um para executar o frontend outro para executar o backend e um para executar o FastAPI.
Instale as dependências de um projeto em cada terminal aberto:
    ```bash
       cd frontend
       npm i -g expo-cli
       npm i
    ```
    ```bash
       cd backend
       npm i
     ```
     ```bash
       cd python-api
       pip install -r requirements.txt
     ```
     
---

## 3. Arquivo `.env`
Verifique se na pasta backend e python-api contem o arquivo .env com 
Este é um exemplo de como criar um arquivo `.env` com variáveis de ambiente para seu projeto:

```env
# Configurações do banco de dados
DB_HOST=localhost
DB_USER=usuario_banco
DB_PASSWORD=senha_banco
DB_NAME=nome_banco
DB_PORT=5432
```

---


## 4. Executando o projeto
1. `Backend`
```bash
    # Executar ambiente de dev
    npm run dev
    # Cria a dist do projeto
    npm run build
    # Com a dist criada você pode executar o
    npm run start
```

2. `Frontend`

    >Antes se quiser usar o backend executado localmente verifique se o arquivo frontend/src/services/axiosApi.js está conforme o script abaixo

```javascript
import axios from "axios";

const baseURL = "http://127.0.0.1:8993/api"; //Utilizando IP local

export const apiHandler = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

```
3. `python-api`
```bash
    py main.py
```

---

## Referências

- [Documentação do Express.js](https://expressjs.com/)
- [Documentação do React Native](https://reactnative.dev/docs/getting-started)
- [Documentação do PostgreSQL](https://www.postgresql.org/docs/)
- [AWS RDS Documentation](https://docs.aws.amazon.com/rds/index.html)
- [AWS EC2 Documentation](https://docs.aws.amazon.com/ec2/)