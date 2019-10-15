[![Build Status](https://travis-ci.org/OvalMoney/stylelint-config-oval.svg?branch=master&style=flat)](https://travis-ci.org/OvalMoney/stylelint-config-oval)
[![npm](https://img.shields.io/npm/v/stylelint-config-oval.svg?style=flat)](https://www.npmjs.com/package/stylelint-config-oval)


# stylelint-config-oval

> Opinionated Stylelint sharable config for Oval projects.


## Install

```sh
yarn add --dev stylelint-config-oval
```

## Usage

Add a Stylelint config file to your project and extends with our config:

#### `.stylelintrc`
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


