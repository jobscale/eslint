const std = console;
const loader = require;
const native = () => undefined;
class Core {
  constructor() {
    global.logger = this.logger;
    global.promiseGen = this.promiseGen;
    global.fetch = this.fetch;
  }
  get logger() {
    const logger = {};
    Object.entries(std).forEach(([key, value]) => {
      logger[key] = value;
      std[key] = native;
    });
    return logger;
  }
  promiseGen() {
    const prom = {};
    prom.pending = new Promise((...argv) => { [prom.resolve, prom.reject] = argv; });
    return prom;
  }
  fetch(url, options) {
    const instanceOptions = {};
    Object.assign(instanceOptions, options);
    if (!instanceOptions.agent && process.env.http_proxy) {
      logger.log(process.env.http_proxy);
      const protocol = url.split(':')[0];
      const Agent = loader(`${protocol}-proxy-agent`);
      instanceOptions.agent = new Agent(process.env[`${protocol}_proxy`]);
    }
    return loader('axios')(url, instanceOptions);
  }
}
const core = new Core();
module.exports = {
  logger: core.logger,
  promiseGen: core.promiseGen,
  fetch: core.fetch,
};
