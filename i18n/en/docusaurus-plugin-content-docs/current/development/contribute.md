---
id: contribute
title: Contributing Guide
sidebar_label: Contribute
slug: /development/contribute
---

We are very happy about your interest in helping Sumé. Our community is made up of people like you, who wish to make a positive impact on society.

Feel welcome, we are grateful for any help you can give us, but first, read our guide to learn how to ask questions and contribute.

- [Code of Conduct](/docs/conduct)
- [Reporting an Issue](/docs/development/contribute#reporting-an-issue)
- [Project Management](/docs/development/contribute#project-management-maintainers-only)
- [Your First Contribution](/docs/development/contribute#your-first-contribution)
- [Contributing](/docs/development/contribute#contributing)
- [Get in Touch](/docs/development/contribute#get-in-touch)

## Reporting an Issue

Important: **DO NOT report security vulnerabilities on public issues.** Please report the problem directly to the Sumé team. We will assess the issue as soon as possible based on the best efforts and provide an estimate of when we have a correction and release available for possible public disclosure.

If you need technical help or want to discuss a technical or non-technical topic, you can open an issue for discussion or go directly to the community chat on [discord](https://discord.com/invite/aaJzjBunTZ).

All repositories have templates indicating the type and what information is needed to open an issue.

### Bug reports

If you think you've found a bug:

- **Use the GitHub issue search** - check if the issue has already been reported.
- **Check if the issue has been fixed** - try to reproduce it using the latest main branch in the repository.
- **Isolate the problem** - ideally create a reduced test case.

Please try to be as detailed as possible in your report.

### Feature requests

Feature requests are welcome. We are open to new ideas and proposed changes to comply with the user needs.

If you want to contribute, open an issue in the respective repository on [GitHub](https://github.com/sumelms), describe as much as possible what you would like to see in Sumé, why you think it would be necessary, and how it should work.

## Project Management (maintainers only)

To keep things organized all our repositories can have their issues, but you can found our [project board with all the tickets here](https://github.com/orgs/sumelms/projects/1).

### Ticket classification

#### Epics and User Stories

- **Epics** are issues that to be solved need to be split into small tasks called *user stories*.
- **User Stories** are issues that to be solved need to be split into small and executable issues.

This type of issues we call them "planning issues", 'cause they are the ones that can control and track the execution of the other issues.

These tasks should hold the necessary amount of the strategic view of its goal as well the links to other documents and related issues - nothing more, nothing less.

To help you to identify an Epic and a User Story, remember:

- Cannot be assigned to anybody
- N**ormally** lives at the [main repository](https://github.com/sumelms/sumelms)
- Do not generate any PR
- Cannot be directly executed

#### Issues

Issues are executable tasks. If they are related to new features or enhancements, it is pretty common that they are part of a User Story, also these small and executable tasks can be bugs, in this case, it is pretty normal that they are **not** related to any User Story.

To help you to identify an Issue, remember:

- Can be assigned to someone
- Lives in the task-specific repository
- Can be executed
- **Normally** results in a PR

## Your First Contribution

First time contributing? To feel more comfortable and get to know the project better, we suggest that you take a look at the issues labeled *Good First Issue*.

You can also:

- review a [Pull Request](https://github.com/sumelms)
- fix an [Issue](https://github.com/sumelms)
- update the [documentation](https://github.com/sumelms/website/tree/main/docs)
- write a tutorial

## Contributing

To contribute, make sure you:

- Read the [documentation](https://sumelms.com/docs/) on the website;
- Read the **README file** of the repository, there you will find important information such as the requirements and instructions on how to run the project.

### Semantic Versioning

Sumé follows the [semantic versioning](https://semver.org/).

- patch - for critical bug fixes.
- minor - for new features and non-essential changes.
- major - for any breaking changes.

Every breaking change is documented in the *changelog* file

### Make a Pull Request

All changes must be submitted directly to the ***main*** branch.  We do our best to keep everything in order, with all tests passing.

All code sent to the ***main*** must be compatible with the latest stable version.

**Before submitting a pull request,** please:

- Fork the repository and create your branch from the main.
- Run the commands to install and build the dependencies.
- If you fixed a bug or added code that needs to be tested, add tests.
- Make sure that the whole test suite is passing successfully.
- Update your branch with the most recent changes from the upstream main branch. You can do this locally with:

  ```sh
  git pull --rebase upstream main
  ```

- Provide a detailed description of the changes to the PR. Live demo preferred.
- If necessary, you can organize your commit messages using GIT's interactive rebase. Please follow our commit message conventions shown below:

  **Commit Message Conventions**

    - Commit test files with `test: ...` or `test(scope): ...` prefix
    - Commit bug fixes with `fix: ...` or `fix(scope): ...` prefix
    - Commit new features with `feat: ...` or `feat(scope): ...` prefix
    - Commit breaking changes by adding `BREAKING CHANGE:` in the commit body (not the subject line)
    - Commit changes to `package.json`, `.gitignore` and other meta files with `chore(filenamewithoutext): ...`
    - Commit changes to README files or comments with `docs: ...`
    - Cody style changes with `style: standard`



 ### Merging a PR (maintainers only)

 A PR can only be merged with **main** by a maintainer if:

 - CI is passing.
 - It was approved by at least two maintainers. If it was a maintainer who opened the PR, only extra approval is required.
 - No changes requested.
 - It is updated with the current branch main code.

## Get in Touch

  - Sumé Community on [Discord](https://discord.com/invite/aaJzjBunTZ), in case you need help or want to make suggestions.
  - Look for / ask questions at [Stack Overflow](https://stackoverflow.com/questions/tagged/sumelms).
  - Chat with the community on the [Reddit](https://new.reddit.com/r/sumelms/) forum.
