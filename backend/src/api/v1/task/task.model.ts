import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from '../../../models/shared';
import { IUser } from '../User/User.model';


// ------------------------------------------
// Interface declaration
export interface ITask extends Document {
  title: string;
  description: string;
  type: string;
  deadline: Date;
  difficulty: number;
  participants: IUser['_id'][];

}

// ------------------------------------------
// Schema definition
const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    deadline: { type: Date, required: false },
    difficulty: { type: Number, required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User', required: false }]
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const TaskModel: Model<ITask> = model<ITask>(
  'Task', taskSchema, 'Task'
);
