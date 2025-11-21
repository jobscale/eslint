# ESLint Plugin Standard

## ESLint v9

### Install

```
npm i -D @jobscale/eslint-plugin-standard
```

### eslint.config.js

```
import standard from '@jobscale/eslint-plugin-standard';

export default [
  standard.configs.standard,
];
```

## Docker Examples

```
  docker pull jobscale/eslint-plugin-standard
```

### Build

```
docker build . -t jobscale/eslint-plugin-standard
```

### lint

```
docker run --rm -v $(pwd):/home/node/task -it jobscale/eslint-plugin-standard
```

### lint fix

```
docker run --rm -v $(pwd):/home/node/task -it jobscale/eslint-plugin-standard npm run lint -- --fix
```
