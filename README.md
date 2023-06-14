# Chocolai 🍫

![Chocolai](public/chocolai.jpg)

Welcome to Chocolai - your tool for customising chocolate.

Chocolate just got a whole lot sweeter.

AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro blog theme. This theme is designed and crafted based on [my personal blog](https://satnaing.dev/blog).

This theme follows best practices and provides accessibility out of the box. Light and dark mode are supported by default. Moreover, additional color schemes can also be configured.

This theme is self-documented \_ which means articles/posts in this theme can also be considered as documentations. Read [the blog posts](https://astro-paper.pages.dev/posts/) or check [the README Documentation Section](#-documentation) for more info.

## Table of contents

- [Getting started](#getting-started)
- [CLI documentation](#cli-documentation)
- [Features](#features)
- [Lighthouse Score](#lighthouse-score)

## Features

- [x] type-safe markdown
- [x] super fast performance
- [x] accessible (Keyboard/VoiceOver)
- [x] responsive (mobile ~ desktops)
- [x] SEO-friendly
- [ ] framer motion used to bring React website to life with animations
- [ ] light & dark mode
- [ ] add custom color and file support
- [ ] generate and use images through DALLE AI
- [ ] download the chocolate bar design
- [ ] partials with SASS/SCSS
- [ ] use three JS and react three iber for rendering and creating the 3D model

## Lighthouse Score

<p align="center">
  <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fastro-paper.pages.dev%2F&form_factor=desktop">
    <img width="710" alt="AstroPaper Lighthouse Score" src="AstroPaper-lighthouse-score.svg">
  <a>
</p>

## Project Structure

Inside of AstroPaper, you'll see the following folders and files:

```bash
/
├── public/
│   ├── assets/
│   │   └── logo.svg
│   │   └── logo.png
│   └── favicon.svg
│   └── astropaper-og.jpg
│   └── robots.txt
│   └── toggle-theme.js
├── src/
│   ├── assets/
│   │   └── socialIcons.ts
│   ├── components/
│   ├── content/
│   │   |  blog/
│   │   |    └── some-blog-posts.md
│   │   └── _schemas.ts
│   │   └── config.ts
│   ├── layouts/
│   └── pages/
│   └── styles/
│   └── utils/
│   └── config.ts
│   └── types.ts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

All blog posts are stored in `src/content/blog` directory.

## Tech Stack

**Main Framework** - [Astro](https://astro.build/)  
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)  
**Component Framework** - [ReactJS](https://reactjs.org/)  
**Styling** - [TailwindCSS](https://tailwindcss.com/)  
**UI/UX** - [Figma](https://figma.com)  
**Fuzzy Search** - [FuseJS](https://fusejs.io/)  
**Icons** - [Boxicons](https://boxicons.com/) | [Tablers](https://tabler-icons.io/)  
**Code Formatting** - [Prettier](https://prettier.io/)  
**Deployment** - [Cloudflare Pages](https://pages.cloudflare.com/)  
**Illustration in About Page** - [https://freesvgillustration.com](https://freesvgillustration.com/)  
**Linting** - [ESLint](https://eslint.org)

## Feedback & Suggestions

If you have any suggestions/feedback, you can contact me via [my email](mailto:contact@sf-adams.com). Alternatively, feel free to open an issue if you find bugs or want to request new features.

## License

Licensed under the MIT License, Copyright © 2023

## Acknowledgements

- [Custom Tony's Bar](https://tonyschocolonely.com/us/en/custom-gifting-chocolate-bar-wrappers)
- [Tony's Design](https://dribbble.com/shots/20815734-Tony-s-Chocolonely-eCommerce)

---

Made with 🤍 by [Sam Adams](https://sf-adams.com)

[![Portfolio][portfolio-shield]][portfolio-url]
[![GitHub][github-shield]][github-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

[portfolio-shield]: https://img.shields.io/badge/Portfolio-FFD300?style=for-the-badge&logo=aboutdotme&logoColor=242424
[portfolio-url]: https://sf-adams.com
[github-shield]: https://img.shields.io/badge/GitHub-FFD300?style=for-the-badge&logo=github&logoColor=242424
[github-url]: https://github.com/sf-adams/
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-FFD300?style=for-the-badge&logo=linkedin&logoColor=242424
[linkedin-url]: https://linkedin.com/in/sf-adams
