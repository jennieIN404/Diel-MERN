# Contributing Guidelines

Thank you for contributing to Dialectica! Pull requests, bug reports, and all other forms of contribution are welcomed and highly encouraged!

## Contents
- [Contributing Guidelines](#contributing-guidelines)
  - [Contents](#contents)
  - [Follow these guidelines before contributing!](#follow-these-guidelines-before-contributing)
  - [Issues](#issues)
    - [Documentation](#documentation)
    - [Bug reports](#bug-reports)
    - [Enhancement](#enhancement)
    - [What if I'm new?](#what-if-im-new)
    - [What to do if I spot an issue I'd like to work on?](#what-to-do-if-i-spot-an-issue-id-like-to-work-on)
  - [Contribution overview](#contribution-overview)
    - [Getting started](#getting-started)
    - [Creating pull request](#creating-pull-request)
  - [Special cases](#special-cases)
  - [License](#license)

Without any further ado, let's get started

## Follow these guidelines before contributing!

- Write clear, descriptive commit messages.
- Follow existing code style and conventions.
- Add tests for new features when possible.
- Document your changes in the README if relevant.

## Issues

### Documentation

- Open a new issue using the documentation label.
- Include a clear title, a concise description, and details about the documentation you're going to contribute.
- Ensure the documentation is beginner-friendly and readable.

### Bug reports

- Open a new issue using the bug label.
- Include a clear title, a concise description, and the file name/line number if possible.
- Mention expected behavior vs actual behavior.
- Provide steps to reproduce the issue.
- Add screenshots or screen recordings to help us understand better.

### Enhancement

- Open a new issue using the feature or docs label.
- Describe what you’re proposing and why it matters.
- Include UI mockups, screenshots, or API flow diagrams, if applicable.
- Keep ideas beginner-friendly and scalable.

### What if I'm new?

If you're new, we encourage you to take a look at issues tagged with [good first issue](https://github.com/jennieIN404/Diel-MERN/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

Sometimes there won’t be any issues with these labels. That’s ok! There is likely still something for you to work on, sometimes with other labels.

### What to do if I spot an issue I'd like to work on?

Once you see an issue that you'd like to work on, please post a comment saying that you want to work on it. Something like "I want to work on this, assign to me" is fine.

## Contribution overview

### Getting started

1. Star and fork the repo.
2. Clone your fork by either of these methods.

```bash
git clone https://github.com/yourusername/dialectica.git
cd dialectica
```

```bash
gh repo clone yourusername/Diel-MERN
cd dialectica
```

3. Create a new branch in this format.

```bash
git checkout -b feature/your-feature
```

So, if you were adding UI changes to the homepage, it'll be `enhancement/homepage-improved`.

4. Install dependencies

```bash
npm install
```

5. Create a `.env` file in the root directory. This would host these environment variables required by the repo.

```bash
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

6. Start the application

```bash
npm start
```

7. To trigger development mode, use this (auto-restarts application)

```bash
npm run dev
```

### Creating pull request

To send your contributions to the actual repo., do the following steps:

1. Commit your changes

```bash
git add .
git commit -m "Add your feature"
```

Replace 'Add your feature' with a meaningful commit message. Example, if you were adding UI changes to the homepage, your message could be 'Improved UI of the homepage".

2. Push changes to branch

```bash
git push origin feature/your-feature
```

Remember, NEVER push to `main`. Always push to the branch you had created at first!

3. Open a pull-request

- Reference related issue(s): Fixes `#<issue-number>`
- Add a clear title and summary.

## Special cases

We gladly welcome contributors from GSSoC, Hacktoberfest, etc. Open-source contribution is an important pillar of the tech community, after all.

We suggest contributors and mentors to join [Diel's discord server](https://discord.gg/uc2AHnBd) for better coordination in this project.

## License

This codebase is licensed under:

Boost Software License - Version 1.0 - August 17th, 2003
