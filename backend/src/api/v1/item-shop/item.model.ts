import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from '../../../models/shared';


// ------------------------------------------
// Interface declaration
export interface IItem extends Document {
  name: string;
  description: string;
  price: number;
  selected: boolean;
  sold: boolean;
}

// ------------------------------------------
// Schema definition
const itemSchema = new Schema(
  {
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    selected: {type: Boolean, required: true},
    sold: {type: Boolean, required: true}
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const ItemModel: Model<IItem> = model<IItem>(
  'Item', itemSchema, 'Item'
);
