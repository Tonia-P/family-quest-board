import * as express from 'express';
import { ExampleController } from './example/example.controller';
import { ShopController } from './item-shop/shop.controller';
import { ItemController } from './item-shop/item.controller';
import { TaskController } from './task/task.controller';
import { UserController } from './User/User.controller';
const apiV1Router = express.Router();


apiV1Router
  // Example routes
  .use(
    '/example',
    new ExampleController().applyRoutes()
  )
  .use(
    '/shop',
    new ShopController().applyRoutes()
  )
  .use(
    '/item',
    new ItemController().applyRoutes()
  )
  .use(
    '/tasks',
    new TaskController().applyRoutes()
  )
  .use(
    '/users',
    new UserController().applyRoutes()
  );

export { apiV1Router };

