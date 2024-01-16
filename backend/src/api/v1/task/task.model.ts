import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from '../../../models/shared';
import { IUser } from '../User/User.model';

enum taskTypes {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  ONETIME = 'onetime'
}


// ------------------------------------------
// Interface declaration
export interface ITask extends Document {
  title: string;
  description: string;
  type: "Daily" | "Weekly" | "One Ttime";
  deadline: string;
  difficulty: number;
  participants: IUser['name'][];
  reward: number;
  completed: boolean;

}

// ------------------------------------------
// Schema definition
const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, enum: Object.values(taskTypes), required: true },
    deadline: { type: String, required: false },
    difficulty: { type: Number, required: true },
    participants: [{ type: String, required: false }],
    reward: { type: Number, required: true},
    completed: { type: Boolean, required: true}
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const TaskModel: Model<ITask> = model<ITask>(
  'Task', taskSchema, 'Task'
);
