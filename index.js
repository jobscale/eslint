const { App } = require('./app');

const { logger } = new App();

const main = async () => {
  const list = [
    'https://inet-ip.info/ip',
    'http://inet-ip.info/ip',
  ];
  for (const [index, url] of list.entries()) {
    const res = await new App().fetch(url);
    const { statusCode, statusMessage, body } = res;
    logger.info (index, { statusCode, statusMessage, body });
  }
};

main();
