import { Request, Response, Router } from 'express';
import { Logger } from '../../shared/utils/logger';

export class ExampleController {
    private logger: Logger = new Logger();

    constructor() {
        this.getExample = this.getExample.bind(this); // Binding getExample to the instance of ExampleController
    }

    /**
     * Apply all routes for example
     *
     * @returns {Router}
     */
    public applyRoutes(): Router {
        const router = Router();
        router.get('/hello', this.getExample);
        return router;
    }

    /**
     * Send an example message back as a response
     */
    public getExample(req: Request, res: Response) {
        this.logger.debug('getExample request');
        res.json({ message: 'hello there!' });
    }
}
