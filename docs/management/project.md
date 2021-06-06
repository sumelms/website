---
id: project
title: Project Management
sidebar_label: Project Management
slug: /project
---

# Project Management

To keep things organized all our repositories can have their issues, but you can found our [project board with all the tickets here](https://github.com/orgs/sumelms/projects/1).

## Ticket classification

### Epics and User Stories

- **Epics** are issues that to be solved need to be split into small tasks called *user stories*.
- **User Stories** are issues that to be solved need to be split into small and executable issues. 

This type of issues we call them "planning issues", 'cause they are the ones that can control and track the execution of the other issues.

These tasks should hold the necessary amount of the strategic view of its goal as well the links to other documents and related issues - nothing more, nothing less.

To help you to identify an Epic and a User Story, remember:

- Cannot be assigned to anybody
- **Normally** lives at the [main repository](https://github.com/sumelms/sumelms)
- Do not generate any PR
- Cannot be directly executed

### Issues

Issues are executable tasks. If they are related to new features or enhancements, it is pretty common that they are part of a User Story, also these small and executable tasks can be bugs, in this case, it is pretty normal that they are **not** related to any User Story.

To help you to identify an Issue, remember:

- Can be assigned to someone
- Lives in the task-specific repository
- Can be executed
- **Normally** results in a PR

## Merging a PR

 A PR can only be merged with **main** by a maintainer if:

 - CI is passing.
 - It was approved by at least two maintainers. If it was a maintainer who opened the PR, only extra approval is required.
 - No changes requested.
 - It is updated with the current branch main code.

## Semantic Versioning

Sumé follows the [semantic versioning](https://semver.org/).

- patch - for critical bug fixes.
- minor - for new features and non-essential changes.
- major - for any breaking changes.

Every breaking change is documented in the *changelog* file