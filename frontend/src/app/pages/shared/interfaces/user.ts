import { Quest } from "./quest";

export interface User {
    _id: string;
    name: string;
    currency: string;
    quests: Task[];
    parent: boolean;
}
