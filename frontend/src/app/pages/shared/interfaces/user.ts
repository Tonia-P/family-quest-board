import { Quest } from "./quest";

export interface User {
    _id: string;
    name: string;
    coins: number;
    quests: Task[];
    parent: boolean;
}
