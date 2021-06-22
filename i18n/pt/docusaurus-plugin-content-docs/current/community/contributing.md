---
id: contributing
title: Contribuindo
sidebar_label: Contribuindo
slug: /contributing
---

# Contribuindo

## Relatar Bug

:::caution Important **NÃO relate vulnerabilidades de segurança em questões públicas.** Por favor, reporte o problema diretamente para a equipe Sumé enviando uma mensagem para [security@sumelms.com](mailto:security@sumelms.com). Avaliaremos a questão o mais rapidamente possível com base nos melhores esforços e forneceremos uma estimativa de quando tivermos uma correcção e libertação disponíveis para uma possível divulgação pública. :::

Todos os repositórios possuem modelos indicando o tipo e as informações necessárias para abrir uma issue.

Se você acha que encontrou um bug:

- **Use a pesquisa de problemas do GitHub** - verifique se o problema já foi reportado.
- **Verifique se o problema foi corrigido** - tente reproduzi-lo usando o último ramo principal do repositório.
- **Isole o problema**: idealmente crie um caso de teste reduzido.

Reporte com o máximo possível de detalhes possíveis.

## Solicitar Funcionalidade

Pedidos de funcionalidades são bem vindos. Estamos abertos a novas ideias e a propostas de alteração para satisfazer as necessidades dos utilizadores.

Se você deseja contribuir, abra uma issue no respectivo repositório no [GitHub](https://github.com/sumelms), Descreva tanto quanto possível o que você gostaria de ver na Sumé, por que você acha que isso seria necessário e como deveria funcionar.

## Questões de Suporte

Se você precisa de ajuda técnica ou quer discutir um assunto técnico ou não técnico, você pode abrir uma issue para discussão ou ir diretamente para o chat da comunidade no [discord](https://discord.com/invite/aaJzjBunTZ).

## Como Contribuir

Para contribuir, certifique-se de que:

- Leia a [documentação](https://sumelms.com/docs/) no site;
- Leia o arquivo **README** do repositório, lá você encontrará informações importantes como os requisitos e instruções sobre como executar o projeto.

Você pode contribuir com:

- Revisando um [Pull Request](https://github.com/sumelms)
- Corrigindo uma [Issue](https://github.com/sumelms)
- Atualizando / Traduzindo a [documentação](https://github.com/sumelms/website/tree/main/docs)
- Escrevendo um tutorial / artigo para nosso [blog](https://medium.com/sumelms)
- e mais...

## Criando um Pull Request

Primeira vez contribuindo? Para se sentir mais confortável e conhecer melhor o projeto, sugerimos que você dê uma olhada nas issues rotuladas como **junior job :baby:**.

Todas as alterações devem ser enviadas diretamente para a branch ***main***. Fazemos o nosso melhor para manter tudo em ordem, com a passagem de todos os testes.

Todo o código enviado para ***main*** deve ser compatível com a última versão estável.

**Antes de enviar um pull request,** por favor:

1. Faça um fork do repositório e crie seu branch a partir do branch main.
2. Execute os comandos para instalar e construir as dependências.
3. Se você corrigiu um bug ou adicionou um código que precisa ser testado, adicione os testes.
4. Certifique-se de que toda a suíte de testes esteja passando com sucesso.
5. Atualize seu fork com as alterações mais recentes do branch main. Você pode fazer isso localmente com:

  ```sh
  git pull --rebase upstream main
  ```

6. Forneça uma descrição detalhada das alterações para o PR. Preferêncialmente com uma demonstração ao vivo.
7. Se necessário, você pode organizar suas mensagens de commit usando a rebase interativa do GIT. Por favor, siga nossas convenções de mensagem de commit mostradas abaixo:

  **Convenções de Mensagens Commit**

  - Commit arquivos de teste com prefixo: `test: ...` ou `test (scope): ...`
  - Commit arquivos de correção com prefixo: `fix: ...` ou `fix (scope): ...`
  - Commit arquivos de funcionalidades com prefixo: `feat: ...` ou `feat (scope): ...`
  - Commit quebras de alterações adicionando `BREAKING CHANGE:` no corpo do commit (não na linha de assunto)
  - Enviar alterações para `package.json`, `.gitignore` e outros arquivos meta com `chore (filenamewithoutext): ...`
  - Fazer alterações nos arquivos README ou comentários com `docs: ...`
  - Estilo de código alterado com `style: standard`