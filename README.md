# nestjs-standard-middleware

Boilerplate for including standard ExpressJS middleware into a NestJS project as a submodule following a NestJS paradigm. Just import this package and add this module as a dependency to your `app.module.ts`.

# TODO

- [ ] Refactor to set all options to `undefined` before freezing options.
- [ ] Document API and how to pass parameters.
- [ ] Make it possible for consumer to choose which middlewares to (or not to) use.

# Update: 5 December 2017

I recommend using https://github.com/wbhob/nest-middlewares instead if you're looking for a more flexible version, and hopefully more regularly updated. If you don't trust hobbyist third parties to keep their projects up to date, it's more advisable to fork this repo and use it as a starting point for your own middlewares module.
