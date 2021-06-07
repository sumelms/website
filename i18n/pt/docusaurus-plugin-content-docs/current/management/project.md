---
id: project
title: Gerenciamento do Projeto
sidebar_label: Gerenciamento do Projeto
slug: /project
---

# Gerenciamento do Projeto

Para manter tudo organizado, todos os nossos repositórios podem ter seus problemas, mas você pode encontrar nosso quadro de projeto [com todos os tickets aqui](https://github.com/orgs/sumelms/projects/1).

## Classificação de Ticket

### Epics e User Stories

- **Epics** são problemas para serem resolvidos precisam ser divididos em pequenas tarefas chamadas *User Stories*.
- **User Stories** são problemas que devem ser resolvidos precisam ser divididos em pequenos e executáveis.

Este tipo de issues que chamamos de "questões de planeamento", porque são elas que podem controlar e acompanhar a execução das outras questões.

Estas tarefas devem ter a necessária visão estratégica do seu objetivo, bem como as ligações com outros documentos e issues relacionadas - nada mais, nada menos que isso.

Para ajudá-lo a identificar uma Epic e User Story, lembre-se:

- Não pode ser atribuído a ninguém
- **Normalmente** vive no [repositório principal](https://github.com/sumelms/sumelms)
- Não gera qualquer PR
- Não pode ser executada diretamente

### Issues

Issues são tarefas executáveis. Se elas estão relacionados a novos recursos ou melhorias, é bem comum que façam parte de uma User Story, mas também essas pequenas e executáveis tarefas podem ser bugs, neste caso, é bem normal que eles **não estejam** relacionados a nenhuma história do usuário.

Para ajudá-lo a identificar uma Issue, lembre-se:

- Pode ser atribuído a alguém
- Está ativo no repositório específico para tarefas
- Pode ser executada
- **Normalmente** resulta em um PR

## Mesclando um PR

 Um PR só pode ser mesclado com o **main** por um mantenedor se:

 - CI está passando.
 - Foi aprovado por pelo menos dois mantenedores. Se for um mantenedor que abriu a RP, apenas é necessária apenas uma aprovação extra.
 - Nenhuma alteração solicitada.
 - Ele está atualizado com o código principal da branch atual.

## Versionamento Semântico

O Sumé LMS segue [versionamento semântico](http://semver.org/).

- patch - para correções de erros críticos.
- minor - para novos recursos e mudanças não essenciais.
- major - para quaisquer alterações de ruptura.

Toda alteração de quebra é documentada no arquivo *changelog*