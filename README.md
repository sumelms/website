<p align="center">
  <a href="http://www.sumelms.com">
    <img src=".github/sumelms.svg" />
  </a>
</p>

<p align="center">
  <a href="https://travis-ci.com/github/sumelms/website">
    <img alt="Travis (.org)" src="https://travis-ci.com/sumelms/website.svg?branch=main">
  </a>
  <img alt="GitHub" src="https://img.shields.io/github/license/sumelms/website">
  <a title="Crowdin" target="_blank" href="https://crowdin.com/project/sum-lms-website"><img src="https://badges.crowdin.net/sum-lms-website/localized.svg"></a>
  <a href="https://discord.gg/Yh9q9cd">
    <img alt="Discord" src="https://img.shields.io/discord/726500188021063682">
  </a>
</p>

## About Sumé LMS

Sumé LMS is a modern and open-source learning management system that uses modern technologies to deliver performance and scalability to your learning environment.

- Compatible with SCORM and xAPI (TinCan)
- Flexible and modular
- Open-source and Free
- Fast and modern
- Easy to install and run
- Designed for microservices
- REST API based application
- and more.

> Note: Find more about the Sumé LMS visiting the official [website](https://www.sumelms.com/)

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [Team](#team)
- [Support](#support)
- [License](#license)

## Prerequisites

- [NodeJS >= v12.16.3](https://nodejs.org/en/download/releases/)

> This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Contributing

Thank you for considering contributing to the project. In order to ensure that the Sumé LMS community is welcome to all make sure to read our [Contributor Guideline](https://www.sumelms.com/docs/development/contribute).

## Code of Conduct

Would you like to contribute and participate in our communities? Please read our [Code of Conduct](https://www.sumelms.com/docs/conduct).

## Team

### Core

- Ariane Rocha (@arianerocha)
- Camila Moura (@mouracamila)
- Ricardo Lüders (@rluders)

### Contributors

...

## Support

### Discussion

You can reach us or get community support in our [Discord server](https://discord.gg/Yh9q9cd). This is the best way to
find help and get in touch with the community.

### Bugs or feature requests

If you found a bug or have a feature request, the best way to do
it is [opening an issue](https://github.com/sumelms/website/issues).


## License

This project is licensed by the Apache License 2.0. For more information check the LICENSE file.
