import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from '../../../models/shared';
import { IUser } from '../User/User.model';
import { IItem } from './item.model';


// ------------------------------------------
// Interface declaration
export interface IShop extends Document {
  name: string;
  owner: string;
  items: IItem[];
}

// ------------------------------------------
// Schema definition
const shopSchema = new Schema(
  {
    name: {type: String, required: true},
    owner: { type: String, required: true },
    items: [{ type: Object, required: false }]
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const ShopModel: Model<IShop> = model<IShop>(
  'Shop', shopSchema, 'Shop'
);
