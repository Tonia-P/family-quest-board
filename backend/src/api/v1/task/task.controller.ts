import { Request, Response, NextFunction, Router } from 'express';
import { ITask, TaskModel } from './task.model';
import { ResourceController } from '../../shared';
import { StatusCodes } from 'http-status-codes';
import { Logger } from '../../shared/utils/logger';
export class TaskController extends ResourceController<ITask>{
    private logger: Logger = new Logger();
    constructor() {
        super(TaskModel);
    }
    /**
     * Apply all routes for tasks
     *
     * @returns {Router}
     */
    public applyRoutes(): Router {
        const router = Router();
        router
            .get('/', this.getTasks)
            .get('/:id', this.getTaskById)
            .post('/', this.postTask)
            .put('/:id', this.updateTask)
            .delete('/:id', this.deleteTask);

        return router;
    }

    /**
     * In all of the methods below, we are using the super class methods to perform the CRUD operations.
     * Request and Response are passed to the super class methods so that they can be extracted and used.
     * In case you need to do any preprocessing (e.g., filter a body's field) you can do it before calling the super class methods.
     */
    /**
     * Sends a message containing all tasks back as a response
     * @param req
     * @param res 
     */
    getTasks = async (req: Request, res: Response) => {
        this.logger.debug('getTasks request');
        try {
            const allTasks = await TaskModel.find({}).populate('participants'); // Use populate() to populate participants field with user objects
            return res.status(StatusCodes.OK).json(allTasks);
        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }

    /**
     * Creates a new task
     * @param req
     * @param res
     */

    postTask = async (req: Request, res: Response) => {
        this.logger.debug('postTask request');
        // you can pre-process the request here before passing it to the super class method
        const task = await this.create(req, res);
        // you can process the data retrieved here before returning it to the client
        return res
            .status(StatusCodes.OK)
            .json(task);
    }

    /**
     * Delete task by id
     * @param req 
     * @param res 
     */
    deleteTask = async (req: Request, res: Response) => {
        this.logger.debug('deleteTask request');
        // you can pre-process the request here before passing it to the super class method
        const task = await this.delete(req.params.id, req, res);
        // you can process the data retrieved here before returning it to the client
        return res
            .status(StatusCodes.OK)
            .json(task);

    }

    /**
     * Update task by id
     * @param req 
     * @param res 
     */
    updateTask = async (req: Request, res: Response) => {
        this.logger.debug('updateTask request');
        // you can pre-process the request here before passing it to the super class method
        const task = await this.update(req.params.id, req.body.blacklist, req, res);
        // you can process the data retrieved here before returning it to the client
        return res
            .status(StatusCodes.OK)
            .json(task);
    }

    /**
     * Get single task by id
     * @param req 
     * @param res 
     */
    getTaskById = async (req: Request, res: Response) => {
        this.logger.debug('getTaskById request');
        try {
            const taskId = req.params.id;
            const task = await TaskModel.findById(taskId).populate('participants'); // Use populate() to populate participants field with user objects
            if (!task) {
                return res.status(StatusCodes.NOT_FOUND).json({ message: 'Task not found' });
            }
            return res.status(StatusCodes.OK).json(task);
        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }
}
