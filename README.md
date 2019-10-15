# stylelint-config-oval

> Opinionated Stylelint sharable config for Oval projects.


## Install

```sh
yarn add --dev stylelint-config-oval
```

## Usage

Add a Stylelint config file to your project and extends with our config:

#### `.stylelintrc
```json
{
  "extends": "stylelint-config-oval"
}
```

## Develop

Run `eslint` for linting the `js` files:

```sh
yarn lint
```

Run tests with `Jest` for checking Styelint rules:

```sh
yarn test
```

## Release

`standard-version` is provided with a `release` command. Just run on `master`:

```sh
yarn release
```

And follow the prompt.


