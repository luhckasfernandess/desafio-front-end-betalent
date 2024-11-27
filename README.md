# **Desafio Frontend BeTalent - Lista de Funcionários**

Este projeto consiste em uma aplicação web responsiva que exibe uma lista de funcionários. Os dados são consumidos de uma API simulada e apresentados de forma estilizada e funcional. A aplicação foi desenvolvida com foco em responsividade, experiência do usuário e boas práticas de desenvolvimento front-end.

---

## **🚀 Tecnologias utilizadas**

As seguintes tecnologias foram usadas no desenvolvimento do projeto:

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Vite**: Ferramenta de construção para um desenvolvimento mais rápido e otimizado.
- **JSON-Server**: Ferramenta para simular uma API RESTful.
- **CSS**: Para estilização da aplicação, com foco em **Mobile First**.
- **ESLint**: Ferramenta de linting e formatação para garantir a qualidade do código.
- **Yarn**: Gerenciador de pacotes utilizado no projeto.

---

## **💻 Funcionalidades**

- **Exibição de funcionários:** Dados como nome, cargo, data de admissão e telefone.
- **Responsividade:** Layout adaptado para diferentes tamanhos de tela (Mobile First).
- **Pesquisa:** Campo para buscar funcionários em tempo real.
- **Acessibilidade:** Design intuitivo com ícones e navegação clara.
- **Organização modular:** Arquitetura de software limpa com divisão de responsabilidades.

---

## **📦 Como executar o projeto**

### **Pré-requisitos**
Certifique-se de ter os seguintes softwares instalados:
- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/lang/en/)
- [Git](https://git-scm.com/)

### **Passo a passo**

1. **Clone o repositório em sua máquina:**

   ```bash
   git clone https://github.com/luhckasfernandess/desafio-front-end-betalent.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**

   ```bash
   yarn install
   ```

3. **Configure o JSON-Server:**

   O projeto utiliza o `JSON-Server` para simular uma API. Certifique-se de ter um arquivo `db.json` no diretório principal contendo os dados dos funcionários.

   Exemplo de estrutura para o `db.json`:
   ```json
   {
     "employees": [
       {
         "id": 1,
         "name": "Giovana L. Arruda",
         "job": "Front-end",
         "admission_date": "2020-01-10",
         "phone": "+55 (55) 55555-555",
         "image": "https://via.placeholder.com/50"
       }
     ]
   }
   ```

   **Inicie o servidor:**

   ```bash
   yarn json-server --watch db.json --port 3001
   ```

4. **Inicie a aplicação:**

   ```bash
   yarn dev
   ```
---