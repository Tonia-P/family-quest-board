import { Request, Response, NextFunction, Router } from 'express';
import { IUser, UserModel } from './User.model';
import { ITask, TaskModel } from '../task/task.model';
import { ResourceController } from '../../shared';
import { StatusCodes } from 'http-status-codes';
import { Logger } from '../../shared/utils/logger';

import { DIContainer, SocketsService } from "../../../services";
export class UserController extends ResourceController<IUser>{
    private logger: Logger = new Logger();
    constructor() {
        super(UserModel);
    }
    /**
     * Apply all routes for tasks
     *
     * @returns {Router}
     */
    public applyRoutes(): Router {
        const router = Router();
        router
            .get('/', this.getUsers)
            .get('/:id', this.getUserById)
            .post('/', this.postUser)
            .put('/:id', this.updateUser)
            .delete('/:id', this.deleteUser)
            .post('/:id/quests/:questId', this.addUserQuest)
            .get('/:id/quests', this.getUserQuests)
            .get('/:id/quests/:questId', this.getUserQuestsById)
            .put('/:id/quests/:questId', this.updateUserQuest)
            .delete('/:id/quests/:questId', this.deleteUserQuest)
            .post('/pingOtherDevices', this.pingOtherDevicesForTask);



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
    getUsers = async (req: Request, res: Response) => {
        this.logger.debug('getUsers request');
        try {
            const allUsers = await UserModel.find({}).populate('quests'); // Use populate() to populate participants field with user objects
            return res.status(StatusCodes.OK).json(allUsers);
        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }

    /**
     * Creates a new task
     * @param req
     * @param res
     */

    postUser = async (req: Request, res: Response) => {
        this.logger.debug('postUser request');
        // you can pre-process the request here before passing it to the super class method
        const user = await this.create(req, res);
        // you can process the data retrieved here before returning it to the client
        return res
            .status(StatusCodes.OK)
            .json(user);
    }

    /**
     * Delete task by id
     * @param req 
     * @param res 
     */
    deleteUser = async (req: Request, res: Response) => {
        this.logger.debug('deleteUser request');
        // you can pre-process the request here before passing it to the super class method
        const user = await this.delete(req.params.id, req, res);
        // you can process the data retrieved here before returning it to the client
        return res
            .status(StatusCodes.OK)
            .json(user);

    }

    /**
     * Update task by id
     * @param req 
     * @param res 
     */
    updateUser = async (req: Request, res: Response) => {
        this.logger.debug('updateUser request');
        // you can pre-process the request here before passing it to the super class method
        const user = await this.update(req.params.id, req.body.blacklist, req, res);
        // you can process the data retrieved here before returning it to the client
        return res
            .status(StatusCodes.OK)
            .json(user);
    }

    /**
     * Get single task by id
     * @param req 
     * @param res 
     */
    getUserById = async (req: Request, res: Response) => {
        this.logger.debug('getUserById request');
        try {
            const userId = req.params.id;
            const user = await UserModel.findById(userId).populate('quests'); // Use populate() to populate participants field with user objects
            if (!user) {
                return res.status(StatusCodes.NOT_FOUND).json({ message: 'Task not found' });
            }
            return res.status(StatusCodes.OK).json(user);
        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }


    addUserQuest = async (req: Request, res: Response) => {
        this.logger.debug('addUSerQuest request');
        try {
            const userId = req.params.id;
            const questId = req.params.questId;

            const user = await UserModel.findById(userId);
            if (!user) {
                return res.status(StatusCodes.NOT_FOUND).json({ error: "Could not find the user" });
            }

            const quest = await TaskModel.findById(questId);
            if (!quest) {
                return res.status(StatusCodes.NOT_FOUND).json({ error: "Could not find the quest" });
            }

            const index = user.quests.findIndex(task => task._id.equals(questId));

            if (index !== -1) {
                return res.status(StatusCodes.BAD_REQUEST).json({ error: "Can not add quest duplicate" });
            }

            user.quests.push(quest);

            req.body = { "quests": user.quests };

            const updatedUser = await this.update(req.params.id, req.body.blacklist, req, res);

            return res.status(StatusCodes.OK).json(user);

        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }

    deleteUserQuest = async (req: Request, res: Response) => {
        this.logger.debug('addUSerQuest request');
        try {
            const userId = req.params.id;
            const questId = req.params.questId;

            const user = await UserModel.findById(userId);
            if (!user) {
                return res.status(StatusCodes.NOT_FOUND).json({ error: "Could not foind the user" });
            }

            const index = user.quests.findIndex(task => task._id.equals(questId));

            if (index !== -1) {
                user.quests.splice(index, 1);
            }

            req.body = { "quests": user.quests };

            const updatedUser = await this.update(req.params.id, req.body.blacklist, req, res);

            return res.status(StatusCodes.OK).json(user);

        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }

    getUserQuests = async (req: Request, res: Response) => {
        this.logger.debug('getUsers request');
        try {
            const userId = req.params.id;
            const user = await UserModel.findById(userId);
            if (!user) {
                return res.status(StatusCodes.NOT_FOUND).json({ error: "Could not find the user" });
            }
            return res.status(StatusCodes.OK).json(user.quests);
        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }

    getUserQuestsById = async (req: Request, res: Response) => {
        this.logger.debug('getUsers request');
        try {
            const userId = req.params.id;
            const questId = req.params.questId;
            const user = await UserModel.findById(userId);
            if (!user) {
                return res.status(StatusCodes.NOT_FOUND).json({ error: "Could not find the user" });
            }
            const index = user.quests.findIndex(task => task._id.equals(questId));
            if(index !== -1){
                return res.status(StatusCodes.OK).json(user.quests[index]);
            }
            else{
                console.log("Could not find the user's task");
                return res.status(StatusCodes.OK).json();
            }
        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }

    updateUserQuest = async (req: Request, res: Response) => {
        this.logger.debug('addUSerQuest request');
        try {
            const userId = req.params.id;
            const questId = req.params.questId;

            const user = await UserModel.findById(userId);
            if (!user) {
                return res.status(StatusCodes.NOT_FOUND).json({ error: "Could not find the user" });
            }

            const index = user.quests.findIndex(task => task._id.equals(questId));

            if (index !== -1) {
                const quest = {...user.quests[index], ...req.body};

                
                user.quests[index] = quest;
            }

            req.body = { "quests": user.quests };

            const updatedUser = await this.update(req.params.id, req.body.blacklist, req, res);

            return res.status(StatusCodes.OK).json(user);

        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }

    pingOtherDevicesForTask = async (req: Request, res: Response) => {
        try{
            const socket = DIContainer.get(SocketsService);
            socket.publish(req.body.event, req.body.message);
            return res.status(StatusCodes.OK).json(req.body.message);
        }
        catch(error: any){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }

}

