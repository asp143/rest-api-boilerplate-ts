import Logger from "../utils/logger";

class BaseFunction {
    public logger: any;
    constructor() {
        this.logger = new Logger(`${this.constructor.name}`);
        this.logger.info('test');
    }
}

export default BaseFunction;
