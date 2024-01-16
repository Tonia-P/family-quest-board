import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from '../../../models/shared';
import {ITask, TaskModel} from '../task/task.model';


// ------------------------------------------
// Interface declaration
export interface IUser extends Document {
  name: string;
  coins: number;
  quests: ITask[];
  parent: boolean;
}

// ------------------------------------------
// Schema definition
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    coins: { type: Number, required: true },
    quests: [{ type: Object, required: false }],
    parent: { type: Boolean, required: true }
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const UserModel: Model<IUser> = model<IUser>(
  'User', userSchema, 'User'
);
