const https = require('https');
const http = require('http');
const { HttpsProxyAgent } = require('https-proxy-agent');
const { HttpProxyAgent } = require('http-proxy-agent');

class App {
  get logger() {
    const logger = {};
    Object.entries(console).forEach(([key, value]) => {
      logger[key] = (...argv) => value(`[${key.toUpperCase()}]`, ...argv);
    });
    return logger;
  }

  promiseGen() {
    const prom = {};
    prom.pending = new Promise((...argv) => { [prom.resolve, prom.reject] = argv; });
    return prom;
  }

  async fetch(url, options) {
    const instanceOptions = {};
    Object.assign(instanceOptions, options);
    const [protocol] = url.split(':');
    const proxy = process.env[`${protocol}_proxy`];
    if (proxy) {
      const Agent = { https: HttpsProxyAgent, http: HttpProxyAgent };
      instanceOptions.agent = new Agent[protocol](proxy);
    }
    const prom = this.promiseGen();
    const fetch = { https, http };
    fetch[protocol].get(url, instanceOptions, res => {
      const { statusCode, statusMessage } = res;
      const chunked = [];
      res.on('data', chunk => {
        chunked.push(chunk);
      });
      res.on('end', () => {
        prom.resolve({
          statusCode, statusMessage, body: chunked.join(''),
        });
      });
      res.on('error', e => {
        prom.reject(e);
      });
    });
    return prom.pending;
  }
}

module.exports = {
  app: new App(),
  App,
};
