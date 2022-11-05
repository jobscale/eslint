# ESLint with Docker container

## Example

### lint

```
{
  docker build . -t jobscale/eslint \
  && docker run --rm -v $(pwd)/app:/home/node/app -it jobscale/eslint
}
```

### lint fix

```
{
  docker build . -t jobscale/eslint \
  && docker run --rm -v $(pwd)/app:/home/node/app -it jobscale/eslint --fix

}
```
