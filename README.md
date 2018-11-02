# Lerna-JSConfig

> Generate jsconfig.json allowing VSCode to \"Open Definition\" your Lerna packages.

## Install

```shell
$ npm i --save lerna-jsconfig
```

## Usage

1. Add a `jsconfig.json` to your Lerna root

  ```json
  {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {}
    }
  }
  ```

2. From inside your Lerna project:

  ```shell
  $ npx --no-install lerna-jsconfig
  ```

## CLI Output

```shell
lerna notice cli v3.4.3
lerna success found 13 packages
jsconfig.json was updated in Lerna root: /Users/username/repos/lerna-project-dir
{ compilerOptions:
   { baseUrl: '.',
     paths:
      { '@project/comp-a': [Array],
        '@project/comp-b': [Array],
        '@project/comp-c': [Array] } } }
```

## JSON Output

`<lerna-root>/tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@project/comp-a": [
        "./packages/comp-a/src/index.js"
      ],
      "@project/comp-b": [
        "./packages/comp-b/src/index.js"
      ],
      "@project/comp-b": [
        "./packages/comp-b/src/index.js"
      ]
    }
  }
}
```

```shell
$ npx --no-install lerna-jsconfig
```

## WARNING!

- This will overwrite any existing `jsconfig.json` paths.
- You MUST have a `jsconfig.json` in your Lerna root before running this.
- You MUST have a `package.json` with a `main` or `module` entry point in the `package.json` files for each or your packages.