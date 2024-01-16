import { Request, Response, NextFunction, Router } from 'express';
import { IShop, ShopModel } from './shop.model';
import { IItem, ItemModel } from './item.model';
import { ResourceController } from '../../shared';
import { StatusCodes } from 'http-status-codes';
import { Logger } from '../../shared/utils/logger';

export class ShopController extends ResourceController<IShop>{

    private logger: Logger = new Logger();
    constructor() {
        super(ShopModel);
    }
    /**
     * Apply all routes for example
     *
     * @returns {Router}
     */
    public applyRoutes(): Router {
        const router = Router();
        router
            .get('/', this.getShops)
            .get('/:id', this.getShopById)
            .post('/', this.postShop)
            .put('/:id', this.updateShop)
            .delete('/:id', this.deleteShop)
            .post('/:id/items/:itemId', this.addShopItem)
            .get('/:id/items', this.getShopItems)
            .get('/:id/items/:itemId', this.getShopItemsById)
            .put('/:id/items/:itemId', this.updateShopItem)
            .delete('/:id/items/:itemId', this.deleteShopItem);

        return router;
    }


    /**
     * Sends a message containing all tasks back as a response
     * @param req
     * @param res 
     */
    getShops = async (req: Request, res: Response) => {
        this.logger.debug('getShops request');
        const allTasks = await this.getAll(req, res);
        return res
            .status(StatusCodes.OK)
            .json(allTasks);
    }

    /**
     * Creates a new task
     * @param req
     * @param res
     */

    postShop = async (req: Request, res: Response) => {
        this.logger.debug('postShop request');
        const task = await this.create(req, res);
        return res
            .status(StatusCodes.OK)
            .json(task);
    }

    /**
     * Delete task by id
     * @param req 
     * @param res 
     */
    deleteShop= async (req: Request, res: Response) => {
        this.logger.debug('deleteItem request');
        const task = await this.delete(req.params.id, req, res);
        return res
            .status(StatusCodes.OK)
            .json(task);

    }

    /**
     * Update task by id
     * @param req 
     * @param res 
     */
    updateShop = async (req: Request, res: Response) => {
        this.logger.debug('updateItem request');
        const task = await this.update(req.params.id, req.body.blacklist, req, res);
        return res
            .status(StatusCodes.OK)
            .json(task);
    }

    /**
     * Get single task by id
     * @param req 
     * @param res 
     */
    getShopById = async (req: Request, res: Response) => {
        this.logger.debug('getItemById request');
        const item = await this.getOne(req.params.id, req, res);
        return res
            .status(StatusCodes.OK)
            .json(item);
    }

    addShopItem = async (req: Request, res: Response) => {
        this.logger.debug('addUSerQuest request');
        try {
            const shopId = req.params.id;
            const itemId = req.params.itemId;

            const shop = await ShopModel.findById(shopId);
            if (!shop) {
                return res.status(StatusCodes.NOT_FOUND).json({ error: "Could not find the shop" });
            }

            const item = await ItemModel.findById(itemId);
            if (!item) {
                return res.status(StatusCodes.NOT_FOUND).json({ error: "Could not find the quest" });
            }

            const index = shop.items.findIndex(item => item._id.equals(itemId));

            if (index !== -1) {
                return res.status(StatusCodes.BAD_REQUEST).json({ error: "Can not add quest duplicate" });
            }

            shop.items.push(item);

            req.body = { "items": shop.items };

            const updatedShop = await this.update(req.params.id, req.body.blacklist, req, res);

            return res.status(StatusCodes.OK).json(shop);

        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }

    deleteShopItem = async (req: Request, res: Response) => {
        this.logger.debug('addUSerQuest request');
        try {
            const shopId = req.params.id;
            const itemId = req.params.itemId;

            const shop = await ShopModel.findById(shopId);
            if (!shop) {
                return res.status(StatusCodes.NOT_FOUND).json({ error: "Could not foind the shop" });
            }

            const index = shop.items.findIndex(item => item._id.equals(itemId));

            if (index !== -1) {
                shop.items.splice(index, 1);
            }

            req.body = { "items": shop.items };

            const updatedShop = await this.update(req.params.id, req.body.blacklist, req, res);

            return res.status(StatusCodes.OK).json(shop);

        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }

    getShopItems = async (req: Request, res: Response) => {
        this.logger.debug('getUsers request');
        try {
            const shopId = req.params.id;
            const shop = await ShopModel.findById(shopId);
            if (!shop) {
                return res.status(StatusCodes.NOT_FOUND).json({ error: "Could not find the shop" });
            }
            return res.status(StatusCodes.OK).json(shop.items);
        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }

    getShopItemsById = async (req: Request, res: Response) => {
        this.logger.debug('getUsers request');
        try {
            const shopId = req.params.id;
            const itemId = req.params.itemId;
            const shop = await ShopModel.findById(shopId);
            if (!shop) {
                return res.status(StatusCodes.NOT_FOUND).json({ error: "Could not find the shop" });
            }
            const index = shop.items.findIndex(item => item._id.equals(itemId));
            if(index !== -1){
                return res.status(StatusCodes.OK).json(shop.items[index]);
            }
            else{
                return res.status(StatusCodes.NOT_FOUND).json({ error: "Could not find the quest" });
            }
        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }

    updateShopItem = async (req: Request, res: Response) => {
        try {
            const shopId = req.params.id;
            const itemId = req.params.itemId;

            const shop = await ShopModel.findById(shopId);
            if (!shop) {
                return res.status(StatusCodes.NOT_FOUND).json({ error: "Could not find the shop" });
            }

            const index = shop.items.findIndex(item => item._id.equals(itemId));

            if (index !== -1) {
                const item = {...shop.items[index], ...req.body};

                
                shop.items[index] = item;
            }

            req.body = { "items": shop.items };

            const updatedShop = await this.update(req.params.id, req.body.blacklist, req, res);

            return res.status(StatusCodes.OK).json(shop);

        } catch (error: any) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
        }
    }


}
