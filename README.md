# ESLint with Docker container

## ESLint v9

## Examples

### lint

```
{
  docker build . -t jobscale/eslint \
  && docker run --rm -v $(pwd):/home/node/task -it jobscale/eslint
}
```

### lint fix

```
{
  docker build . -t jobscale/eslint \
  && docker run --rm -v $(pwd):/home/node/task -it jobscale/eslint npm run lint:fix
}
```
