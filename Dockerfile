FROM node
SHELL ["bash", "-c"]
WORKDIR /home/node
COPY . .
USER node
RUN npm i --production
ENTRYPOINT ["node_modules/.bin/eslint"]
CMD ["--version"]
