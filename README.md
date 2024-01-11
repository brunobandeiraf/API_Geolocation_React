# API Geolocation 

## 🛠 **Especificações Técnicas**

- **React.js**: Versão 18 ou superior.
- **Linguagem**: Typescript.
- **Formatação e Linting**: Eslint + prettier.

## 🔍 **Funcionalidades Esperadas**

### Usuários
- **CRUD** completo para usuários.
- Cada usuário deve ter nome, email, endereço e/ou coordenadas.
- Na criação, o usuário pode fornecer endereço ou coordenadas. Haverá erro caso forneça ambos ou nenhum.
- Uso de serviço de geolocalização para resolver endereço ↔ coordenadas.
- Atualização de endereço ou coordenadas deve seguir a mesma lógica.

### Regiões
- **CRUD** completo para regiões.
- Cada região tem um nome, coordenadas e um usuário que será o dono da região.
- Autenticação não é requisito, podendo então o usuário ser fornecido junto do corpo da requisição. Caso implemente autenticação, o usuário deve ser obtido a partir do token.
- Listar regiões contendo um ponto específico.
- Listar regiões a uma certa distância de um ponto, com opção de filtrar regiões não pertencentes ao usuário que fez a requisição.

### Testes
- Integração.

