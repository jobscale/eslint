FROM node
SHELL ["bash", "-c"]
WORKDIR /home/node
COPY . .
USER node
RUN npm i --production
ENTRYPOINT /home/node/node_modules/.bin/eslint
CMD ["--", "--version"]
