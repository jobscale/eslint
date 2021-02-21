# ESLint with Docker container

## Example

### lint

```
docker run --rm -v $(pwd):/home/node/app -it jobscale/eslint app
```

### lint fix

```
docker run --rm -v $(pwd):/home/node/app -it jobscale/eslint --fix app
```
