# ESLint with Docker container

## Example

### lint

```
docker run --rm -v $(pwd)/app:/home/node/app -it jobscale/eslint app
```

### lint fix

```
docker run --rm -v $(pwd)/app:/home/node/app -it jobscale/eslint --fix app
```
