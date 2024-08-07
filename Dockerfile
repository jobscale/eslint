FROM node:lts-bookworm-slim
SHELL ["bash", "-c"]
WORKDIR /home/node
USER node
COPY --chown=node:staff package.json .
RUN npm i --omit=dev
COPY --chown=node:staff eslint.config.mjs .
COPY --chown=node:staff rules rules
COPY --chown=node:staff index.js .
COPY --chown=node:staff app app
CMD ["npm", "run", "lint"]
