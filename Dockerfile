FROM node:lts-buster-slim
SHELL ["bash", "-c"]
WORKDIR /home/node
USER node
COPY --chown=node:staff . .
RUN npm i --omit=dev
ENTRYPOINT ["node_modules/.bin/eslint"]
CMD ["--version"]
