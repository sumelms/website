---
id: contributing
title: Contributing
sidebar_label: Contributing
slug: /contributing
---

# Contributing

## Bug Reports

:::caution Important
**DO NOT report security vulnerabilities on public issues.** Please report the problem directly to the Sumé team by sending a message to [security@sumelms.com](security@sumelms.com). We will assess the issue as soon as possible based on the best efforts and provide an estimate of when we have a correction and release available for possible public disclosure.
:::

All repositories have templates indicating the type and what information is needed to open an issue.

If you think you've found a bug:

- **Use the GitHub issue search**: check if the issue has already been reported.
- **Check if the issue has been fixed**: try to reproduce it using the latest main branch in the repository.
- **Isolate the problem**: ideally create a reduced test case.

Please try to be as detailed as possible in your report.

## Feature Requests

Feature requests are welcome. We are open to new ideas and proposed changes to comply with the user needs.

If you want to contribute, open an issue in the respective repository on [GitHub](https://github.com/sumelms), describe as much as possible what you would like to see in Sumé, why you think it would be necessary, and how it should work.

## Support Questions

If you need technical help or want to discuss a technical or non-technical topic, you can open an issue for discussion or go directly to the community chat on [discord](https://discord.com/invite/aaJzjBunTZ).

## How to contribute

To contribute, make sure you:

- Read the [documentation](https://sumelms.com/docs/) on the website;
- Read the **README** file of the repository, there you will find important information such as the requirements and instructions on how to run the project.

You can contribute by:

- Reviewing a [Pull Request](https://github.com/sumelms)
- Fixing an [Issue](https://github.com/sumelms)
- Updating / Translating the [documentation](https://github.com/sumelms/website/tree/main/docs)
- Writing a tutorial / article to our [blog](https://medium.com/sumelms)
- and more...

## Create a Pull Request

First time contributing? To feel more comfortable and get to know the project better, we suggest that you take a look at the issues labeled as **junior job :baby:**.

All changes must be submitted directly to the ***main*** branch. We do our best to keep everything in order, with all tests passing.

All code sent to the ***main*** must be compatible with the latest stable version.

**Before submitting a pull request,** please:

1. Fork the repository and create your branch from the main.
2. Run the commands to install and build the dependencies.
3. If you fixed a bug or added code that needs to be tested, add tests.
4. Make sure that the whole test suite is passing successfully.
5. Update your branch with the most recent changes from the upstream main branch. You can do this locally with:

  ```sh
  git pull --rebase upstream main
  ```

6. Provide a detailed description of the changes to the PR. Live demo preferred.
7. If necessary, you can organize your commit messages using GIT's interactive rebase. Please follow our commit message conventions shown below:

  **Commit Message Conventions**

  - Commit test files with `test: ...` or `test(scope): ...` prefix
  - Commit bug fixes with `fix: ...` or `fix(scope): ...` prefix
  - Commit new features with `feat: ...` or `feat(scope): ...` prefix
  - Commit breaking changes by adding `BREAKING CHANGE:` in the commit body (not the subject line)
  - Commit changes to `package.json`, `.gitignore` and other meta files with `chore(filenamewithoutext): ...`
  - Commit changes to README files or comments with `docs: ...`
  - Cody style changes with `style: standard`