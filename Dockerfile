FROM node:lts-bullseye-slim
SHELL ["bash", "-c"]
WORKDIR /home/node
USER node
COPY --chown=node:staff package.json .
RUN npm i --omit=dev
COPY --chown=node:staff .eslintrc.js .
COPY --chown=node:staff app app
ENTRYPOINT ["node_modules/.bin/eslint"]
CMD ["."]
