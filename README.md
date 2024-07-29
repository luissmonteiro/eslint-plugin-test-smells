# eslint-plugin-test-smells

`eslint-plugin-test-smells` é um plugin ESLint que detecta e relata "test smells" em arquivos de teste JavaScript. Este plugin ajuda a garantir que seus testes sejam robustos, legíveis e mantenham boas práticas de programação.

## Instalação

Para instalar o `eslint-plugin-test-smells`, você pode usar o npm ou yarn:

```bash
npm install eslint-plugin-test-smells --save-dev
# ou
yarn add eslint-plugin-test-smells --dev
```

## Configuração

Depois de instalar o plugin, você precisa configurar o ESLint para usá-lo. Crie um arquivo `eslint.config.mjs` na raiz do seu projeto com a seguinte configuração:

```javascript
import testSmellsPlugin from "eslint-plugin-test-smells";

export default [
  {
    files: ["**/*.test.js"], // Defina o padrão dos arquivos de teste aqui
    plugins: { "eslint-plugin-test-smells": testSmellsPlugin },
    rules: {
      "eslint-plugin-test-smells/assertion-roulette": "error",
      "eslint-plugin-test-smells/conditional-test-logic": "error",
      "eslint-plugin-test-smells/ignored-test": "error",
      "eslint-plugin-test-smells/exception-handling": "error",
      "eslint-plugin-test-smells/redundant-print": "error",
      "eslint-plugin-test-smells/sensitive-equality": "error",
    }
  }
];
```

### Regras Disponíveis

- `assertion-roulette`: Detecta múltiplas asserções em um único teste.
- `conditional-test-logic`: Detecta lógica condicional em testes.
- `ignored-test`: Detecta testes ignorados usando `.skip` ou `.only`.
- `exception-handling`: Detecta uso inadequado de tratamento de exceções em testes.
- `redundant-print`: Detecta uso desnecessário de declarações `console.log` ou similares em testes.
- `sensitive-equality`: Detecta comparações sensíveis a tipos que podem causar falhas inesperadas.

### Exemplo de Configuração

Aqui está um exemplo de como configurar o `eslint-plugin-test-smells` para seu projeto:

```javascript
import testSmellsPlugin from "eslint-plugin-test-smells";

export default [
  {
    files: ["**/*.test.js"], // Especifique o padrão dos arquivos de teste
    plugins: { "eslint-plugin-test-smells": testSmellsPlugin },
    rules: {
      "eslint-plugin-test-smells/assertion-roulette": "error",
      "eslint-plugin-test-smells/conditional-test-logic": "error",
      "eslint-plugin-test-smells/ignored-test": "error",
      "eslint-plugin-test-smells/exception-handling": "error",
      "eslint-plugin-test-smells/redundant-print": "error",
      "eslint-plugin-test-smells/sensitive-equality": "error",
    }
  }
];
```

### Personalização

Você pode ajustar quais regras deseja aplicar e o padrão dos arquivos de teste a serem verificados. No exemplo acima, estamos configurando o ESLint para verificar todos os arquivos com extensão `.test.js` e aplicar todas as regras disponíveis no plugin.

## Contribuição

Contribuições são bem-vindas! Se você encontrar um bug ou tiver uma sugestão de melhoria, por favor, abra uma issue ou envie um pull request no [repositório GitHub](https://github.com/luissmonteiro/eslint-plugin-test-smells).

## Licença

Este projeto é open-source e está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
