FROM node
SHELL ["bash", "-c"]
WORKDIR /home/node
COPY . .
RUN chown -R node. .
USER node
RUN npm i --production
ENTRYPOINT ["node_modules/.bin/eslint"]
CMD ["--version"]
