# Esteira GitHub – Lista de Tarefas

Site simples (HTML + CSS + JS) para treinar o fluxo completo do GitHub.

## Rodar local
- Testes: `npm test` (Node 20+)
- Site: abra com Live Server ou `npx serve .` (precisa de servidor por causa do `type="module"`)

## Roteiro de treino
1. Crie o repositório no GitHub e faça o primeiro push na `main`.
2. Em Settings > Pages, escolha Source: **GitHub Actions**.
3. Crie uma Issue ("Adicionar botão limpar concluídas").
4. Crie a branch `feature/limpar-concluidas`, implemente (função em `logic.js` + teste).
5. Abra um Pull Request com `Closes #1` e veja o CI rodar.
6. Quebre um teste de propósito, veja o CI falhar, corrija.
7. Em Settings > Branches, proteja a `main` (exigir PR + check `test`).
8. Faça o merge e acompanhe o deploy na aba Actions.
9. Crie uma tag/release (`v1.0.0`).
