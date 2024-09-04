# Exercise 11.1

Before getting our hands dirty with setting up the CI/CD pipeline let us reflect a bit on what we have read.

## 11.1 Warming up

Think about a hypothetical situation where we have an application being worked on by a team of about 6 people. The application is in active development and will be released soon.

Let us assume that the application is coded with some other language than JavaScript/TypeScript, e.g. in Python, Java, or Ruby. You can freely pick the language. This might even be a language you do not know much yourself.

Write a short text, say 200-300 words, where you answer or discuss some of the points below. You can check the length with https://wordcounter.net/. Save your answer to the file named exercise1.md in the root of the repository that you shall create in exercise 11.2.

The points to discuss:

- Some common steps in a CI setup include *linting*, *testing*, and *building*. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by Google.

- What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask Google!

- Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

Remember that there are no 'right' answers to the above!

---

## My answer

For the first point, I'll assume that I'm working on a Python project in a team of five. For linting, we could use [Ruff](https://github.com/astral-sh/ruff), which is like ESLint for Python and can take care of linting and formatting. For testing, we could use [tox](https://tox.wiki/en/latest/), while for build automation, we can use [PyBuilder](https://pybuilder.io/).

For the second point, instead of Jenkins or GitHub Actions we could look into alternatives like [CircleCI](https://circleci.com/), [Travis CI](https://www.travis-ci.com/), [Gitea](https://about.gitea.com/), [Woodpecker CI](https://woodpecker-ci.org/), or [GitLab CI/CD](https://docs.gitlab.com/ee/ci/), to name a few.

For the third and last point, whether we use a self-hosted or cloud-based environment for our CI/CD workflow would depend on the scale and timeframe of our project, as well as the budget. For smaller projects with a shorter timeframe and zero budget, then free cloud-based solutions like GitHub Actions are the way to go. If we're working on a bigger project with a longer timeframe, then it may be better to use a paid solution like Gitea (which has cloud and self-hosted solutions) which have more features and are more reliable DevOps platforms for building enterprise applications.
