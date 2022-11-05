FROM node:lts-buster-slim
SHELL ["bash", "-c"]
WORKDIR /home/node
USER node
COPY --chown=node:staff package.json .
RUN npm i --omit=dev
COPY --chown=node:staff .eslintrc.js .
ENTRYPOINT ["node_modules/.bin/eslint"]
CMD ["."]
